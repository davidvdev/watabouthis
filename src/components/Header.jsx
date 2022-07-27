import { Link } from "react-router-dom"
const Header = ({title}) => {
    return(
        <header className="alt-header">
            <Link to="/">Home</Link>
            <h1>{title}</h1>
        </header>
    )
}

export default Header