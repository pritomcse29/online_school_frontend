// import React, { useEffect, useState } from 'react';
// import ApiClient from '../components/service/ApiClient';
// import useAuth from '../components/hooks/useAuth';
// import { MdDelete } from "react-icons/md";
// import defaultImage from "../../src/assets/img/noContent.png"
// // import { useCart } from '../components/context/OrderContext';
// import AddToCourseButton from '../components/CourseDetails/AddToCourseButton';
// import CheckoutButton from '../components/order/CheckoutButton';
// // import { EnrollmentProvider } from '../components/context/EnrollmentContext';
// import { useEnrollment } from '../components/context/EnrollmentContext';
// const Cart = () => {
//   const [cart, setCart] = useState(null);
//   const { authTokens } = useAuth();
//   const [cartId,setCartId] = useState(null)
//   // const { cartId } = useCart();
//   const { enrollmentId } = useEnrollment()

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await ApiClient.get("/cart/", {
//           headers: {
//             Authorization: `JWT ${authTokens?.access}`,
//           },
//         });
//         console.log("✅ Cart data:", res.data);
//         setCart(res.data[0]);
//       } catch (err) {
//         console.error("❌ Failed to fetch cart:", err.response?.data || err.message);
//       }
//     };

//     fetchCart();
//   }, [authTokens]);

//  useEffect(() => {
//   if (enrollmentId) {
//    console.log("🛒 Proceeding to checkout with cartId:", enrollmentId);
//   }
// }, [enrollmentId]);


//  const handleCheckout = () => {
//     if (enrollmentId) {
//       console.log("🛒 Proceeding to checkout with cartId:", enrollmentId);
//       setCartId(enrollmentId);
//     }
//   };
 
//   const handleCheckout = () => {
//   if (enrollmentId) {
//     setCartId(enrollmentId); 
//     console.log("🛒 Proceeding with enrollmentId:", enrollmentId);
//   } else {
//     alert("No Enrollment ID found");
//   }
// };


// const deleteHandleButton = async(itemId) =>{
//    console.log("⛳ ID sending to backend:", itemId); // ✅ Debug here

//          try{
//           const res = await ApiClient.delete(`/enrollment/item/${itemId}/delete/`,{
//             headers:{
//               Authorization: `JWT ${authTokens?.access}`,
//             }
//           })
//            console.log("✅ Deleted:", res.data);
//          } catch(err){
// console.error("Delete failed:", err.response?.data || err.message);
//          }
// }
//   return (
//     <div >
//         {/* <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Enrollment ID: {cart.id}</p> */}
//       <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//         <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//           <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

//             <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//               <div className="mx-auto w-full md:w-4/6 flex-none lg:max-w-2xl xl:max-w-4xl">
//                 <div className="space-y-6">
//                   {cart?.enrollments?.length > 0 ? (
//                     cart.enrollments.map((item) => (

// <div
//   key={item.id}
//   className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
// >
//   <div className="flex items-center justify-between gap-6">
    
    
//     <div className="w-20 h-20 flex-shrink-0">
//       {item.courseImage && item.courseImage.length > 0 ? (
//         <img
//           src={item.courseImage[0]?.image}
//           alt="Course"
//           className="w-full h-full object-cover rounded"
//         />
//       ) : (
//         <div className="text-sm text-gray-500 dark:text-gray-400 align-middle">
//         <img src={defaultImage}></img>
//         </div>
//       )}
//     </div>


//     <div className="flex items-center space-x-4">
//       <p className="text-base font-medium text-gray-900 dark:text-white">
//         {item.course_details?.name || 'Course Name'}
//       </p>
//       <p className="text-sm text-gray-500 dark:text-gray-400">
//         Quantity: {item.quantity}
//       </p>
//       <p className="text-sm text-gray-500 dark:text-gray-400">
//         ৳ {item.total_price || '0.00'}
//       </p>
//     </div>


//     <div className="flex items-center">
//       <button 
//         onClick={() => deleteHandleButton(item.id)} // Replace with actual handler
//         // onClick={() => console.log('Delete item:', item.id)} // Replace with actual handler
//         className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
//       >
//         <MdDelete className="text-xl mr-1" />
//         Delete
//       </button>
//     </div>
//   </div>
// </div>

//                     ))
//                   ) : (
//                     <p className="text-gray-700 dark:text-gray-300">No items in cart.</p>
//                   )}
//                 </div>
//               </div>

//               {/* Order Summary Placeholder */}
//               <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//                 <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                   <p className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</p>

//                   <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//                     <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
//                     <dd className="text-base font-bold text-gray-900 dark:text-white">
//                       ৳ {cart?.enrollments?.reduce((acc, item) => acc + (item?.total_price || 0) * item.quantity, 0).toFixed(2)}
//                     </dd>
//                 <p>{cartId}</p>
//                   </dl>

//                   {/* <button onClick={handleCheckout} 
//                    className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
//                    >Proceed to Checkout</button> */}

//                    {/* <button 
//   onClick={handleCheckout} 
//   className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
// >
//   Proceed to Checkout
// </button> */}

//                    {/* <CheckoutButton cartId={cart.id} className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
//                     Proceed to Checkout
//                    </CheckoutButton> */}
//                    <CheckoutButton
//   cartId={cart?.id}                 // cart==null হলে undefined যাবে
//   disabled={!cart}                  // null হলে বোতাম অকার্যকর
//   className={`w-full rounded-lg px-5 py-2.5 text-sm font-medium text-white
//               ${cart ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
// >
//   {cart ? 'Proceed to Checkout' : 'Loading…'}
// </CheckoutButton>


//                    {/* <CheckoutButton cartId={cartId} /> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from 'react';
import ApiClient from '../components/service/ApiClient';
import useAuth from '../components/hooks/useAuth';
import { MdDelete } from "react-icons/md";
import defaultImage from "../../src/assets/img/noContent.png";
import CheckoutButton from '../components/order/CheckoutButton';
import { useEnrollment } from '../components/context/EnrollmentContext';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const { authTokens } = useAuth();
  const { enrollmentId } = useEnrollment(); // Get enrollmentId from context

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await ApiClient.get("/cart/", {
          headers: {
            Authorization: `JWT ${authTokens?.access}`,
          },
        });
        console.log("✅ Cart data:", res.data);
        // Assuming your API returns an array, and you want the first cart
        setCart(res.data[0] || null); // Set to null if array is empty
      } catch (err) {
        console.error("❌ Failed to fetch cart:", err.response?.data || err.message);
        setCart(null); // Ensure cart is null on error
      }
    };

    if (authTokens) { // Only fetch if authTokens are available
      fetchCart();
    }
  }, [authTokens]);

  useEffect(() => {
    if (enrollmentId) {
      console.log("🛒 Proceeding to checkout with cartId (from context):", enrollmentId);
    }
  }, [enrollmentId]);

  const deleteHandleButton = async (itemId) => {
    console.log("⛳ ID sending to backend for deletion:", itemId);

    try {
      const res = await ApiClient.delete(`/enrollment/item/${itemId}/delete/`, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      console.log("✅ Deleted:", res.data);
      // Optimistically update the UI or refetch the cart
      setCart((prevCart) => {
        if (!prevCart) return null;
        const updatedEnrollments = prevCart.enrollments.filter(
          (item) => item.id !== itemId
        );
        return { ...prevCart, enrollments: updatedEnrollments };
      });
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };

  const totalPrice = cart?.enrollments?.reduce((acc, item) => {
    // Ensure item.total_price is a number before adding
    return acc + (parseFloat(item?.total_price) || 0);
  }, 0).toFixed(2);


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl 2xl:px-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Your Shopping Cart
        </h2>

        {cart === null ? (
          <p className="text-center text-gray-700 text-lg">
            {authTokens ? "Loading cart..." : "Please log in to view your cart."}
          </p>
        ) : (
          <div className="md:flex md:gap-8 lg:gap-12 xl:gap-16">
            {/* Cart Items Section */}
            <div className="mx-auto w-full md:w-4/6 space-y-6">
              {cart.enrollments && cart.enrollments.length > 0 ? (
                cart.enrollments.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md flex items-center gap-4"
                  >
                    {/* Course Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      {item.courseImage && item.courseImage.length > 0 && item.courseImage[0]?.image ? (
                        <img
                          src={item.courseImage[0].image}
                          alt={item.course_details?.name || "Course Image"}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src={defaultImage}
                          alt="No image available"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-grow">
                      <p className="text-lg font-semibold text-gray-900 mb-1">
                        {item.course_details?.name || 'Course Name'}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity} {/* Assuming quantity is always 1 for courses */}
                      </p>
                      <p className="text-base font-bold text-emerald-600 mt-2">
                        ৳ {parseFloat(item.total_price || 0).toFixed(2)}
                      </p>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteHandleButton(item.id)}
                      className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      <MdDelete className="text-xl mr-1" />
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700 text-lg py-10">Your cart is empty.</p>
              )}
            </div>

            {/* Order Summary Section */}
            <div className="mx-auto mt-8 w-full md:w-2/6 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <p className="text-xl font-bold text-gray-900 mb-4">Order Summary</p>

                <div className="space-y-3">
                  {/* Subtotal - You might want to calculate this from course prices */}
                  <dl className="flex items-center justify-between text-gray-700">
                    <dt className="text-base font-medium">Subtotal</dt>
                    <dd className="text-base font-medium">৳ {totalPrice}</dd>
                  </dl>

                  {/* Discount (if applicable) */}
                  <dl className="flex items-center justify-between text-gray-700">
                    <dt className="text-base font-medium">Discount</dt>
                    <dd className="text-base font-medium">৳ 0.00</dd> {/* Placeholder */}
                  </dl>

                  {/* Total */}
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 mt-4">
                    <dt className="text-lg font-bold text-gray-900">Total</dt>
                    <dd className="text-lg font-bold text-emerald-600">৳ {totalPrice}</dd>
                  </dl>
                </div>

                <CheckoutButton
                  cartId={cart?.id}
                  disabled={!cart || (cart.enrollments && cart.enrollments.length === 0)}
             className={`w-full rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors duration-200
              ${cart && cart.enrollments && cart.enrollments.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300'
                : 'bg-gray-400 cursor-not-allowed'
              }`}
                >
                  {cart && cart.enrollments && cart.enrollments.length > 0 ? 'Proceed to Checkout' : 'Cart Empty'}
                </CheckoutButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;