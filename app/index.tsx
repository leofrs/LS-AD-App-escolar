import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import AlunoScreen from "./AlunoScreen";
import CoordenacaoScreen from "./CoordenacaoScreen";

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlunoScreen"
          component={AlunoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoordencaoScreen"
          component={CoordenacaoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
