import React, { useState } from 'react'
import './Card.css'

const Card = (props) => {

  const [member, setMember] = useState("")
  


  const clickHandler = (name) => {

    setMember(name)

  }

  return (
    <div onClick={()=>clickHandler(props.name)} className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{member}</p>

    </div>
  )
}

export default Card