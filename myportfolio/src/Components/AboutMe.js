import React, {useState, useRef, useLayoutEffect} from 'react'
import AboutMeIcon from "./AboutMeIcons"
import iconsArray from "../iconsArray"
import styled from "styled-components";

///Styling components for animations
    const Div = styled.div `
        transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
        transition: transform 1s;
        width: 100vw;
        display: flex;
        justify-content: center;
        height: 120px;
        border-radius: 0 0 100px 100px;
        background-color: #283647;
    `;

    const H1 = styled.h1 `
        opacity: ${({animateOpacity}) => (animateOpacity ? "1" : "0")};
        transition: opacity 1.2s;
        transition-delay: 0.6s;
        color: #ffffff;
        font-size: 45px;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        margin-bottom: 10px;
    `

const AboutMe = () => {

    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false
    }) 

    const ref = useRef(null),
        refTwo = useRef(null) 

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top

        const divPos1 = topPos(ref.current)
            // div2Pos = topPos(refTwo.current)

        const scrollHandler = () => {
            const scrolPos = window.scrollY + window.innerHeight
            if(divPos1 < scrolPos) {
                debugger;
                doShow(state => ({...state, itemOne: true}))
                doShow(state => ({...state, itemTwo: true}))
            } 

        }
        window.addEventListener("scroll", scrollHandler)

        return () => {
            console.log("i'm returning")
            window.removeEventListener("scroll", scrollHandler)
        };
    }, [])


    const icons = iconsArray.map((content) =>
        <AboutMeIcon
            key={content.id}
            icon={content}
        />
    )

    return(
        <section className="aboutMeSection">
            <Div animate={show.itemOne} ref={ref}>
                <H1 animateOpacity={show.itemTwo} ref={refTwo}>About Me</H1>
            </Div>
            <div className="aboutMeFlexWrapper">
                <div className="aboutMeFlex50L">
                    <div className="aboutMeImg"/>
                    <h2>Who am I?</h2>
                    <h4>Hi, my name is Jorge and I'm a FrontEnd Software Developer
                        <br/>
                        I currently work for Bet365 in Stoke, United Kingdom
                        <br/>
                        I am passionated about creating seamless user experience
                        <br/>
                        I love creating dynamic animations and CSS effects to engage users
                    </h4>
                </div>
                <div className="aboutMeFlex50R">
                    {icons}
                </div>
            </div>
        </section>
    )
}

export default AboutMe