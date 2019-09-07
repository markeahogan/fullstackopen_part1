import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({text, votes}) => {
    return (
        <>
        <div>{text}</div>
        <div>has {votes} votes</div>
        </>
    )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map(x => 0));

  const selectRandomAnecdote = () => {
    const index = Math.floor(Math.random()*anecdotes.length);
    setSelected(index);
  };

  const incrementVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const bestVote = votes.indexOf(Math.max(...votes));

  return (
      <>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
      <Button onClick={() => incrementVote(selected)} text="vote" />
      <Button onClick={selectRandomAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[bestVote]} votes={votes[bestVote]} />
      </>
   )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = Array(anecdotes.length).fill(0);

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes}/>,
  document.getElementById('root')
)