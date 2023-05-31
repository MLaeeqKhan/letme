import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [UserID, setUserID] = useState('')


  // ye hy 

  const setUserToken = (data) => {
    // console.log("context data", {data});
    localStorage.setItem("data", JSON.stringify(data));
    setToken(data?.token);
    setUserID(data?.user?._id)

  };
  

  const logoutUser = () => {
    localStorage.removeItem("data");
    setToken();
  };
  return (
    <AuthContext.Provider value={{ token, setUserToken, logoutUser, UserID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
