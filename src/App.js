import './App.css';
import Score from './components/score/Score';
import Quiz from './components/quiz/Quiz';
import { useState } from 'react';

function App() {

  const questions = [
    {
      question: 'Who is the Richest human being at the moment?',
      answers: [
        {text: "Jeff Bezos"},
        {text: "Elon Musk", isCorrect: true},
        {text: "Bill Gates"},
        {text: "Bernard Arnault"}
      ]
    },

    {
      question: 'What is the Capital of Slovenia?',
      answers: [
        {text: "Maribor"},
        {text: "Koper"},
        {text: "Murska Sobota"},
        {text: "Ljubljana", isCorrect: true}
      ]
    },

    {
      question: 'In which year was the Microsoft XP operating system released?',
      answers: [
        {text: "1998"},
        {text: "2005"},
        {text: "2001", isCorrect: true},
        {text: "2000"}
      ]
    },

    {
      question: 'Elon Musk is the CEO of which global automotive brand?',
      answers: [
        {text: "Microsoft"},
        {text: "Tesla", isCorrect: true},
        {text: "Apple"},
        {text: "Amazon"}
      ]
    },

    {
      question: 'What company is also the name of one of the longest rivers in the world?',
      answers: [
        {text: "Amazon", isCorrect: true},
        {text: "Nile"},
        {text: "Missouri"},
        {text: "Amur"}
      ]
    },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);


  const handleAnswer = (isCorrect) => {
    // Check score
    if(isCorrect) setScore(score + 1)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) setCurrentQuestion(nextQuestion);
    else setIsQuizOver(true)
  }

  const handleReset = () => {
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setScore(0);
  }



  return (
    <div className="app">
      {isQuizOver ? 
      <Score handleReset={handleReset} score={score}/>
      : 
      <Quiz 
      questions={questions} 
      currentQuestion={currentQuestion}
      handleAnswer={handleAnswer}/>
      }
    </div>
  );
}

export default App;