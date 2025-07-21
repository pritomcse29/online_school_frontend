

import React, { useState, useEffect } from 'react';
import { FaCartArrowDown, FaCheck } from "react-icons/fa";
import { useCart } from '../context/OrderContext'; // ✅ import context

const CheckoutButton = ({ cartId }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { createOrder } = useCart(); // ✅ get createOrder from context

  useEffect(() => {
    if (cartId) {
      setIsAdded(false); // reset for new cartId
    }
  }, [cartId]);

  const handleCheckout = async () => {
    try {
      setIsAdding(true);
      console.log("🛒 Creating order from cartId:", cartId);
      await createOrder(cartId); // ✅ create order with cartId
      setIsAdded(true);
    } catch (error) {
      console.error("❌ Order creation failed:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-2 mt-4">
      <button
        className={`p-3 w-3/6 flex items-center justify-center rounded-lg transition ${
          isAdding || isAdded
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-cyan-500 hover:bg-cyan-600 text-white'
        }`}
        onClick={handleCheckout}
        disabled={isAdding || isAdded}
      >
        {isAdding ? (
          <span className='flex items-center'>
            <span className='loading loading-spinner loading-sm mr-2'></span>
            Processing...
          </span>
        ) : isAdded ? (
          <span className='flex items-center'>
            <FaCheck className="mr-2" /> Order Created
          </span>
        ) : (
          <span className='flex items-center'>
            <FaCartArrowDown className='mr-2' />
            Proceed to Checkout
          </span>
        )}
      </button>
    </div>
  );
};

export default CheckoutButton;
