// import React, { useEffect, useState } from "react";
// import { CiCirclePlus } from "react-icons/ci";
// import { GiHamburgerMenu } from "react-icons/gi";
// import useAuth from "../hooks/useAuth";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const {user} = useAuth()
 

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

  

//   return (
//     <>
//       {/* Toggle button for mobile */}
//       <div className="md:hidden p-4 bg-gray-100">
//         <button onClick={toggleSidebar} className="text-2xl">
//           <GiHamburgerMenu />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-5 transition-transform duration-300 ease-in-out z-50 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:static md:block`}
//       >
//         <h2 className="text-lg font-semibold mb-4 text-black">Welcome</h2>

//         <div className="mb-6">
//           <button className="flex items-center text-sm font-medium text-gray-600 hover:text-black transition">
//             <CiCirclePlus className="mr-2 text-lg" />
//             Dashboard
//           </button>
//         </div>

        
//         <ul className="mb-6 space-y-1">
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//            Courses
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//               Add Courses
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//              Subjects
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//              Add Subjects
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//              Orders
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//              Carts
//             </button>
//           </li>
//           <li>
//             <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-100 rounded p-2">
//              Reviews
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Overlay to close sidebar when clicked outside (only for mobile) */}
//       {isOpen && (
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
//         ></div>
//       )}
//     </>
//   );
// }


import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../hooks/useAuth";
import { Link } from 'react-router-dom'; 

export default function Sidebar2() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  // console.log("user:",user.groups[0])
  const toggleSidebar = () => setIsOpen(!isOpen);
//   useEffect(() => {
//   console.log("User info:", user);
// }, [user]);

  const isAdmin = user?.groups?.includes("admin");
  const isTeacher = user?.groups?.includes("teacher");
  const isStudent = user?.groups?.includes("student");
 
  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 bg-gray-100">
        <button onClick={toggleSidebar} className="text-2xl">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-5 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-lg font-semibold mb-6 text-black">
          👋 Welcome, {user?.username || "Guest"}
        </h2>

        <div className="mb-6">
          <Link to="http://localhost:5173">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-black transition">
            <CiCirclePlus className="mr-2 text-lg" />
            Dashboard
          </button>
          </Link>
          
        </div>

        <ul className="space-y-1">
          {/* Shared menu */}
          <li>
            <Link to="http://localhost:5173/courses">
            <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
              Courses
            </button>
            </Link>
            
          </li>
          <li>
            <Link to="http://localhost:5173/dashboard/order">
             <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
              Orders
            </button>
            </Link>
           
          </li>

          {/* Admin specific */}
          {isAdmin && (
            <>
              <li>
                <Link to="http://localhost:5173/courses">
                     
                <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                  courses
                </button>
                </Link>
           
              </li>
              <li>
                <Link to="http://localhost:5173/dashboard/teacher-dashboard">
                <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                  Add Courses
                </button>
                </Link>
                
              </li>
              <li>
                <Link to="http://localhost:5173/dashboard/cart"></Link>
                <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                  Users
                </button>
              </li>
            </>
          )}

          {/* Teacher-specific */}
          {isTeacher && (
            <>
              <li>
                <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                  Add Courses
                </button>
              </li>
            </>
          )}

          {/* Student-specific */}
          {isStudent && (
            <>
              <li>
                <Link to="http://localhost:5173/dashboard/cart">
                 <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                 
                  My Cart
                </button>
                </Link>
                
               
              </li>
              <li>
                <button className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 text-gray-700">
                  My Reviews
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        />
      )}
    </>
  );
}
