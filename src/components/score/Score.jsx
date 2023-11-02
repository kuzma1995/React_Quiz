import './Score.css';

const Score = ({ handleReset, score }) => {
  return (
    <div className='score__container'>
        <p>Score: {score} out of 5</p>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Score;