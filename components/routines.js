import React, { useEffect, useState } from "react";
import { getRoutines } from "../services/API";
import { View, Text, Button, StyleSheet } from "react-native";
import Accordion from "./accordion";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    getRoutines().then((response) => {
      console.log(response);
      setRoutines(response);
    });
  });

  const onPressAddRoutine = () => {
    console.log("add routine");
    // Add individual routine tasks to todo list
  };

  const onPressEditRoutine = () => {
    // navigate to routine edit screen with selected routine as parameter
    console.log("edit routine");
  };

  return (
    <View>
      {routines.map((routine, i) => (
        <Accordion title={routine.name} key={i}>
          {routine.tasks.map((task) => (
            <View key={task.description}>
              <Text>-{task.description}</Text>
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <Button
              onPress={onPressEditRoutine}
              title="Edit"
              color="#841584"
              accessibilityLabel="button for editing routines"
            />
          </View>
          <Button
            onPress={onPressAddRoutine}
            title="Add to todos"
            color="#841584"
            accessibilityLabel="button for adding routine todos"
          />
        </Accordion>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Routines;
