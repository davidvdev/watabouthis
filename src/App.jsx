import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import OnePageDugeon from './pages/OnePageDungeon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </header>
      <Link to="/OnePageDungeon" >Link 1</Link>
    </div>
  )
}

export default App
