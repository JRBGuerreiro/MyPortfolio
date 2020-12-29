import React from 'react'
import Card from './Card'
import experienceData from '../experienceData'

function Projects(props) {

    function handleShow(cardData) {
        handleData(cardData)
        props.setShow(true)
    }

    const handleData = (data) => props.setData([data])

    const cards = experienceData.map(content =>
        <Card
            key = {content.id}
            card = {content}
            showModal = {handleShow}
            modalData = {handleData}
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