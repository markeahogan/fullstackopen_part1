import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    const average = (good - bad)/all;
    const positive = good/all;

    if (all > 0){
        return (
            <table>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={(positive*100)+'%'} />
            </table>
        )
    } else {
        return <div>No feedback given</div>
    }
}

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

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
