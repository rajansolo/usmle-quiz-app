import { useState } from 'react'
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import Answer from './Components/Answer';
import './App.css'
import { QuizContext } from './Helper/Context';

function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <>
      <div className="App">
        <h2>Quiz App</h2>
        <QuizContext.Provider value={{quizState,setQuizState, score, setScore,selectedOption, setSelectedOption}}>
          {quizState==="menu" && <Menu/>}
          {quizState==="quiz" && <Quiz/>}
          {quizState==="endScreen" && <EndScreen/>}
          {quizState==="answer" && <Answer/>}
        </QuizContext.Provider>
      </div>
    </>
  )
}

export default App
