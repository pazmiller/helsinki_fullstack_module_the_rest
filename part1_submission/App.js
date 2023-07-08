// import React, { useState } from "react";

// const Display1 = (props) => <div>{props.good}</div>;
// const Display2 = (props) => <div>{props.neutral}</div>;
// const Display3 = (props) => <div>{props.bad}</div>;

// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.text}</button>
// );

// const StatisticLine = ({ label, value }) => (
//   <div>
//     {label}: {value}
//   </div>
// );

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const total = good + neutral + bad;
//   const average = (good * 1 + bad * -1) / total;
//   const posRate = (good / total) * 100;

//   let statistics =
//       <div>
//         <h1>statistics</h1>
//         <p>No feedback given</p>
//       </div>
//   if (total > 0) {
//     statistics = (
//       <div>
//         <h1>statistics</h1>
//         <StatisticLine label="good" value={good} />
//         <StatisticLine label="neutral" value={neutral} />
//         <StatisticLine label="bad" value={bad} />
//         <StatisticLine label="all" value={total} />
//         <StatisticLine label="average" value={average} />
//         <StatisticLine label="positive" value={`${posRate}%`} />
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>give feedback</h1>
     
//       <Button handleClick={() => setGood(good + 1)} text="good" />
//       <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button handleClick={() => setBad(bad + 1)}text="bad" />
      
//       {statistics}
      
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react"

const Button = (props) => {
    return(
    <button onClick={props.handleClick}>
        {props.text}
    </button>
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
    ] //length = 8
    console.log(anecdotes.length)

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    
    
    const choseRandom = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomIndex);
      };

    const castVote = () =>{
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }
    const maxVotes = Math.max(...votes)
    const maxAnecdote = votes.indexOf(maxVotes)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <div>
                has {votes[selected]} votes
            </div>
            <div>
            <Button handleClick={()=>choseRandom(0,anecdotes.length-1)} text={'next anecdote'}/>
            <Button handleClick={()=>castVote()} text={'vote'}/>
            </div>

            <div>
            <h1>Anecdote with most votes</h1>
            {anecdotes[maxAnecdote]}
            </div>
        </div>
    
    )
}

// Render the App component
export default App