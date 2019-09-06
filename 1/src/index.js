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

const Total = (props) => (
    <p>Number of exercises {props.count}</p>
)

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name:'Fundamentals of React',
        exercises:10
    }
    const part2 = {
        name:'Using props to pass data',
        exercises:7
    }
    const part3 = {
       name:'State of a component',
       exercises:14
    }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))