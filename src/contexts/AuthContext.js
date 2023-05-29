import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();



  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken();
  };
  return (
    <AuthContext.Provider value={{ token, setUserToken, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
