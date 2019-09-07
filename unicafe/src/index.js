import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => (
    <>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
    </>
)

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h1>give feedback</h1>
            <Button text="good" onClick={() => setGood(good+1)}/>
            <Button text="neutral" onClick={() => setNeutral(neutral+1)}/>
            <Button text="bad" onClick={() => setBad(bad+1)}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
