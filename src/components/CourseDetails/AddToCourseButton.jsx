// import React, { useState } from 'react';
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa6";
// import { FiMinus } from 'react-icons/fi';
// import { FaCartArrowDown } from "react-icons/fa";
// const AddToCourseButton = ({course}) => {
//     const [isAdding,setIsAdding] = useState(false)
//     const [isAdded,setIsAdded] = useState(false)

//     const addToCart = async()=>{
//         try{
//             setIsAdded(true);
//             setIsAdding(false);
//         }
//         catch(error){
//             console.log(error);
//             setIsAdding(false);
//         }
//     }
//     // const [count,setCount] = useState(1)
//     // const handleClick = (()=>{
//     //     setCount(count+1)
//     // })
//     // const handleMinusClick=(()=>{
//     //    if (count>1) setCount(count-1)
//     // })
//     return (
//        <div>
//          {/* <div className='flex'>
//             <button className='border-1 p-5' onClick={handleClick}><FaPlus/></button>
//             <input className='border-1 text-center'  value={count} readOnly/>
//             <button className='border-1 p-5'  onClick={handleMinusClick}><FiMinus/></button>
//         </div> */}
//         <button 
//         className='bg-cyan-500 p-3 mt-3 flex w-3/6 items-center justify-center'
//         onClick={addToCart} disabled={isAdding || isAdded || course.available_seat===0}
//         >
//             {isAdding?(
//                 <span className='flex items-center'>
//                     <span className='loading loading-spinner loading-sm mr-2'>Adding...</span>
//                     Add to cart
//                 </span>
//             ):
//             isAdded?(
//                 <span className='flex items-center'>
//                       <FaCheck className="mr-2 h-4 w-4"></FaCheck>
//                       Added to cart
//                 </span>
//             ):
//             (
//                 <span className='flex items-center'>
//                     <FaCartArrowDown className='mr-3'/><FaCartArrowDown/>
//                      Add To Cart
//                 </span>
//             )
//             }
//             </button>
//         </div>
//     );
// };

// export default AddToCourseButton;


import React, { useState } from 'react';
import { FaCartArrowDown, FaCheck } from "react-icons/fa";
import { useEnrollment } from '../context/EnrollmentContext';
import WhatYouWillLearn from './WhatYouWillLearn';

const AddToCourseButton = ({ course,courseId }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { createEnrollment } = useEnrollment(); 

//     const handleEnroll = () => {
//       console.log("🔘 Enroll button clicked. Course ID:", courseId);
//       createEnrollment(courseId);
//   };
    const addToCart = async () => {
        try {
            setIsAdding(true);
            console.log("🔘 Enroll button clicked. Course ID:", courseId);
            createEnrollment(courseId);
            await new Promise((res) => setTimeout(res, 1000)); 
            setIsAdded(true);
        } catch (error) {
            console.error("Add to cart failed:", error);
        } finally {
            setIsAdding(false);
        }
    };

    const isOutOfSeat = course.available_seat === 0;

    return (
        <>
        <div className="space-y-2 mt-4">
            <button
                className={`p-3 w-3/6 flex items-center justify-center rounded-lg transition ${
                    isOutOfSeat || isAdding || isAdded
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                }`}
                onClick={addToCart}
                disabled={isOutOfSeat || isAdding || isAdded}
            >
                {isAdding ? (
                    <span className='flex items-center'>
                        <span className='loading loading-spinner loading-sm mr-2'></span>
                        Adding...
                    </span>
                ) : isAdded ? (
                    <span className='flex items-center'>
                        <FaCheck className="mr-2" /> Added to cart
                    </span>
                ) : (
                    <span className='flex items-center'>
                        <FaCartArrowDown className='mr-2' />
                        Add To Cart
                    </span>
                )}
            </button>

            {isOutOfSeat && (
                <p className="text-red-600 font-medium">No seat available for this course.</p>
            )}

            
        </div>
        {/* <div>
            <WhatYouWillLearn/>
        </div> */}
        
        </>
    );
};

export default AddToCourseButton;
