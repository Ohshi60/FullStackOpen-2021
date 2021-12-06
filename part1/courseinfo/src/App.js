


const Header = ({course}) => {
  console.log(course)
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({name,exercises}) => {
  
 
  console.log(name,exercises)
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}
const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}
const Total = ({total}) => {
  console.log(total)
  return (
    <div>
      <h1>Total exercises {total}</h1>
    </div>
  )
}
const App = () => {
  const course = 'Half stack application development'
  const parts = [
    {
      name: 'Fundamentals of react',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total total={13}/> 
    </div>
  );
}

export default App;
