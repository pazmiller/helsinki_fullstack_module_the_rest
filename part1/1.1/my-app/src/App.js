
const Header = (props) => {
  return (
    <div>
      <p>Title of the course: {props.header}</p>
    </div>
  )
}

const Content = (props) =>{


  return (
    <div>
      <p>Contents of the course: {props.parts.map(part => part.name).join(', ')}</p>
      <p>Length of the course: {props.parts.map(part =>part.exercise).join(', ')}</p>
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, i) => total + i.exercise, 0);
  return(
    <div>
      <p>Total number of exercises: {totalExercises}</p>
    </div>
  )
}

const App= ()=> {
    const course ={
      name:'Half Stack application development',
      parts:[
      {name:'Fundamentals of React',
        exercise:10},
      {name:'Using props to pass data',
      exercise:7},
      {name:'State of a component',
      exercise:14}
    ]
  }
    
    console.log(typeof course)


 return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/> 
    </div>
  )
}

export default App;
