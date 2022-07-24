
const StyleCard = ({style}) => {
    return(
        <div className="StyleCard">
            <div className="ColorPreviews">
                <svg style={{display:"flex"}}>
                    <rect width="20" height="20" fill={style.colorInk}/>
                    <rect width="20" height="20" fill={style.colorShading}/>
                    <rect width="20" height="20" fill={style.colorWater}/>
                    <rect width="20" height="20" fill={style.colorBg}/>
                    <rect width="20" height="20" fill={style.colorPaper}/>
                    <rect width="20" height="20" fill={style.shadowColor}/>
                </svg>
            </div>
            <h3>{style.name}</h3>
        </div>
    )
}

export default StyleCard