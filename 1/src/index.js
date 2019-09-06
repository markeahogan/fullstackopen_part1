import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => (
    <div>
        <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
)

const Footer = () => {
    return (
        <div>
            greeting app created by
            <a href="https://github.com/mluukkai">mluukkai</a>
        </div>
    )
}

const App = () => (
    <>
        <h1>Greetings</h1>
        <Hello name="Harry" age={6}/>
        <Footer />
    </>
)

ReactDOM.render(<App />, document.getElementById('root'));