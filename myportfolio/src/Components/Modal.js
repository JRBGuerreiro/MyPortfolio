import React from 'react'
import Slider from './Slider'
import {IoIosCloseCircleOutline} from "react-icons/io"
import styled from "styled-components";

const Animation = styled.div `
    opacity: ${({divOpacity}) => (divOpacity ? "1" : "0")};
    transform: ${({ animate }) => (animate ? "translateY(0vh)" : "translateY(-100vh)")};
    transition: all 0.5s;
    display: flex;
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 11;
`

export default function Modal(props) {

    const closeModal = () => {
        props.setShow()
        //enable scrolling
        document.body.style.overflowY = "visible"
        document.documentElement.style.overflowY = "visible"
    }

    const data = props.data
    
    return (
        <Animation className="modalWrapper" animate={props.show} divOpacity={props.show}>
        {props.data ? 
            <div className="modal" id="modal">
            <div className="modalHeaderWrapper">
            <IoIosCloseCircleOutline className="modalCloseCross" onClick={closeModal}/>
                <img src={data[0].logo} alt="logo" /> 
                <h2>{data[0].title}</h2> 
            </div>
            <div className="modalRightFlex">
                <Slider 
                    images={[data[0].image1Carrousel, data[0].image2Carrousel, data[0].image3Carrousel]}
                /> 
                <div className="modalRightDescription">
                    <h1>Description</h1>
                    <p>{data[0].description}</p>
                    <h1>Technologies</h1>
                    <div className="modalTechnologiesWrapper">
                        {data[0].technologiesUsed.map((image, index) => {
                            return <img src={image} key={index} alt={image.split("/")[2].split(".")[0] + " logo"}/>
                        })}
                    </div> 
                </div>
            </div>
        </div>
        : null}
            
        </Animation>
    )
}   