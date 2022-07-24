
const StyleCard = ({style}) => {
    const width = "40"
    const height = "80"

    const downloadJSON = (filename, data) => {
        const blob = new Blob( style, {type: 'json'} )
    }

    return(
        <div className="StyleCard">
            <h3>{style.name.charAt(0).toUpperCase() + style.name.substring(1).toLowerCase()}</h3>
            <div className="ColorPreviews">
                <svg viewBox="0 0 360 80" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" width={width} height={height} fill={style.colorInk}/>
                    <rect x={width * 1 - 1} width={width} height={height} fill={style.colorShading}/>
                    <rect x={width * 2 - 2} width={width} height={height} fill={style.colorWater}/>
                    <rect x={width * 3 - 3} width={width} height={height} fill={style.colorBg}/>
                    <rect x={width * 4 - 4} width={width} height={height} fill={style.colorPaper}/>
                    <rect x={width * 5 - 5} width={width} height={height} fill={style.shadowColor}/>
                </svg>
            </div>
            <ul>
                <li></li>
            </ul>
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