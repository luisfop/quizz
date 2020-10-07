import React, { useContext } from "react";
import styles from "./FinalScore.module.css";

import { QuizzContext } from "../../context/QuizzContext";

const FinalScore = () => {
  const { score } = useContext(QuizzContext);

  return (
    <div className={styles.finalScore}>
      <h1>Your final score is: {score} </h1>
    </div>
  );
};

export default FinalScore;
