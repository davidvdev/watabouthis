import { useLocation } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StyleCard from "../components/StyleCard"
import opdStyles from '../../jsonStyles/one-page-dungeon-styles.json'

const GeneratorPage = ({genType}) => {

    const location = useLocation()
    const generator = location.pathname.substring(1) || genType
    const getStyles = () => {
        switch (generator) {
            case "one-page-dungeon":
                return opdStyles
            default:
                break;
        }
    }

    return(
        <>
        <Header />
        <h1>{generator}</h1>
        {getStyles().map(style => <StyleCard style={style}/>)}
        <Footer />
        </>
    )
}

export default GeneratorPage