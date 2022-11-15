import { Link } from "react-router-dom"
const Header = ({title, link}) => {
    return(
        <header className="alt-header">
            <a href={link} rel="noreferer" target="_blank">
                <h1>{title}</h1>
            </a>
            <Link to="/">Back to Generator List</Link>
        </header>
    )
}

export default Header