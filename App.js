import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TodoList } from "./components/todoList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routines from "./components/routines";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todos" component={TodoList} />
        <Stack.Screen name="Routines" component={Routines} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
