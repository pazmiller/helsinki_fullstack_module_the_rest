import logo from './logo.svg';
import './App.css';

const Part = (props) => {
  return(
    <div>
      <p>Contents of the course: {props.content}</p>
      <p>Length of the course:{props.time}</p>
    </div>

  )
}

const Header = (props) => {
  return (
    <div>
      <p>Title of the course: {props.header}</p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part content={props.part1} time={props.exercise1}/>
      <Part content={props.part2} time={props.exercise2}/>
      <Part content={props.part3} time={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total number of exercises: {props.total}</p>
    </div>
  )
}

const App= ()=> {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercise1 = 10
    const part2 = 'Using props to pass data'
    const exercise2 = 7
    const part3 = 'State of a component'
    const exercise3 = 14
  
 return (
    <div>
      <Header Header={course} />
      <Content content={part1} time={exercise1}/>
      <Content content={part2} time={exercise2}/>
      <Content content={part3} time={exercise3}/>
      <Total total={exercise1 + exercise2 + exercise3}/>
    </div>
  )
}

export default App;