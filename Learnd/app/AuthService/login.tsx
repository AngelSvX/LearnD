import { useFonts } from "expo-font";
import { Link } from "expo-router";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login(){

  const [fontsLoaded] = useFonts({
    "Gantari-ExtraBold": require("../../assets/fonts/Gantari/Gantari-ExtraBold.ttf"),
    "Gantari-Bold": require("../../assets/fonts/Gantari/Gantari-Bold.ttf"),
    "Gantari-SemiBold": require("../../assets/fonts/Gantari/Gantari-SemiBold.ttf"),
    "Gantari-Regular": require("../../assets/fonts/Gantari/Gantari-Regular.ttf"),
    "Gantari-Light": require("../../assets/fonts/Gantari/Gantari-Light.ttf"),
    Nunito: require("../../assets/fonts/Nunito/Nunito-Regular.ttf"),
  });

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#0D1B2A]"
    >
      <ScrollView className=" flex flex-col">
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
            INICIAR SESIÓN
          </Text>
        </View>

        <View className=" mx-12 h-1/3">
          <View className=" h-full flex flex-col justify-around">
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Usuario"
              style={{ fontFamily: "Gantari-Regular" }}
            />
            <TextInput
              className="placeholder:text-[#55687a] text-[#778DA9] text-xl border-b-[1px] border-[#778DA9]"
              placeholder="Correo"
              style={{ fontFamily: "Gantari-Regular" }}
            />
          </View>
          <View className="h-3/6 flex items-center justify-evenly">
            <View className="flex items-center mt-3">
              <TouchableOpacity className="w-2/3 h-[50px] bg-[#383F90] flex justify-center rounded-md px-10">
                <Text
                  className="text-white text-center text-2xl w-full"
                  style={{ fontFamily: "Gantari-SemiBold" }}
                >
                  Iniciar Sesión
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row items-end justify-start h-48">
            <Text className="text-white w-5/6 flex flex-row justify-around">
              ¿Aún no tienes una cuenta?
              <Link className="text-[#778DA9]" href={"/AuthService/register"}>  Regístrate aquí</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}