import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Button from './Components/Button'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Button />
        <Button />
      </div>
    </>
  )
}

export default App