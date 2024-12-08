import { useAuth } from "@/Context/AuthContext";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator, // Indicador de carga
} from "react-native";

export default function Register() {

  const {username, email, password, setUsername, setEmail, setPassword, createUser} = useAuth()

  const [passwordIsMatch, setPasswordIsMatch] = useState(Boolean)

  const [fontsLoaded] = useFonts({
    "Gantari-ExtraBold": require("../../assets/fonts/Gantari/Gantari-ExtraBold.ttf"),
    "Gantari-Bold": require("../../assets/fonts/Gantari/Gantari-Bold.ttf"),
    "Gantari-SemiBold": require("../../assets/fonts/Gantari/Gantari-SemiBold.ttf"),
    "Gantari-Regular": require("../../assets/fonts/Gantari/Gantari-Regular.ttf"),
    "Gantari-Light": require("../../assets/fonts/Gantari/Gantari-Light.ttf"),
    Nunito: require("../../assets/fonts/Nunito/Nunito-Regular.ttf"),
  });

  // Si las fuentes aún no están cargadas, muestra un indicador de carga
  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-[#0D1B2A]">
        <ActivityIndicator size="large" color="#778DA9" />
      </View>
    );
  }

  // Renderiza el componente una vez que las fuentes han cargado
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#0D1B2A]"
    >
      <ScrollView className="flex flex-col">
        <View className="w-full h-[230px] flex items-center justify-center mt-14 mb-2">
          <Image
            className="w-[250px] h-full"
            resizeMode="contain"
            source={require("../../assets/images/splash-icon.png")}
          />
        </View>
        <View className="flex items-center justify-center mb-2 mx-12">
          <Text
            className="text-[#778DA9] text-3xl text-center w-full"
            style={{ fontFamily: "Gantari-ExtraBold" }}
          >
            CUENTA NUEVA
          </Text>
        </View>

        <View className="mx-12 h-1/2">
          <View className="h-full flex flex-col justify-around">
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Usuario"
              style={{ fontFamily: "Gantari-Regular" }}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Correo"
              style={{ fontFamily: "Gantari-Regular" }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Contraseña"
              style={{ fontFamily: "Gantari-Regular" }}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Confirmar Contraseña"
              style={{ fontFamily: "Gantari-Regular" }}
            />
          </View>
          <View className="h-3/6 flex items-center justify-evenly">
            <View className="flex items-center mt-3">
              <TouchableOpacity className="w-2/3 h-[50px] bg-[#383F90] flex justify-center rounded-md px-10" onPress={createUser}>
                <Text
                  className="text-white text-center text-2xl w-full"
                  style={{ fontFamily: "Gantari-SemiBold" }}
                >
                  Crear Cuenta
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                className="text-white text-center"
                style={{ fontFamily: "Gantari-Light" }}
              >
                Al crear una cuenta de LearnD Corp aceptas los
              </Text>
              <Text
                className="text-[#778DA9] text-center"
                style={{ fontFamily: "Gantari-Light" }}
              >
                términos y condiciones de la política de privacidad
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-start justify-start pt-2">
            <Text className="text-white w-3/4 flex flex-row justify-around">
              ¿Ya tienes una cuenta?
              <Link className="text-[#778DA9]" href={"/AuthService/login"}>
                {" "}
                Inicia Sesión
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
