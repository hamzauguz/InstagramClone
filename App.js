import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "./screens/CommentsScreen";
import { Text } from "react-native";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={HomeScreen} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} options={{
          title: "Comments"
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
