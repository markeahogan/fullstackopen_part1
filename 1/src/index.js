import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => {
    const [part1, part2, part3] = props.parts;
    return (
        <div>
            <Part part={part1[0]} exercises={part1[1]} />
            <Part part={part2[0]} exercises={part2[1]} />
            <Part part={part3[0]} exercises={part3[1]} />
        </div>
    )
}

const Part = (props) => (<p>{props.part} {props.exercises}</p>)

const Total = (props) => (
    <p>Number of exercises {props.count}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))