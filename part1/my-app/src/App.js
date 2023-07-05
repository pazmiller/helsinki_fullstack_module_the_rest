import React, { useState } from "react";

const Display1 = (props) => <div>{props.good}</div>;
const Display2 = (props) => <div>{props.neutral}</div>;
const Display3 = (props) => <div>{props.bad}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({ label, value }) => (
  <div>
    {label}: {value}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const posRate = (good / total) * 100;

  let statistics =
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
  if (total > 0) {
    statistics = (
      <div>
        <h1>statistics</h1>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={total} />
        <StatisticLine label="average" value={average} />
        <StatisticLine label="positive" value={`${posRate}%`} />
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
     
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)}text="bad" />
      
      {statistics}
      
    </div>
  );
};

export default App;
