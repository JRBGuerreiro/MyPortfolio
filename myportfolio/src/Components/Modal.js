import React from 'react'
import Slider from './Slider'
import {IoIosCloseCircleOutline} from "react-icons/io"
import styled from "styled-components";

const Animation = styled.div `
    transform: ${({ animate }) => (animate ? "translateY(0vh)" : "translateY(-100vh)")};
    transition: transform 0.5s;
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
    }

    const data = props.data
    
    return (
        <Animation className="modalWrapper" animate={props.show}>  
            <div className="modal" id="modal">
                <div className="modalHeaderWrapper">
                <IoIosCloseCircleOutline className="modalCloseCross" onClick={closeModal}/>
                    {props.data ? <img src={data[0].logo} alt="logo" /> : null }
                    {props.data ? <h2>{data[0].title}</h2> : null}
                </div>
                <div className="modalRightFlex">
                    {props.data ? <Slider 
                        images={[data[0].image1Carrousel, data[0].image2Carrousel, data[0].image3Carrousel]}
                    /> : null}
                    <div className="modalRightDescription">
                        <h1>Description</h1>
                        {props.data ? <p>{data[0].description}</p> : null}
                        <h1>Technologies</h1>
                        {props.data ? <div className="modalTechnologiesWrapper">
                            {data[0].technologiesUsed.map((image) => {
                                return <img src={image}/>
                            })}
                        </div> : null}
                    </div>
                </div>
            </div>
        </Animation>
    )
}   