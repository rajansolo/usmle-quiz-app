import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';
import "../App.css";

const Quiz = () => {
  const {score, setScore, setQuizState,selectedOption, setSelectedOption} = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenOption, setChosenOption] =useState("");

  const nextQuestion = ()=>{
    if(Questions[currentQuestion].answer == chosenOption){
      setScore(score+1);
    }
    setSelectedOption([...selectedOption, chosenOption]);
    setCurrentQuestion(currentQuestion+1);
  }

    const finishQuiz=()=>{
      if(Questions[currentQuestion].answer == chosenOption){
        setScore(score+1);
      }
      setSelectedOption([...selectedOption, chosenOption]);
      setQuizState("endScreen");
    }
  return (
    <div className='Quiz'>
        
        <h2>{Questions[currentQuestion].prompt}</h2>
        <div className="option">
          <button onClick={()=>{setChosenOption("A")}}>{Questions[currentQuestion].optionA}</button>
          <button onClick={()=>{setChosenOption("B")}}>{Questions[currentQuestion].optionB}</button>
          <button onClick={()=>{setChosenOption("C")}}>{Questions[currentQuestion].optionC}</button>
          <button onClick={()=>{setChosenOption("D")}}>{Questions[currentQuestion].optionD}</button>
        </div>
        {currentQuestion == Questions.length-1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>):(
        <button onClick={nextQuestion}>Next Question</button>
        )}
    </div>
  )
}

export default Quiz;