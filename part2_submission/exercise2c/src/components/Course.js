import React from "react";

const Header = ({ name }) =>  {
    return(
    <h1>{name}</h1>
)
    }
const Part = ({ partname,parthour }) => { 
  return(
    <p>
    {partname} {parthour}
    </p>
  )

}

const Content = ({ parts }) => {
    return(
        <div>
            {parts.map((part,id) => <Part key={part.id} partname={part.name} parthour={part.exercises} />)}
        </div>
    )
}



const Total = ({parts}) =>{
    const textStyle = {
        fontWeight: 'bold',
      };
    return (
        <p style={textStyle}>total of {parts.reduce((sum,parts)=>sum + parts.exercises,0)} exercises</p>
        
)
    }

const Course = ({course}) => {
    return(
        <div>
        <Header name={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    )
    }
  
export default Course
