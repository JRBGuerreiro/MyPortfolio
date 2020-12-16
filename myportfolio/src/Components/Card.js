import React from 'react'

function Card(props) {
    console.log(props)

    return(
            <div className="card">
                <div className="card-inner">
                    <div className="cardFront">
                        <div style={{backgroundImage: `url(` + props.card.imageUrl + `)`}} className="cardImage"/>
                        {/* <div className="cardTitleWrapper">
                            <h3 className="cardTitle">{props.card.title}</h3>
                        </div> */}
                    </div>
                    <div className="cardBack">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
    )
}

export default Card