import React from 'react'

function Card(props) {
    return(
            <div className="card">
                <div className="card-inner">
                    <div className="cardFront">
                        <div style={{backgroundImage: `url(` + props.card.imageUrl + `)`}} className="cardImage"/>
                    </div>
                    <div className="cardBack">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
    )
}

export default Card