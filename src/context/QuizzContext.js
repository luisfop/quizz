import React, { useState, createContext } from "react";

export const QuizzContext = createContext();

export const QuizzProvider = props => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <QuizzContext.Provider value={{ counter, setCounter, score, setScore }}>
      {props.children}
    </QuizzContext.Provider>
  );
};
