import React from 'react'
import Card from './Card'
import experienceData from '../experienceData'

function Projects() {
    const cards = experienceData.map(content =>
        <Card
            key = {content.id}
            card = {content}
        />
    )

    return(
        <section className="projects">
            <div className="projectsTitleWrapper">
                <h1>Projects</h1>
            </div>
            <div className="projectsWrapper">
                {cards}
            </div> 
        </section>
    )
}

export default Projects