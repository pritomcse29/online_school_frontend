
import { createContext, useContext, useState } from "react";
import ApiClient from "../service/ApiClient";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);
  const [cartData, setCartData] = useState([]);

  const [authTokens] = useState(() =>
    JSON.parse(localStorage.getItem("authTokens"))?.access
  );

  const createOrder = async ( enrollmentId ) => {
    try {
      const payload = {
         enrollment_id: enrollmentId 
      };

      const res = await ApiClient.post("/create-order/", payload, {
        headers: {
          Authorization: `JWT ${authTokens}`
        }
      });

      console.log("✅ Order created:", res.data);
      setCartId(res.data.order_id);
    } catch (err) {
      console.error("❌ Order creation failed:", err.response?.data || err.message);
    }
  };

  // const fetchCart = async () => {
  //   try {
  //     const res = await ApiClient.get("/cart/", {
  //       headers: { Authorization: `JWT ${authTokens}` }
  //     });
  //     setCartData(res.data);
  //   } catch (err) {
  //     console.error("❌ Failed to fetch cart:", err.response?.data || err.message);
  //   }
  // };

  const clearCart = () => setCartId(null);

  return (
    <OrderContext.Provider
      value={{
        createOrder,
        
        cartId,
        cartData, 
        clearCart
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useCart = () => useContext(OrderContext);
