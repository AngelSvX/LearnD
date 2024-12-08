import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import "../../global.css";
import { useGame } from "@/Context/GameContext";


export default function MainPage() {

  const {data} = useGame()
  const {width} = Dimensions.get("window");

  return (
    <ScrollView className="bg-[#0D1B2A] w-full h-screen">
      <View className="header mx-8 mt-4">
        <View className="User">
          <Text className="text-white text-4xl pb-3">Bienvenido Usuario!</Text>
          <View className="w-full h-[2px] bg-white"></View>
        </View>
        <View
          className="estadisticas w-full mt-5 flex flex-row justify-between
        "
        >
          <View className="w-[30%] bg-[#2C3744] py-3 rounded-lg">
            <Text className="text-white text-center font-semibold text-2xl">
              5
            </Text>
          </View>
          <View className="w-[30%] bg-[#2C3744] py-3 rounded-lg">
            <Text className="text-white text-center font-semibold text-2xl">
              200
            </Text>
          </View>
          <View className="w-[30%] bg-[#2C3744] py-3 rounded-lg">
            <Text className="text-white text-center font-semibold text-2xl">
              125
            </Text>
          </View>
        </View>

          <TouchableOpacity className="election bg-[#2C3744] w-full py-3 mt-5 rounded-lg">
            <Text className="text-white text-center font-semibold text-2xl">
              JavaScript
            </Text>
          </TouchableOpacity>

      </View>
      <View className="midder mx-8 mt-8">
        <View className="text"><Text className="text-white text-2xl">Lógica de programación</Text></View>
        <View className="carrousel">
          <FlatList 
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data) => data.id}
            renderItem={({item}) => (
              <View style={[styles.slide]} className="bg-slate-400 w-24 h-24">
                <Text>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View className="bottom"></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
});
