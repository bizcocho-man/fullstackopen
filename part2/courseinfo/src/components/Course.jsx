const Course = ({course}) => (
  <>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const Header = ({text}) => <h2>{text}</h2>

const Content = ({parts}) => (
  <>
    {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
  </>
)

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p><b>Total of {total} exercises</b></p>
  )
}

export default Course