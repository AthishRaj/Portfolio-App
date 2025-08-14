import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='font-bold underline bg-green-300' >HELLO FROM TAILWIND</h1> */}
      <Home/>
    </>
  )
}

export default App
