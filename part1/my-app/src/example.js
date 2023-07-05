import React from "react"
import ReactDOM from "react-dom"
/** @jsx React.DOM */
const Hello = (props) => {
    const { name, age } = props
    const bornYear = () => new Date().getFullYear() - props.age
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>And you were born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={23 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'))