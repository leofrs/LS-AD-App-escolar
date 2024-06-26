import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import NotasAlunos from "./NotasAlunos";
import BoletimAlunos from "./BoletimAlunos";

export default function MenuAluno() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <LinearGradient
        colors={["#0999D5", "#2B476E", "#192f6a"]}
        style={{
          width: "100%",
          height: 50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable>
          <Text style={{ color: "white" }}>Inicio</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate(NotasAlunos)}>
          <Text style={{ color: "white" }}>Notas</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate(BoletimAlunos)}>
          <Text style={{ color: "white" }}>Boletim</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}
