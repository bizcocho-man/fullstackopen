import { useState } from 'react'

// helper functions
const getRandomValue = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}

const getLargestValueIndex = (array) => {
  let maxValue = Number.MIN_VALUE
  let index = 0

  for (let i = 0; i < array.length; ++i) {
    if (array[i] > maxValue) {
      maxValue = array[i]
      index = i
    }
  }

  return index
}

// components
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const AnecdoteOfTheDay = ({anecdotes, votes, selected}) => (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
    </>
)

const MostVotedAnecdote = ({anecdotes, votes}) => {
  const mostVotedIndex = getLargestValueIndex(votes)

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVotedIndex]}</div>
      <div>has {votes[mostVotedIndex]} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const nextAnecdote = () => {
    setSelected(getRandomValue(0, anecdotes.length - 1))
  }

  return (
    <>
      <AnecdoteOfTheDay anecdotes={anecdotes} votes={votes} selected={selected} />
      <Button text="vote" handleClick={vote} />
      <Button text="next anecdote" handleClick={nextAnecdote} />
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App