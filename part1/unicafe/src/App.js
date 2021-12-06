import React, {useState} from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const total_votes = good+neutral+bad
  const avr = good - bad 
  const happyPercent = good / total_votes * 100
  return (
    <div>
      <h1> Statistics </h1>
      <p>
        Good: {good}
      </p>
      <p>
        Neutral: {neutral}
      </p>
      <p>
        Bad: {bad}
      </p>
      <p> Total votes submitted: {total_votes}</p>
      <p>Average rating: {avr}</p>
      <p> Happy Percentage: {happyPercent} % </p>
    </div>
  )
}


const App = () => {
  //save clicks of each button to its own state
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return (
    <div className="App">
      <h1>UniCafe feedback program</h1>
      <Button handleClick={() => setGood(good + 1)} text="GOOD"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="NEUTRAL"/>
      <Button handleClick={() => setBad(bad + 1)} text="BAD" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
