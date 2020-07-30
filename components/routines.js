import React, { useEffect, useState } from "react";
import { getRoutines } from "../services/API";
import { View, Text } from "react-native";
import Accordion from "./accordion";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    getRoutines().then((response) => {
      console.log(response);
      setRoutines(response);
    });
  });

  return (
    <View>
      {routines.map((routine, i) => (
        <Accordion title={routine.name} key={i}>
          {routine.tasks.map((task) => (
            <View key={task.description}>
              <Text>-{task.description}</Text>
            </View>
          ))}
        </Accordion>
      ))}
    </View>
  );
};

export default Routines;
