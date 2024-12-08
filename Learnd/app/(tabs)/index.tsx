import { Text, View } from "react-native";
import '../../global.css'
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function HomePage(){

  const [ isLogged, setIsLogged ] = useState(true)

  return (
    <>
      {isLogged ? (
        <Redirect href="/UserView/MainPage" />
      ) : (
        <Redirect href="/AuthService/register" />
      )}
    </>
  );

}