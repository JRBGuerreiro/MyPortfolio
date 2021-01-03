import React from 'react'

function Card(props) {

    return(
        !props.card.underConstruction 
        ?   <div className="card" onClick={() => !props.card.underConstruction ? props.showModal(props.card) : null}>
                <div className="card-inner">
                    <div style={{backgroundImage: `url(` + props.card.imageUrl + `)`}} className="cardImage"/>
                </div>
                <div className="cardTitle">
                    <p className="cardTitleText">{props.card.title}</p>
                </div>
            </div>
        :   <div className="cardConstruction">
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