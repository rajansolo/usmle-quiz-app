import React,{ useContext } from 'react';
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';
import "../App.css";

const EndScreen = () => {
  const{score, setScore,setQuizState} = useContext(QuizContext);
  const restartQuiz=()=>{
    setScore(0);
    setQuizState("menu");
  }
  const checkAnswers=()=>{
    setQuizState("answer")
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished!!</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <button onClick={checkAnswers}>Check Answers</button>
    </div>
  )
}

export default EndScreen;