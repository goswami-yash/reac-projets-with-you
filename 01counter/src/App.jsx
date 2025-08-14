import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addvalue =() =>{

    counter= counter + 1
    setCounter(counter)

  }

  const removevalue=()=>{
    if(counter>0){
    counter=counter-1
       setCounter(counter)
    }else{
      console.log("your value is not  less then 0");
    }
  }
 
 // let counter=15;
  return (
   
    <>
      <h1>Hello yash</h1>
      <h2>counter value :{counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br></br>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
