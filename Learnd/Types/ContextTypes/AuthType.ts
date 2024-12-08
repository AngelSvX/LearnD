import React from "react";

type setVoid = () => void;

export interface AuthType{
  username: string
  email: string
  password: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  createUser: setVoid
}