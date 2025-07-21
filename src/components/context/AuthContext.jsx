import { createContext} from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();
export const AuthProvider =({children})=>{
   const {user,
        authTokens,
        errorMsg,
        loginUser,registerUser,logoutUser, updateUserProfile,changePassword} = useAuth(AuthContext);
 return (
    <AuthContext.Provider value={{user,
        authTokens,
        errorMsg,
        loginUser,registerUser,logoutUser,updateUserProfile,changePassword}}>
      {children}
    </AuthContext.Provider>
  );

}

export  default AuthContext;
