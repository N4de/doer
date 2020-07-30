import React, { useEffect, useState } from "react";
import { getRoutines } from "../services/API";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    getRoutines().then((response) => {
      console.log(response);
      setRoutines(response);
    });
  });

  return <div>Routines here</div>;
};

export default Routines;
