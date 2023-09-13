import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Core2 from './Core2'
import Counter from './Counter'
import User from './User'
import OnlyUser from './OnlyUser'
import Friends from './Friends'
import Posts from './Posts'
// import ShowPost from './ShowPost'
function App() {
  let singers = [
    {
      name:'ali',age:23,
    }
    ,
    {
      name:'bali',age:253,
    }
    ,
    {
      name:'kali',age:63,
    }
    

  ]
  function handleClick(){
    alert('hi')       
}

  return (
    <>
    <h1 className='hi'> React</h1>
    <Posts></Posts>
    {/* <ShowPost></ShowPost> */}
    {/* <Friends></Friends> */}
    {/* <User></User> */}
    {/* <Counter></Counter> */}
    
      {/* <h1 className='hi'> React</h1>
      <Object1> </Object1>
      <Student name="rakin" age="20"></Student>
      <Student name="joy" age="20"></Student>
      <Student name="ban" age="20"></Student>

      {
        singers.map(song => <Actor sing={song}> </Actor>)
      } */}
      {/* <button style={{
  margin: '10px' // Note that the style property values should be in quotes
}} onClick={handleClick}>Click me</button> */}


      {/* <button style={{
        margin: "10px" 
      }} onClick={handleClick}> click me </button>

      <button className='btn' onClick={()=> addTwo()}> click me</button> */}
     <Core2></Core2>
    </>
  )

}

function Object1() {
  const age = 20
  let name = 'bijoy'
  let money = 20
  const person = {
    name: 'bijoy',
    age: 20
  }
  return (
    <div>
      <h3>i am {person.name} with age {person.age} and money {age + money}</h3>

    </div>
  );
}
// function Student(props) {
//   // return <p>{props.name} age {props.age}</p>
// }

const { name, age } = { name: '', age: "20" };

function Student({ name, age }) {
  // console.log(name, age);
  // return <h1>{name} {age}</h1>
}
export default App
