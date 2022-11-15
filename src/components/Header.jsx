import { Link } from "react-router-dom"
const Header = ({title}) => {
    return(
        <header className="alt-header">
            <Link to="/">Home</Link>
            <a>
            <h1>{title}</h1>
            </a>
        </header>
    )
}

export default Header