import { View, Text, Pressable } from "react-native";

import LoginFormAluno from "@/components/LoginForm";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: "blue",
          fontSize: 32,
          marginTop: 16,
          textDecorationLine: "underline",
        }}
      >
        Seja bem vindo!
      </Text>

      <LoginFormAluno />
    </View>
  );
}
