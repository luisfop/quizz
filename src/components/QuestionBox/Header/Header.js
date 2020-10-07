import React, { useContext } from "react";
import styles from "./Header.module.css";

import { QuizzContext } from "../../../context/QuizzContext";

const Header = () => {
  const { counter, score } = useContext(QuizzContext);

  return (
    <div className={styles.header}>
      <div className={styles.items}>
        <p className={styles.item}>Question {counter} / 10</p>
        <p className={styles.item}>Correct answers: {score} / 10</p>
      </div>
    </div>
  );
};

export default Header;
