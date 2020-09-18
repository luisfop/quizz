import React, { useEffect, useState } from "react";

import { getAllQuestions } from "./services/Questions";
import styles from "./App.module.css";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import Header from "./components/QuestionBox/Header/Header";

import { QuizzProvider } from "./context/QuizzContext";



function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionsApi =
    "https://opentdb.com/api.php?amount=10&category=27&type=boolean";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllQuestions(questionsApi);

      let data = response.results;
      
      setQuestionsData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <QuizzProvider>
      <div className={styles.App}>
        <Header />

        <h1 className={styles.title}>Questions Api</h1>

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.container}>
            <QuestionBox questions={questionsData} />
          </div>
        )}
      </div>
    </QuizzProvider>
  );
}

export default App;
