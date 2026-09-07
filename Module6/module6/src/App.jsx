import React from 'react'
import Testcomponent from './components/Testcomponent'
import Card from './components/Card'
import Counter from './components/Counter';

const members = [
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 25 },
    { name: "Sakib", age: 2 },
    { name: "Nabila", age: 23 },
    { name: "Tania", age: 21 }
];

const App = () => {
  return (
    <>

    {/*<div>Hello</div>*/}

    {/* <Testcomponent/> */}

    {/*
    <Card name = "Afifa" age={23} />
    <Card name = "Sahrior" age={23}/>
    */}

    {/*
    {members
    .filter((member)=>member.age > 2)
    .sort((member1, member2)=> member1.age - member2.age)
    .map((member)=>(
      <Card name = {member.name} age={member.age} />
    ))}
    */}

    <Counter/>
    
    </>
  )
}

export default App
