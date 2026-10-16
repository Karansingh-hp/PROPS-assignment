import React from 'react'

const Employee = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Job.role:{props.role}</p>
      <p>salary:{props.salary}</p>
    </div>
  )
}

export default Employee
