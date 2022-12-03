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
import sStyles from '../../jsonStyles/sigil-styles.json'

const GeneratorPage = ({genType}) => {

    let styleLink
    let generatorLink
    let background
    const location = useLocation()
    const generator = location.pathname.substring(1) || genType
    const generatorText = generator.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ")

    const getStylesAndLink = () => {
        switch (generator) {
            case "one-page-dungeon":
                styleLink = opdStyles
                generatorLink = 'https://watabou.github.io/dungeon.html'
                background = "url('./images/opd-blur.webp')"
                return
            case "perilous-shores":
                styleLink = psStyles
                generatorLink = 'https://watabou.github.io/realm.html'
                background = "url('./images/ps-blur.webp')"
                return
            case "medieval-fantasy-city":
                styleLink = mfcStyles
                generatorLink = 'https://watabou.github.io/city.html'
                background = "url('./images/mfc-blur.webp')"
                return
            case "neighborhood":
                styleLink = nStyles
                generatorLink = 'https://watabou.github.io/district.html'
                background = "url('./images/n-blur.webp')"
                return
            case "mansion":
                styleLink = mStyles
                generatorLink = 'https://watabou.github.io/mansion.html'
                background = "url('./images/m-blur.webp')"
                return
            case "village":
                styleLink = vStyles
                generatorLink = 'https://watabou.github.io/village.html'
                background = "url('./images/v-blur.webp')"
                return
            case "cave":
                styleLink = cStyles
                generatorLink = 'https://watabou.itch.io/cave-generator'
                background = "url('./images/c-blur.webp')"
                return
            case "compass-rose":
                styleLink = crStyles
                generatorLink = 'https://watabou.itch.io/compass-rose-generator'
                background = "url('./images/cr-blur.webp')"
                return
            case "sigil":
                styleLink = sStyles
                generatorLink = 'https://watabou.itch.io/sigil-generator'
                background = "url('./images/s-blur.webp')"
                return
            default:
                break;
        }
    }

    getStylesAndLink()

    return(
        <div className="App" style={{backgroundImage: background}}>
            <Header title={generatorText} link={generatorLink}/>
            <div className="StyleCardTableau">
                {styleLink.map((style,index) => <StyleCard 
                    generator={generator} 
                    style={style} 
                    key={style.name+"-"+index}
                />)}
            </div>
            <Footer />
        </div>
    )
}

export default GeneratorPage