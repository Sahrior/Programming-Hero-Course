import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  


  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(name);
    

  }

  return (
    <div>

      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        <button type="submit" >Submit</button>
      </form>

      {
      name==""?  <div></div>
      :
      <div>Hi {name} </div>
      }
      
    </div>
  )
}

export default App
