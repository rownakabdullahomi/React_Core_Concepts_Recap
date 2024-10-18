import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h3>React Core Concepts</h3>
      <hr></hr>
      <Posts></Posts>
    </>
  )
}

export default App
