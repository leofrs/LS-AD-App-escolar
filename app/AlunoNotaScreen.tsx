import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MenuAluno from "@/components/MenuAluno";

export default function AlunoNotaScreen() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#0999D5", "#2B476E", "#192f6a"]}
        style={{ width: "100%", height: 285, justifyContent: "center" }}
      >
        <Text style={{ textAlign: "center", fontSize: 24, color: "white" }}>
          Notas
        </Text>
      </LinearGradient>

      <View
        style={{
          borderWidth: 1,
          borderColor: "gray",
          width: 350,
          height: 150,
          position: "absolute",
          top: 220,
          borderRadius: 25,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Matéria: Portugues</Text>
      </View>

      <View style={{ height: 510 }}></View>
      <MenuAluno />
    </View>
  );
}
