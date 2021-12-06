import React, {useState} from 'react'

const Button = ({clickHandler,text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}
const App = () => {
  const anecdotes = [
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]



  const changeSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }  
  const [popular,setPopular] = useState(0)
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected,setSelected] = useState(0)
  const handleVote = () =>{
    let cp_votes = [...votes]
    cp_votes[selected] += 1
    setVotes(cp_votes)
    if (cp_votes[selected] > cp_votes[popular]) {
      setPopular(selected)
    } 
  }
  return (
    <div>
      <div>
        <h3>
          Anecdote of the day 
        </h3>
        <p>{anecdotes[selected]}</p>
        <div>
          <h3>Updoots: {votes[selected]}</h3>
          <Button clickHandler={handleVote}  text="Vote for this"/> 
        </div>
      </div>
      <Button clickHandler={changeSelected} text="Moar Wisdom"/>
      <div>
        <h3>Most popular Anecdote</h3>
        <p>{anecdotes[popular]}</p>
      </div>
    </div>
  )
}

export default App;