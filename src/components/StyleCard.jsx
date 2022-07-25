
const StyleCard = ({style, generator}) => {
    const width = "40"
    const height = "80"

    const colors = Object.values(style).filter(setting => setting.length === 7 && setting.charAt(0) === "#")

    console.log(colors)

    return(
        <div className="StyleCard">
            <h3>
                {style.name.split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")}
            </h3>
            <div className="ColorPreviews">
                    {colors.map((color,index) => <div style={{ backgroundColor:color }} className="colorBlock"/>)}
            </div>
            {/* <ul>
                <li></li>
            </ul> */}
            <a 
                role="button" 
                className="download" 
                href={"data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(style, null, 4 ))} 
                download={"opd"+style.name +".json"}
            >Download JSON</a>
        </div>
    )
}

export default StyleCard