// // import React, { useEffect, useState } from "react";
// // import ApiClient from "../components/service/ApiClient";
// // import useAuth from "../components/hooks/useAuth";

// // const Order = () => {
// //  const [orderItem, setOrderItem] = useState([]);
// //   const { authTokens } = useAuth();

// //   useEffect(() => {
// //     const fetchOrder = async () => {
// //       try {
// //         const res = await ApiClient.get("/order-view/", {
// //           headers: {
// //             Authorization: `JWT ${authTokens?.access}`
// //           }
// //         });
// //         console.log("✅ Order data:", res.data);
// //         setOrderItem(res.data); // All orders
// //         // setOrderItem(res.data[0]); // If you only want the latest order
// //       } catch (err) {
// //         console.error("❌ Failed to fetch orders:", err.response?.data || err.message);
// //       }
// //     };

// //     fetchOrder(); // Call the function
// //   }, [authTokens]);
  
// //   return (
// //     <div className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-xl overflow-hidden border">
// //       {orderItem.map((orderitem)=>{
// //         <div key={orderitem.order_id || orderitem.id}>
// //                   {/* Header */}
// //       <div className="p-5 border-b bg-gray-50 flex flex-col md:flex-row justify-between gap-3">
// //         <div>
// //           <h2 className="text-xl font-semibold text-white">Order {orderItem.order_id}</h2>
// //           <p className="text-sm text-gray-500">Placed on: 2025-06-26</p>
// //         </div>
// //         <span className="self-start md:self-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
// //           Not Paid
// //         </span>
// //       </div>

// //       {/* Order Items */}
// //       <div className="p-5">
// //         <h3 className="font-medium text-lg mb-4">Items</h3>
// //         <div className="space-y-4">
// //           {[1, 2].map((_, i) => (
// //             <div key={i} className="flex justify-between items-center border-b pb-3">
// //               <div>
// //                 <p className="font-semibold text-gray-800">Course Title #{i + 1}</p>
// //                 <p className="text-sm text-gray-500">Quantity: 1</p>
// //               </div>
// //               <p className="font-semibold text-gray-800">$99.00</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Summary */}
// //       <div className="p-5 border-t bg-gray-50">
// //         <div className="w-full max-w-xs ml-auto space-y-2">
// //           <div className="flex justify-between text-sm">
// //             <span>Subtotal</span>
// //             <span>$198.00</span>
// //           </div>
// //           <div className="flex justify-between text-sm">
// //             <span>Shipping</span>
// //             <span>$0.00</span>
// //           </div>
// //           <div className="flex justify-between font-semibold text-base border-t pt-2">
// //             <span>Total</span>
// //             <span>$198.00</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer Actions */}
// //       <div className="p-5 flex justify-end gap-3 border-t bg-white">
// //         <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
// //           Cancel
// //         </button>
// //         <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
// //           Pay Now
// //         </button>
// //       </div>
// //         </div>
// //       })}
// //     </div>
// //   );
// // };

// // export default Order;

// // src/pages/Order.jsx
// import { useEffect, useState } from "react";
// import ApiClient from "../components/service/ApiClient";
// import useAuth from "../components/hooks/useAuth";

// const Order = () => {
//   const { authTokens } = useAuth();
//   const [orders, setOrders] = useState([]);      // ✅ নামটা পরিষ্কার করে orders করলাম

//   /* ------------------------- ফেচ অর্ডার -------------------------- */
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await ApiClient.get("/order-view/", {
//           headers: { Authorization: `JWT ${authTokens?.access}` },
//         });
//         console.log("✅ Order data:", res.data);
//         setOrders(res.data);                      // পুরো লিস্ট রাখছি
//       } catch (err) {
//         console.error(
//           "❌ Failed to fetch orders:",
//           err.response?.data || err.message
//         );
//       }
//     };

//     if (authTokens?.access) fetchOrders();
//   }, [authTokens]);

//   const handleCancel = async (orderId) => {
//   try {
//     const res = await ApiClient.patch(`/order/${orderId}/cancel/`, null, {
//       headers: {
//         Authorization: `JWT ${authTokens?.access}`,
//       }, 
//     });
//     console.log("✅ Order cancelled:", res.data);

//     // Optimistically update frontend state
//     setOrders((prevOrders) =>
//       prevOrders.map((o) =>
//         o.id === orderId ? { ...o, status: "canceled" } : o
//       )
//     );
//   } catch (err) {
//     console.error("❌ Cancel failed:", err.response?.data || err.message);
//     alert("Failed to cancel order. Only pending orders can be cancelled.");
//   }
// };


// // const handlePayment = async (order) => {
// //   try {
// //     console.log("🧾 Initiating payment with payload:", {
// //       order_id: order.id,
// //       total_amount: order.total_price,
// //     });

// //     const response = await ApiClient.post(
// //       "/payment/initiate/",
// //       {
// //         order_id: order.id,
// //         total_amount: order.total_price,
// //       },
// //       {
// //         headers: {
// //           Authorization: `JWT ${authTokens?.access}`,
// //         },
// //       }
// //     );

// //     console.log("✅ Payment response:", response.data);

// //     if (response.data.gateway_url) {
// //       window.location.href = response.data.gateway_url;
// //     } else {
// //       alert("Payment initiation failed. Please try again.");
// //     }
// //   } catch (error) {
// //     console.error("❌ Payment initiation error:", error.response?.data || error.message);
// //   }
// // };
// const handlePayment = async (order) => {
//   try {
//     const payload = {
//       order_id: order.id,                           // UUID, assumed OK if backend accepts
//       amount: parseFloat(order.total_price),  // Ensure this is a float
//       // numItems: order.items.map((item) => ({
//       //   quantity: item.quantity,

//       // })),
//     };

//     console.log("🧾 Initiating payment with payload:", payload);

//     const response = await ApiClient.post("/payment/initiate/", payload, {
//       headers: {
//         Authorization: `JWT ${authTokens?.access}`,
//         "Content-Type": "application/json",
//       },
//     });

//     console.log("✅ Payment response:", response.data);

//     if (response.data.payment_url) {
//       window.location.href = response.data.payment_url;
//     } else {
//       alert("Payment initiation failed. Please try again.");
//     }
//   } catch (error) {
//     console.error("❌ Payment initiation error:", error.response?.data || error.message);
//   }
// };


//   /* ---------------------- হেল্পার ফাংকশন ----------------------- */
//   const formatDate = (dateStr) =>
//     new Date(dateStr).toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     }); 

//   const statusBadge = (status) => {
//     const common =
//       "self-start md:self-center px-3 py-1 rounded-full text-sm font-semibold";
//     switch (status) {
//       case "pending":
//         return `${common} bg-yellow-100 text-yellow-800`;
//       case "canceled":
//         return `${common} bg-gray-200 text-gray-600`;
//       default:
//         return `${common} bg-green-100 text-green-700`;
//     }
//   };

//   /* ------------------------- রেন্ডার পার্ট ----------------------- */
//   return (
//     <div className="max-w-3xl mx-auto mt-8 space-y-8">
//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500">No orders found.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden border"
//           >
//             {/* ---------- Header ---------- */}
//             <div className="p-5 border-b bg-gray-50 flex flex-col md:flex-row justify-between gap-3">
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   Order #{order.id.slice(0, 8)}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Placed on: {formatDate(order.created_at)}
//                 </p>
//               </div>
//               <span className={statusBadge(order.status)}>{order.status}</span>
//             </div>

//             {/* ---------- Items ---------- */}
//             <div className="p-5">
//               <h3 className="font-medium text-lg mb-4">Items</h3>
//               <div className="space-y-4">
//                 {order.items.map((it) => (
//                   <div
//                     key={it.id}
//                     className="flex justify-between items-center border-b pb-3"
//                   >
//                     <div>
//                       <p className="font-semibold text-gray-800">
//                         {it.course_details.name}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         Quantity: {it.quantity}
//                       </p>
//                     </div>
//                     {/* <p className="font-semibold text-gray-800">
//                       ৳ {it.total_price.toFixed(2)}
//                     </p> */}
//                     <p className="font-semibold text-gray-800">
//   {/* ৳ {it.total_price ? Number(it.total_price).toFixed(2) : '0.00'}
//    */}
//    <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
// </p>

//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ---------- Summary ---------- */}
//             <div className="p-5 border-t bg-gray-50">
//               <div className="w-full max-w-xs ml-auto space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Subtotal</span>
//               <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span>Shipping</span>
//                   <span>৳ 0.00</span>
//                 </div>
//                 <div className="flex justify-between font-semibold text-base border-t pt-2">
//                   <span>Total</span>
//                   {/* <span>৳ {order.total_price.toFixed(2)}</span> */}
//                <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* ---------- Footer Actions ---------- */}
//             <div className="p-5 flex justify-end gap-3 border-t bg-white">
//               {order.status === "Pending" && (
//                 <>
//                   <button
//                     onClick={() => handleCancel(order.id)}
//                     className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
//                   >
//                     Cancel
//                   </button>
//                 <button
//   onClick={() => handlePayment(order)}
//   className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
// >
//   Pay Now
// </button>
//                 </>
//               )} 
//               {/* {order.status === "pending" && ( */}
//                 {/* <>
//                   <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg">
//                     Cancel
//                   </button>
//                   <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
//                     Pay Now 
//                   </button>
//                 </> */}
//               {/* )} */}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Order;


import { useEffect, useState } from "react";
import ApiClient from "../components/service/ApiClient";
import useAuth from "../components/hooks/useAuth";

const Order = () => {
  const { authTokens } = useAuth();
  const [orders, setOrders] = useState([]);

  /* ------------------------- Fetch Orders -------------------------- */
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await ApiClient.get("/order-view/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        console.log("✅ Order data:", res.data);
        setOrders(res.data);
      } catch (err) {
        console.error(
          "❌ Failed to fetch orders:",
          err.response?.data || err.message
        );
        setOrders([]); // Set to empty array on error
      }
    };

    if (authTokens?.access) fetchOrders();
  }, [authTokens]);

  const handleCancel = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) {
      return; // Stop if user cancels
    }
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
      alert("Failed to cancel order. Only pending orders can be cancelled or an error occurred.");
    }
  };

  const handlePayment = async (order) => {
    try {
      const payload = {
        order_id: order.id,
        amount: parseFloat(order.total_price || 0), // Ensure amount is a float
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
      alert("Payment initiation failed due to an error. Please try again.");
    }
  };

  /* ---------------------- Helper Functions ----------------------- */
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const statusBadge = (status) => {
    const common =
      "self-start md:self-center px-3 py-1 rounded-full text-sm font-semibold uppercase";
    switch (status?.toLowerCase()) { // Ensure status is compared in lowercase
      case "pending":
        return `${common} bg-yellow-100 text-yellow-800`;
      case "canceled":
        return `${common} bg-gray-200 text-gray-600`;
      case "completed": // Assuming a 'completed' status exists for paid orders
      case "paid":
        return `${common} bg-emerald-100 text-emerald-700`; // Green for paid/completed
      default:
        return `${common} bg-blue-100 text-blue-800`; // Default status
    }
  };

  /* ------------------------- Render Part ----------------------- */
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto"> {/* Increased max-width for better display */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center leading-tight">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
            <p className="text-xl text-gray-600 font-medium">
              You haven't placed any orders yet.
            </p>
            <p className="text-md text-gray-500 mt-2">
              Start exploring courses to make your first purchase!
            </p>
          </div>
        ) : (
          <div className="space-y-8"> {/* Increased space between order cards */}
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-[1.005] duration-200"
              >
                {/* ---------- Header ---------- */}
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Order ID: <span className="text-emerald-600">{order.id.slice(0, 8)}</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Placed on: <span className="font-medium">{formatDate(order.created_at)}</span>
                    </p>
                  </div>
                  <span className={statusBadge(order.status)}>{order.status}</span>
                </div>

                {/* ---------- Items ---------- */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-4 border-b pb-2 border-gray-100">Ordered Items</h3>
                  <div className="space-y-5"> {/* Increased space between items */}
                    {order.items && order.items.length > 0 ? (
                      order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0 last:pb-0"
                        >
                          <div>
                            <p className="font-semibold text-gray-800 text-lg">
                              {item.course_details?.name || 'Unknown Course'}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              Quantity: {item.quantity || 1}
                            </p>
                          </div>
                          <p className="font-bold text-gray-800 text-lg">
                            ৳ {Number(item.total_price || 0).toFixed(2)}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">No items found for this order.</p>
                    )}
                  </div>
                </div>

                {/* ---------- Summary ---------- */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="w-full max-w-xs ml-auto space-y-3 text-right">
                    <div className="flex justify-between text-base text-gray-700">
                      <span className="font-medium">Subtotal:</span>
                      <span>৳ {Number(order.total_price || 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base text-gray-700">
                      <span className="font-medium">Shipping:</span>
                      <span>৳ 0.00</span> {/* Assuming free shipping for courses */}
                    </div>
                    <div className="flex justify-between font-bold text-xl border-t border-gray-200 pt-3 mt-3">
                      <span className="text-gray-900">Total:</span>
                      <span className="text-emerald-600">৳ {Number(order.total_price || 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* ---------- Footer Actions ---------- */}
                <div className="p-6 flex justify-end gap-4 border-t border-gray-100 bg-white">
                  {order.status?.toLowerCase() === "pending" && (
                    <>
                      <button
                        onClick={() => handleCancel(order.id)}
                        className="px-6 py-3 text-base bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                      >
                        Cancel Order
                      </button>
                      <button
                        onClick={() => handlePayment(order)}
                        className="px-6 py-3 text-base bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      >
                        Pay Now
                      </button>
                    </>
                  )}
                  {order.status?.toLowerCase() === "completed" && (
                     <span className="px-6 py-3 text-base bg-emerald-50 text-emerald-700 font-semibold rounded-lg">
                        Paid
                    </span>
                  )}
                   {order.status?.toLowerCase() === "canceled" && (
                     <span className="px-6 py-3 text-base bg-gray-100 text-gray-500 font-semibold rounded-lg">
                        Cancelled
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;