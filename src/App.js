import React, {useEffect, useState} from 'react';
import {getAllQuestions} from './services/Questions';
import styles from './App.module.css';
import QuestionBox from './components/QuestionBox/QuestionBox';
import Header from './components/QuestionBox/Header/Header';



function App() {
  const [ questionsData, setQuestionsData ] = useState([]);
  const [ loading, setLoading] = useState(true) ;


  const questionsApi = 'https://opentdb.com/api.php?amount=10&category=27&type=boolean';

  
  useEffect(() => {
    async function fetchData(){
      let response = await getAllQuestions(questionsApi);
      
      let data = response.results;
      // console.log('Data =>', data);
      setQuestionsData(data);
      setLoading(false);
    }
    fetchData()
  },[])

  console.log('questionsData =>' , questionsData);

  return (
    <div className={styles.App}>
    <Header/>

      <h1 className={styles.title}>Questions Api</h1>

      {loading ? <h1>Loading...</h1> : (
        <div className={styles.container}>
          <QuestionBox questions={questionsData}/>
        </div>
      )}
    </div>
  );
}

export default App;


