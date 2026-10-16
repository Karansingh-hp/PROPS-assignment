import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>price :{props.price}</h2>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Product
