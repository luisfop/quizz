import React, { useEffect, useState, useContext } from "react";

import styles from "./QuestionBox.module.css";
import cx from "classnames";

import { QuizzContext } from "../../context/QuizzContext";
import FinalScore from "../FinalScore/FinalScore";

export default function QuestionBox({ questions }) {
  const [answers, setAnswers] = useState([]);

  const [userAnswer, setUserAnswer] = useState("");
  const [indice, setIndice] = useState(0);

  const { counter, setCounter, setScore, score } = useContext(QuizzContext);

  useEffect(() => {
    async function handleShuffle() {
      if (counter <= 9) {
        const respostas = [
          questions[counter].correct_answer,
          questions[counter].incorrect_answers
        ];
        shuffle(respostas);
        setAnswers(respostas);
        setUserAnswer("");
      }
    }
    handleShuffle();
  }, [counter]);

  const shuffle = arr => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const handleCounter = (index, answer) => {
    let correctAnswer = questions[counter].correct_answer;

    if (answer === correctAnswer) {
      setTimeout(function() {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
      setUserAnswer("correct");
      setIndice(index);
      setScore(prevScore => prevScore + 1);
    } else {
      setTimeout(function() {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);

      setUserAnswer("wrong");
    }

    setIndice(index);
  };

  const quizz = counter > 9;

  return quizz ? (
    // <h1 styled={{ color: "red" }}>Finished! Check your score!</h1>
    <FinalScore />
  ) : (
    <div className="questionBox">
      <div className={styles.questionBoxQuestion}>
        <p>{questions[counter].question}</p>
      </div>
      <div className={styles.questionBoxAnswer}>
        {answers.map((answer, i) => {
          return (
            <div
              className={cx(
                styles.answer,
                userAnswer === "correct" && indice === i
                  ? styles.rightAnswer
                  : userAnswer === "wrong" && indice === i
                  ? styles.wrongAnswer
                  : ""
              )}
              key={i}
              onClick={() => handleCounter(i, answer)}
            >
              {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
}
