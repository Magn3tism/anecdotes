import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [score, setScore] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [highest, setHighest] = useState(0);

  const nextAnecdote = () => {
    let rand = Math.floor(Math.random() * 7);
    while (1) {
      if (rand !== selected) break;
      rand = Math.floor(Math.random() * 7);
    }
    setSelected(rand);
  };

  const voteAnecdote = () => {
    let newScore = [...score];
    newScore[selected]++;

    if (newScore[selected] > newScore[highest]) setHighest(selected);
    setScore(newScore);
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {score[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next</button>

      <h1>Anecdote with highest votes</h1>
      <p>{anecdotes[highest]}</p>
      <p>has {score[highest]} votes</p>
    </div>
  );
};

export default App;
