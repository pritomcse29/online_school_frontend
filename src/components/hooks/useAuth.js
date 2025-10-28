import { useEffect, useState } from "react";
import apiClient2 from "../service/apiClient2";

const useAuth = () =>{
   const [user,setUser] = useState(null);
   const [errorMsg,setErrorMsg] = useState('');
  
//    const navigate = useNavigate()
   const getToken =() =>{
        const token = localStorage.getItem('authTokens');
        return token ? JSON.parse(token):null;
    };
    const [authTokens,setAuthTokens] = useState(getToken());

    //Login User
    const loginUser = async (userData) =>{
        setErrorMsg("");
        try{
            console.log(userData);
            const response = await apiClient2.post("/auth/jwt/create/",userData);

            setAuthTokens(response.data);
            localStorage.setItem("authTokens",JSON.stringify(response.data));
            // navigate('/dashboard')
            await fetchUserProfile()

        } catch(error){
            console.error("Login Error",error);

            if (error.response){
                setErrorMsg(error.response.data?.detail || "Unknown error");
            }else{
                setErrorMsg("Login failed: Network error or incorrect credentials.");
            }

        }
    }
    
  useEffect(() => {
        if (authTokens) fetchUserProfile();
    }, [authTokens]);
    //Fetch User Profile
    // const fetchUserProfile = async()=>{
    //   try{
    //     const response = await apiClient2.get("/users/me",{
    //       headers:{Authorization:`JWT ${authTokens?.access}`},
    //     });
    //     setUser(response.data);
    //     console.log(response.data);
    //   }
    //   catch(error){
    //     console.log("Error Fetching user",error);
    //     setErrorMsg("Failed to fetch user profile.");
    //   }
    // }
    const fetchUserProfile = async () => {
  try {
    const response = await apiClient2.get("/users/me", {
      headers: { Authorization: `JWT ${authTokens?.access}` },
    });

    const userData = response.data;
    userData.groups = userData.groups?.map((g) => g.name.toLowerCase()) || [];

    setUser(userData);
    console.log("✅ User loaded:", userData);
  } catch (error) {
    console.log("Error Fetching user", error);
    setErrorMsg("Failed to fetch user profile.");
  }
};

    // Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient2.post("/users/", userData);
      return {
        success: true,
        message: "Registration successful",
      };
      } catch (error) {
  if (error.response && error.response.data) {
    const errorMessage = Object.values(error.response.data).flat().join("\n");
    setErrorMsg(errorMessage);
    return {
      success: false,
      message: errorMessage,
    };
  } else {
    const fallbackMessage = "Registration failed. Please try again";
    setErrorMsg(fallbackMessage);
    return {
      success: false,
      message: fallbackMessage,
    };
  }
}
  }


// Update User Profile
     const updateUserProfile = async(data)=>{
        setErrorMsg("");
        try{
            await apiClient2.put("/auth/users/me/",data,{
                headers:{
                    Authorization:`JWT ${authTokens?.access}`,
                },
            });
        } catch(error){
            console.log(error);
        }
     }
    //  // Register User
    //  const registerUser = async(userData)=>{

    //  }
    //Password Change
    const changePassword = async(data)=>{
        setErrorMsg("");
        try{
            await apiClient2.post("/auth/users/set_password/",data,{
                headers:{
                    Authorization:`JWT ${authTokens?.access}`,
                }
            })
        }catch(error){
            console.log(error);
        }
    }

   //Logout User
  const logoutUser = ()=>{
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        // localStorage.removeItem("cartId")
        if (typeof window !== "undefined") {
          window.location.reload(); // to reinitialize context if needed
          // navigate("/login", { replace: true });
    }
        
    }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         const errorMessage = Object.values(error.response.data)
//           .flat()
//           .join("\n");
//         setErrorMsg(errorMessage);
//         return {
//           success: false,
//           message: errorMessage,
//         };
//       } else {
//         setErrorMsg("Registration failed. Please try again");
//         return {
//           success: false,
//           message: "Registration failed. Please try again",
//         };
//       }
//     }
//   };
    
    return{
        user,
        authTokens,
        errorMsg,
        loginUser,
        registerUser,
        logoutUser,
        updateUserProfile,
        changePassword
    }
}

export default useAuth;

// only login part
// import { useState } from "react";
// import apiClient2 from "../service/apiClient2";
// import { useNavigate } from 'react-router-dom';
// const useAuth = () =>{
//    const [user,setUser] = useState(null);
//    const [errorMsg,setErrorMsg] = useState('');
// //    const navigate = useNavigate()
//    const getToken =() =>{
//         const token = localStorage.getItem('authTokens');
//         return token ? JSON.parse(token):null;
//     };
//     const [authTokens,setAuthTokens] = useState(getToken());

//     //Login User
//     const loginUser = async (userData) =>{
//         setErrorMsg("");
//         try{
//             console.log(userData);
//             const response = await apiClient2.post("/auth/jwt/create/",userData);

//             setAuthTokens(response.data);
//             localStorage.setItem("authTokens",JSON.stringify(response.data));
//             // navigate('/dashboard')


//         } catch(error){
//             console.error("Login Error",error);

//             if (error.response){
//                 setErrorMsg(error.response.data?.detail || "Unknown error");
//             }else{
//                 setErrorMsg("Login failed: Network error or incorrect credentials.");
//             }

//         }
//     }
//     return{
//         user,
//         authTokens,
//         errorMsg,
//         loginUser,
//     }
// }
// //     const loginUser = async(email,password) =>{
// //        const response = await apiClient2.post("/auth/jwt/create/",{
// //         email,
// //         password,
// //        });
// //        console.log(response.data);
// //     }
// //     return {user,loginUser}
// // }

// export default useAuth;