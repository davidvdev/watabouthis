import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {

  const [hover, setHover] = useState('default')

  const handleMouseOver = (className) => {
    setHover(className);
  };

  return (
    <div className={"App" + " " + hover}>
      <header>
        <h1>Watabouthis?</h1>
        <p>An unofficial styles and themes repository for Watabou's procedural generators!</p>
      </header>
      <ul className="generator-list">
        <Link to="/one-page-dungeon" >
          <li className="one-page-dungeon" onMouseOver={(event) => handleMouseOver(event.target.className)}>One Page Dungeon Styles</li>
        </Link>
        <Link to="/perilous-shores" >
          <li className="perilous-shores" onMouseOver={(event) => handleMouseOver(event.target.className)}>Perilous Shores Styles</li>
        </Link>
        <Link to="/medieval-fantasy-city" >
          <li className="medieval-fantasy-city" onMouseOver={(event) => handleMouseOver(event.target.className)}>Medieval Fantasy City Styles</li>
        </Link>
        <Link to="/neighborhood" >
          <li className="neighborhood" onMouseOver={(event) => handleMouseOver(event.target.className)}>Neighborhood Styles</li>
        </Link>
        <Link to="/mansion" >
          <li className="mansion" onMouseOver={(event) => handleMouseOver(event.target.className)}>Mansion Styles</li>
        </Link>
        <Link to="/village" >
          <li className="village" onMouseOver={(event) => handleMouseOver(event.target.className)}>Village Styles</li>
        </Link>
        <Link to="/cave" >
          <li className="cave" onMouseOver={(event) => handleMouseOver(event.target.className)}>Cave Styles</li>
        </Link>
        <Link to="/compass-rose" >
          <li className="compass-rose" onMouseOver={(event) => handleMouseOver(event.target.className)}>Compass Rose Styles</li>
        </Link>
      </ul>
      <Footer />
    </div>
  )
}

export default App
