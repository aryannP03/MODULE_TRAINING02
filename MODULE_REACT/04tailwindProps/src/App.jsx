import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Aryan",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> HELLO TAILWIND</h1>
      < Card someObj={myobj}/>
      
      < Card someObj={myobj}/>
    </>
  )
}

export default App
