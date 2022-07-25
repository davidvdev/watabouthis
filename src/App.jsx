import { Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <header>
        <h1>Watabouthis?</h1>
        <p>An unofficial styles and themes repository for Watabou's procedural generators!</p>
      </header>
      <ul>
        <Link to="/one-page-dungeon" ><li>One Page Dungeon Styles</li></Link>
        <Link to="/perilous-shores"><li>Perilous Shores Styles</li></Link>
        <Link to="/medieval-fantasy-city"><li>Medieval Fantasy City Styles</li></Link>
        <Link to="/neighborhood"><li>Neighborhood Styles</li></Link>
        <Link to="/mansion"><li>Mansion Styles</li></Link>
        <Link to="/village"><li>Village Styles</li></Link>
        <Link to="/cave"><li>Cave Styles</li></Link>
        <Link to="/compass-rose"><li>Compass Rose Styles</li></Link>
      </ul>
      <Footer />
    </div>
  )
}

export default App
