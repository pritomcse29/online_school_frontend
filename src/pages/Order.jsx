// import React, { useEffect, useState } from "react";
// import ApiClient from "../components/service/ApiClient";
// import useAuth from "../components/hooks/useAuth";

// const Order = () => {
//  const [orderItem, setOrderItem] = useState([]);
//   const { authTokens } = useAuth();

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const res = await ApiClient.get("/order-view/", {
//           headers: {
//             Authorization: `JWT ${authTokens?.access}`
//           }
//         });
//         console.log("✅ Order data:", res.data);
//         setOrderItem(res.data); // All orders
//         // setOrderItem(res.data[0]); // If you only want the latest order
//       } catch (err) {
//         console.error("❌ Failed to fetch orders:", err.response?.data || err.message);
//       }
//     };

//     fetchOrder(); // Call the function
//   }, [authTokens]);
  
//   return (
//     <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-xl overflow-hidden border">
//       {orderItem.map((orderitem)=>{
//         <div key={orderitem.order_id || orderitem.id}>
//                   {/* Header */}
//       <div className="p-5 border-b bg-gray-50 flex flex-col md:flex-row justify-between gap-3">
//         <div>
//           <h2 className="text-xl font-semibold text-white">Order {orderItem.order_id}</h2>
//           <p className="text-sm text-gray-500">Placed on: 2025-06-26</p>
//         </div>
//         <span className="self-start md:self-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
//           Not Paid
//         </span>
//       </div>

//       {/* Order Items */}
//       <div className="p-5">
//         <h3 className="font-medium text-lg mb-4">Items</h3>
//         <div className="space-y-4">
//           {[1, 2].map((_, i) => (
//             <div key={i} className="flex justify-between items-center border-b pb-3">
//               <div>
//                 <p className="font-semibold text-gray-800">Course Title #{i + 1}</p>
//                 <p className="text-sm text-gray-500">Quantity: 1</p>
//               </div>
//               <p className="font-semibold text-gray-800">$99.00</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="p-5 border-t bg-gray-50">
//         <div className="w-full max-w-xs ml-auto space-y-2">
//           <div className="flex justify-between text-sm">
//             <span>Subtotal</span>
//             <span>$198.00</span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span>Shipping</span>
//             <span>$0.00</span>
//           </div>
//           <div className="flex justify-between font-semibold text-base border-t pt-2">
//             <span>Total</span>
//             <span>$198.00</span>
//           </div>
//         </div>
//       </div>

//       {/* Footer Actions */}
//       <div className="p-5 flex justify-end gap-3 border-t bg-white">
//         <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
//           Cancel
//         </button>
//         <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//           Pay Now
//         </button>
//       </div>
//         </div>
//       })}
//     </div>
//   );
// };

// export default Order;

// src/pages/Order.jsx
import { useEffect, useState } from "react";
import ApiClient from "../components/service/ApiClient";
import useAuth from "../components/hooks/useAuth";

const Order = () => {
  const { authTokens } = useAuth();
  const [orders, setOrders] = useState([]);      // ✅ নামটা পরিষ্কার করে orders করলাম

  /* ------------------------- ফেচ অর্ডার -------------------------- */
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await ApiClient.get("/order-view/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        console.log("✅ Order data:", res.data);
        setOrders(res.data);                      // পুরো লিস্ট রাখছি
      } catch (err) {
        console.error(
          "❌ Failed to fetch orders:",
          err.response?.data || err.message
        );
      }
    };

    if (authTokens?.access) fetchOrders();
  }, [authTokens]);

  const handleCancel = async (orderId) => {
  try {
    const res = await ApiClient.patch(`/order/${orderId}/cancel/`, null, {
      headers: {
        Authorization: `JWT ${authTokens?.access}`,
      }, 
    });
    console.log("✅ Order cancelled:", res.data);

    // Optimistically update frontend state
    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o.id === orderId ? { ...o, status: "canceled" } : o
      )
    );
  } catch (err) {
    console.error("❌ Cancel failed:", err.response?.data || err.message);
    alert("Failed to cancel order. Only pending orders can be cancelled.");
  }
};


// const handlePayment = async (order) => {
//   try {
//     console.log("🧾 Initiating payment with payload:", {
//       order_id: order.id,
//       total_amount: order.total_price,
//     });

//     const response = await ApiClient.post(
//       "/payment/initiate/",
//       {
//         order_id: order.id,
//         total_amount: order.total_price,
//       },
//       {
//         headers: {
//           Authorization: `JWT ${authTokens?.access}`,
//         },
//       }
//     );

//     console.log("✅ Payment response:", response.data);

//     if (response.data.gateway_url) {
//       window.location.href = response.data.gateway_url;
//     } else {
//       alert("Payment initiation failed. Please try again.");
//     }
//   } catch (error) {
//     console.error("❌ Payment initiation error:", error.response?.data || error.message);
//   }
// };
const handlePayment = async (order) => {
  try {
    const payload = {
      order_id: order.id,                           // UUID, assumed OK if backend accepts
      amount: parseFloat(order.total_price),  // Ensure this is a float
      // numItems: order.items.map((item) => ({
      //   quantity: item.quantity,

      // })),
    };

    console.log("🧾 Initiating payment with payload:", payload);

    const response = await ApiClient.post("/payment/initiate/", payload, {
      headers: {
        Authorization: `JWT ${authTokens?.access}`,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Payment response:", response.data);

    if (response.data.payment_url) {
      window.location.href = response.data.payment_url;
    } else {
      alert("Payment initiation failed. Please try again.");
    }
  } catch (error) {
    console.error("❌ Payment initiation error:", error.response?.data || error.message);
  }
};


  /* ---------------------- হেল্পার ফাংকশন ----------------------- */
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); 

  const statusBadge = (status) => {
    const common =
      "self-start md:self-center px-3 py-1 rounded-full text-sm font-semibold";
    switch (status) {
      case "pending":
        return `${common} bg-yellow-100 text-yellow-800`;
      case "canceled":
        return `${common} bg-gray-200 text-gray-600`;
      default:
        return `${common} bg-green-100 text-green-700`;
    }
  };

  /* ------------------------- রেন্ডার পার্ট ----------------------- */
  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-8">
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border"
          >
            {/* ---------- Header ---------- */}
            <div className="p-5 border-b bg-gray-50 flex flex-col md:flex-row justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Order #{order.id.slice(0, 8)}
                </h2>
                <p className="text-sm text-gray-500">
                  Placed on: {formatDate(order.created_at)}
                </p>
              </div>
              <span className={statusBadge(order.status)}>{order.status}</span>
            </div>

            {/* ---------- Items ---------- */}
            <div className="p-5">
              <h3 className="font-medium text-lg mb-4">Items</h3>
              <div className="space-y-4">
                {order.items.map((it) => (
                  <div
                    key={it.id}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {it.course_details.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {it.quantity}
                      </p>
                    </div>
                    {/* <p className="font-semibold text-gray-800">
                      ৳ {it.total_price.toFixed(2)}
                    </p> */}
                    <p className="font-semibold text-gray-800">
  {/* ৳ {it.total_price ? Number(it.total_price).toFixed(2) : '0.00'}
   */}
   <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
</p>

                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Summary ---------- */}
            <div className="p-5 border-t bg-gray-50">
              <div className="w-full max-w-xs ml-auto space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
              <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>৳ 0.00</span>
                </div>
                <div className="flex justify-between font-semibold text-base border-t pt-2">
                  <span>Total</span>
                  {/* <span>৳ {order.total_price.toFixed(2)}</span> */}
               <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* ---------- Footer Actions ---------- */}
            <div className="p-5 flex justify-end gap-3 border-t bg-white">
              {order.status === "Pending" && (
                <>
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
                  >
                    Cancel
                  </button>
                <button
  onClick={() => handlePayment(order)}
  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
>
  Pay Now
</button>
                </>
              )} 
              {/* {order.status === "pending" && ( */}
                {/* <>
                  <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Pay Now 
                  </button>
                </> */}
              {/* )} */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
