
const StyleCard = ({style, generator}) => {

    const verifyHex = txt => txt.length === 7 && txt.charAt(0) === "#"

    const colors = Object.values(style).flat().filter(setting => verifyHex(setting))

    return(
        <div className="StyleCard">
            <h3>
                {style.name.split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")}
            </h3>
            <div className="ColorPreviews">
                    {colors.map((color,index) => <div key={style.name + index + color} style={{ backgroundColor:color }} className="colorBlock"/>)}
            </div>
            <a 
                role="button" 
                className="download" 
                href={"data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(style, null, 4 ))} 
                download={generator+'-'+style.name +".json"}
            >Download JSON</a>
        </div>
    )
}

export default StyleCard