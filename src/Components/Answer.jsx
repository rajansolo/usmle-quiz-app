import React,{useContext} from 'react';
import { Questions } from '../Helper/QuestionBank';
import { QuizContext } from '../Helper/Context';

const Answer = () => {
    const {setScore,setQuizState,selectedOption} = useContext(QuizContext);
    const restartQuiz=()=>{
        setScore(0);
        setQuizState("menu");
    }

    const getOptionText = (question, answer) => {
    // console.log("Question:", question.prompt, "Answer:", answer); // Debugging
    switch (answer) {
        case 'A':
            return question.optionA;
        case 'B':
            return question.optionB;
        case 'C':
            return question.optionC;
        case 'D':
            return question.optionD;
        default:
            return "";
    }
};

  return (
    <div className='Answer'>
        {/* {Questions.map((question,index)=>(
            <ul key={index}>
            
            <li className={isCorrect ? 'correct' : 'wrong'} >
            <strong>Q{index + 1}:</strong> {question.prompt}<br />
            <strong>Your Answer:</strong> {selectedOption[index]}: {getOptionText(question, selectedOption[index])}<br />
            <strong>Correct Answer:</strong> {question.answer}: {getOptionText(question, question.answer)}
          </li>
        </ul>
        ))} */}

        {Questions.map((question, index) => {
                const userAnswer = selectedOption[index];
                const isCorrect = question.answer === userAnswer;
                return (
                    <ul key={index}>
                        <li className={isCorrect ? 'correct' : 'wrong'}>
                            <strong>Q{index + 1}:</strong> {question.prompt}<br />
                            <strong>Your Answer:</strong> {userAnswer}: {getOptionText(question, userAnswer)}<br />
                            <strong>Correct Answer:</strong> {question.answer}: {getOptionText(question, question.answer)}
                        </li>
                    </ul>
                );
            })}
      <button onClick={restartQuiz}>Restart Quiz</button>

    </div>
  )
}

export default Answer;