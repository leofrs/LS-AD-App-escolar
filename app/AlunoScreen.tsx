import { Text, View, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MenuAluno from "@/components/MenuAluno";

export default function AlunoScreen() {
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
          Bom dia - nome do aluno aqui
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
        <Text style={{ textAlign: "center" }}>Frequência</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 505,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            width: 350,
            height: 350,
            top: 40,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Aulas de hoje
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Data:00/00/00
          </Text>
        </View>
      </View>

      <MenuAluno />
    </View>
  );
}
