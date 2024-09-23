"use client"
import { createContext, useState, useContext } from "react";

// Create a UserContext
const UserContext = createContext(null);

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //console.log(user);
  
 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUser = () => {
  return useContext(UserContext);
};
