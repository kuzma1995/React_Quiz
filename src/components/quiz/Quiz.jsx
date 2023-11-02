import './Quiz.css';

const Quiz = ({ questions, currentQuestion, handleAnswer }) => {
  return (
    <>
        <div className="quiz__container">
            <div className="question__number">
                <span>Question {currentQuestion + 1} / {questions.length}</span>
            </div>

            <div className="question__text">
              {questions[currentQuestion].question}
            </div>
        
            <div className="answers">
              {questions[currentQuestion].answers.map(({text, isCorrect}) => (
                  <button key={text} onClick={() => handleAnswer(isCorrect)}>{text}</button>
                ))}
            </div>
        </div>
    </>
  )
}

export default Quiz;