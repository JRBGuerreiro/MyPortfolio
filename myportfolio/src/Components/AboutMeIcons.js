import React from 'react'

function AboutMeIcon(props) {
    
    return(
        <div className="aboutMeIconWrapper">
            <div className="aboutMeIcon" style={{background: `linear-gradient(rgba(247, 247, 247, 0), rgba(231, 231, 231, 0)), url(` + props.icon.imageUrl + `) no-repeat center center`}}>
            </div>
            <h1>{props.icon.title}</h1>
        </div>
    )
}

export default AboutMeIcon