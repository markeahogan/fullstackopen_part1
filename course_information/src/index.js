import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => {
    const [part1, part2, part3] = props.parts;
    return (
        <div>
            <Part {...part1} />
            <Part {...part2} />
            <Part {...part3} />
        </div>
    )
}

const Part = (props) => (<p>{props.name} {props.exercises}</p>)

const Total = (props) => {
    const parts = props.parts;
    return (<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
}

const App = () => {
    const course = {
        name:'Half Stack application development',
        parts:[
            {
                name:'Fundamentals of React',
                exercises:10
            },
            {
                name:'Using props to pass data',
                exercises:7
            },
            {
                name:'State of a component',
                exercises:14
            }
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))