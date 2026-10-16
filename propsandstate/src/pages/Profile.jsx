import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src="{props.image}" alt="profile" style={{height:"100px",width:"200px"}}/>
      <h2>{props.city}</h2>
    </div>
  )
}

export default Profile
