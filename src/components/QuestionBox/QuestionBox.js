import React, { useEffect, useState } from "react";

import styles from "./QuestionBox.module.css";
import cx from "classnames";

export default function QuestionBox({ questions }) {
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(0);

  const [teste, setTeste] = useState("");
  const [indice, setIndice] = useState(-1);

  useEffect(() => {
    async function handleShuffle() {
      const respostas = [
        questions[counter].correct_answer,
        questions[counter].incorrect_answers
      ];
      shuffle(respostas);
      setAnswers(respostas);

      setTeste("");
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
    // console.log('Correct Answer =>',correctAnswer);
    // console.log( 'Index => ', index );
    // console.log("Answer => ", answer);



    if (answer === correctAnswer && indice === index) {
      
      setTimeout(function() {
        alert("Right Answer");
        setCounter(counter + 1);
      }, 1000);
      setTeste("certo");
      setIndice(index);


      // setAnswerStyling(true)

      // alert('Resposta CORRETA!');
    } else {
      // console.log('Errrrooooouuuu, vc clicou em ==>', answer)
      
      setTimeout(function() {
        alert("Wrong Answer");
        setCounter(counter + 1);
      }, 500);

      setTeste("errado");
    }

    setIndice(index);
  };

  // console.log('Answers => ',answers)

  // console.log(counter);

  // console.log('Question number 1 => ', questions[counter].question)
  console.log("ANSWERS !!! =>> ", answers);


  return (
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
                teste === "certo" && indice === i ? styles.rightAnswer : teste === "errado" && indice === i ? styles.wrongAnswer : "")}
                // teste === "certo" && indice === i ? styles.rightAnswer : teste === "errado" && indice === i ? styles.wrongAnswer : "")}
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
