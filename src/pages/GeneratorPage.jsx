import { useLocation } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import StyleCard from "../components/StyleCard"

// styles imports
import opdStyles from '../../jsonStyles/one-page-dungeon-styles.json'
import psStyles from '../../jsonStyles/perilous-shores-styles.json'
import mfcStyles from '../../jsonStyles/medieval-fantasy-city-styles.json'
import nStyles from '../../jsonStyles/neighborhood-styles.json'
import mStyles from '../../jsonStyles/mansion-styles.json'
import vStyles from '../../jsonStyles/village-styles.json'
import cStyles from '../../jsonStyles/cave-styles.json'
import crStyles from '../../jsonStyles/compass-rose-styles.json'

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
            case "medieval-fantasy-city":
                return mfcStyles
            case "neighborhood":
                return nStyles
            case "mansion":
                return mStyles
            case "village":
                return vStyles
            case "cave":
                return cStyles
            case "compass-rose":
                return crStyles
            default:
                break;
        }
    }

    return(
        <div className="App">
            <Header title={generatorText}/>
            <div className="StyleCardTableau">
                {getStyles().map((style,index) => <StyleCard generator={generator} style={style} key={style.name+"-"+index}/>)}
            </div>
            <Footer />
        </div>
    )
}

export default GeneratorPage