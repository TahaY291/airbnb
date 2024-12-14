

export default function Card(props) {
    let badgeText 
    let badgeStyle = {}
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.location == "Online") {
        badgeText = "Online"
        badgeStyle = {color: "white", backgroundColor : "transparent", fontSize: "16px"}
        
    }
    return (
        <>
            <div className="card">
            {badgeText && <div className="card--badge" style={badgeStyle}>{badgeText}</div>}
                <img src={`/images/${props.coverImg}`} className="card--image" />
                <div className="card--stats">
                    <img src="/images/star.png" className="card--star" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray"> { "  "  + props.location}</span>
                </div>
                <h2 >{props.title}</h2 >
                <p><span className="bold">From $1{props.price}</span> / person</p>
            </div>
        </>
    )
}