import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
    counter++
    setCounter(counter)
    console.log("value added", counter);
    
  }
  const removeValue = () => {
    if(counter){
    counter--
    setCounter(counter)
    console.log("value removed", counter);
    }
    else return
  }


  
  return (
    <>
      <h1>Start with React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value </button>
      <br />
      <br />
      <button
      onClick={removeValue}>remove value  </button>
    </>
  )
}

export default App
