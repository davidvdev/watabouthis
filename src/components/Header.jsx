import { Link } from "react-router-dom"
const Header = ({title, link}) => {
    return(
        <header className="alt-header">
            <Link to="/">Home</Link>
            <a href={link} rel="noreferer" target="_blank">
                <h1>{title}</h1>
            </a>
        </header>
    )
}

export default Header