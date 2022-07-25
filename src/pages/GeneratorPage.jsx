import { useLocation } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StyleCard from "../components/StyleCard"
// styles imports
import opdStyles from '../../jsonStyles/one-page-dungeon-styles.json'
import psStyles from '../../jsonStyles/perilous-shores-styles.json'

const GeneratorPage = ({genType}) => {

    const location = useLocation()
    const generator = location.pathname.substring(1) || genType
    const generatorText = generator.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ")

    const getStyles = () => {
        switch (generator) {
            case "one-page-dungeon":
                return opdStyles
            case "perilous-shores":
                return psStyles
            default:
                break;
        }
    }

    return(
        <div className="App">
        <Header />
        <h1>{generatorText}</h1>
        {getStyles().map((style,index) => <StyleCard style={style} key={style.name+"-"+index}/>)}
        <Footer />
        </div>
    )
}

export default GeneratorPage