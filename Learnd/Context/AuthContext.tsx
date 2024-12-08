import { AuthType } from "@/Types/ContextTypes/AuthType";
import React, { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode }> = ({
  children,
}) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const createUser = async () => {
    try {
      const response = await axios.post("http://192.168.1.7:3100/api/auth/createUser", {
        username: username,
        email: email,
        password: password,
      });
      console.log("Usuario creado con éxito:", response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
        if (error.response) {
          console.error("Response Error Data:", error.response.data);
          console.error("Response Error Status:", error.response.status);
        } else {
          console.error("No Response from Server");
        }
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };
  


  return(
    <AuthContext.Provider value={{username, email, password, setUsername, setEmail, setPassword, createUser}}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context){
    throw new Error("Error to use AuthContext");
  }
  return context;
}