import React from 'react'

function Card(props) {
    return(
            <div className="card" onClick={() => props.showModal(props.card)}>
                <div className="card-inner">
                    <div style={{backgroundImage: `url(` + props.card.imageUrl + `)`}} className="cardImage"/>
                </div>
                <div className="cardTitle">
                    <p className="cardTitleText">{props.card.title}</p>
                </div>
            </div>
    )
}

export default Card