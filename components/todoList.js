import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
  TextInput,
} from "react-native";

const Item = ({ title }) => (
  <View>
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Pressed!")}
    >
      <View>
        <Text style={styles.item}>{title}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const renderItem = ({ item }) => <Item title={item.description} />;

  useEffect(() => {
    console.log("haloo");
    const todos = getTodos();
    setTodos(todos);
  }, []);

  const getTodos = () => {
    return [
      {
        description: "do stuff",
        type: "single-task",
        id: "fda-42",
      },
      {
        description: "do stuff",
        type: "single-task",
        id: "fe2-23",
      },
      {
        description: "do stuff",
        type: "single-task",
        id: "1d3-23",
      },
    ];
  };

  const onPressNewTodo = () => {
    console.log("asfd");

    const newTodo = {
      description: todo,
      type: "single-task",
      id: `fda-g${todos.length}`,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <View style={styles.container}>
      <Text>todos are here</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.form}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button
          onPress={onPressNewTodo}
          title="New todo"
          color="#841584"
          accessibilityLabel="button for creating todos"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  form: {
    flex: 1,
    padding: 20,
  },
});
