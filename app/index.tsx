import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import AlunoScreen from "./AlunoScreen";
import CoordenacaoScreen from "./CoordenacaoScreen";
import BoletimAlunos from "@/components/BoletimAlunos";
import AlunoNotaScreen from "./AlunoNotaScreen";

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="AlunoScreen">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="AlunoScreen"
          component={AlunoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotasAlunos"
          component={AlunoNotaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BoletimAlunos"
          component={BoletimAlunos}
          //options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="CoordencaoScreen"
          component={CoordenacaoScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
