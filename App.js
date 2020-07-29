import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TodoList } from "./components/todoList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Doer</Text>
      <StatusBar style="light" />
      <TodoList></TodoList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
