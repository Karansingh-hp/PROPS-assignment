import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h1>hello</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.course}</h1>
    </div>
  )
}

export default Student
