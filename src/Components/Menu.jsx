import { QuizContext } from '../Helper/Context'
import React, { useContext } from 'react'

const Menu = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
  return (
    <div className='Menu'>
        <button onClick={()=>{
            setQuizState("quiz")
        }}>Start Quiz</button>
    </div>
  )
}

export default Menu;