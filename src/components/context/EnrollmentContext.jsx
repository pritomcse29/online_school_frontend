// import { createContext, useContext, useState } from "react";
// import ApiClient from "../service/ApiClient";

// const EnrollmentContext = createContext();
// export const EnrollmentProvider = ({children}) =>{
//     const [enrollmentId,setEnrollmentId] = useState(null);
//     // const token = localStorage.getItem('authToken');
//     const [authToken] = useState(() =>
//         JSON.parse(localStorage.getItem("authTokens"))?.access
//     );
//     const createEnrollment = async (courseId,quantity=1)=>{
//         try{
//             const payload = {
//                 courses : [{course:courseId,quantity}]
//             };
//             const res = await ApiClient.post('/enrollment/',payload,{
//                 headers:{Authorization: `Token ${authToken}`}
//             });
//             console.log("Enrollment created:",res.data);
//             setEnrollmentId(res.data['id']);
//         }catch(err){
//             console.log("Enrollment creation failed:",err.response?.data || err.message);
//         }

//     }
//      return (
//     <EnrollmentContext.Provider value={{ createEnrollment, enrollmentId }}>
//       {children}
//     </EnrollmentContext.Provider>
//   );
// };

// export const useEnrollment = () => useContext(EnrollmentContext);



// EnrollmentContext.jsx
import { createContext, useContext, useState } from "react";
import ApiClient from "../service/ApiClient";

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrollmentId, setEnrollmentId] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState([]);
  const clearEnrollment =() => setEnrollmentId(null)

  const [authTokens] = useState(() =>
    JSON.parse(localStorage.getItem("authTokens"))?.access
  );

const createEnrollment = async (courseId, quantity = 1) => {
    try {
        const payload = {
            courses: [{ course: courseId, quantity }]
            
        };

        const res = await ApiClient.post("/enrollment/", payload, {
            headers: {
                Authorization: `JWT ${authTokens}`
            }
        });

        console.log("✅ Enrollment created:", res.data);
        setEnrollmentId(res.data['id']); // match key name
    } catch (err) {
        console.error("❌ Enrollment creation failed:", err.response?.data || err.message);
    }
};


//   const createEnrollment = async (courseId, quantity = 1) => {
//     console.log("📡 Trying to enroll course ID:", courseId);
//     try {
//       const payload = {
//         courses: [{ course: courseId, quantity }],
//       };
//       const res = await ApiClient.post("/enrollment/", payload, {
//         headers: { Authorization: `JWT ${authTokens?.access}` },
//       });
//       console.log("Enrollment created:", res.data);
//       setEnrollmentId(res.data.id);
//     } catch (err) {
//       console.log("Enrollment creation failed:", err.response?.data || err.message);
//     }
//   };

  const fetchEnrollmentCart = async () => {
    try {
      const res = await ApiClient.get("/cart/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setEnrollmentData(res.data);
    } catch (err) {
      console.error("Failed to fetch enrollment cart:", err.response?.data || err.message);
    }
  };

  return (
    <EnrollmentContext.Provider
      value={{
        createEnrollment,
        fetchEnrollmentCart,
        enrollmentId,
        enrollmentData,
        clearEnrollment
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = () => useContext(EnrollmentContext);
