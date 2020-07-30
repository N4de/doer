import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/homeScreen";
import RoutinesScreen from "./screens/routinesScreen";
import { Button } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todos" component={HomeScreen} />
        <Tab.Screen name="Routines" component={RoutinesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
