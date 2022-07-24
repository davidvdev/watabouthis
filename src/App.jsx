import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import GeneratorPage from './pages/GeneratorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ul>
      <Link to="/one-page-dungeon" ><li>One Page Dungeon Styles</li></Link>
      <Link to="/perilous-shores"><li>Perilous Shores Styles</li></Link>
      <Link to="/medieval-fantasy-city"><li>Medieval Fantasy City Styles</li></Link>
      <Link to="/neighborhood"><li>Neighborhood Styles</li></Link>
      <Link to="/mansion"><li>Mansion Styles</li></Link>
      <Link to="/village"><li>Village Styles</li></Link>
      <Link to="/cave"><li>Cave Styles</li></Link>
      </ul>
    </div>
  )
}

export default App
