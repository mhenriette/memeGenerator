import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Meme from '../components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App mx-auto container px-32 h-screen my-5 flex justify-center ">
      <Meme/>
    </div>
  )
}

export default App
