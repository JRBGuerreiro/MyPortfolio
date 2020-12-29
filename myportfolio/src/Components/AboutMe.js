import React, {useState, useRef, useLayoutEffect} from 'react'
import AboutMeIcon from "./AboutMeIcons"
import iconsArray from "../iconsArray"
import styled from "styled-components";

///Styling components for animations
    const DivTitleWrapper = styled.div `
        transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
        transition: transform 1s;
        width: 100vw;
        display: flex;
        justify-content: center;
        height: 120px;
        border-radius: 0 0 100px 100px;
        margin-top: 35px;
    `;

    const DivFlex50RWrapper = styled.div `
        transform: translateX(${({animateSlideInRight}) => (animateSlideInRight ? "0" : "100vw")});
        transition: transform 1s;
        transition-delay: 0.1s;
    `;

    const DivFlex50LWrapper = styled.div `
        transform: translateX(${({animateSlideInLeft}) => (animateSlideInLeft ? "0" : "-100vw")});
        transition: transform 1s;
        transition-delay: 0.1s;
        width: 30%;
        margin-left: 70px;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        display: flex;
        justify-content: center;

        @media (max-width: 960px) {
            width: 80%;
            margin-left: 0px;
        }

        @media (max-width: 768px) {
            width: 90%;
        }
    `;

    const H1 = styled.h1 `
        color: #283647;
        font-size: 32pt;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            font-size: 30pt;
        }

        &:after {
            opacity: ${({opacity}) => (opacity ? "1" : "0")};
            transition: opacity 1s;
            transition-delay: 0.8s;
            content: "About Me";
            display: block;
            color: rgba(40,54,71,.1);
            transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
            margin: -20px 0 0 10px;
        }
    `

const AboutMe = () => {

    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false
    }) 

    const ref = useRef(null),
        refTwo = useRef(null),
        refThree = useRef(null),
        refFour = useRef(null)

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top

        const divPos1 = topPos(ref.current),
              flexDiv50L = topPos(refThree.current),
              flexDiv50R = topPos(refFour.current)

        const scrollHandler = () => {
            const scrolPos = window.scrollY + window.innerHeight
            if(divPos1 < scrolPos) {
                doShow(state => ({...state, itemOne: true}))
                doShow(state => ({...state, itemTwo: true}))
            } 
            if (flexDiv50L < scrolPos) {
                doShow(state => ({...state, itemThree:true}))
            }
            if (flexDiv50R < scrolPos) {
                doShow(state => ({...state, itemFour:true}))
            }

        }
        window.addEventListener("scroll", scrollHandler)

        return () => {
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
            <DivTitleWrapper animate={show.itemOne} ref={ref}>
                <H1 className="aboutMeTitle" opacity={show.itemTwo} ref={refTwo}>About Me</H1>
            </DivTitleWrapper>
            {/* <div className="me">
                <div className="me1"></div>
                <div className="me2"></div>
                <div className="me3"></div>
                <div className="me4"></div>
            </div> */}
            <div className="aboutMeFlexWrapper">
                <DivFlex50LWrapper animateSlideInLeft={show.itemThree} ref={refThree} className="aboutMeFlex50L">
                    <div className="aboutMeImg"/>
                    <h2>Who am I?</h2>
                    <h4>Hi, my name is Jorge and I'm a FrontEnd Software Developer
                       
                        I currently work for Bet365 in Stoke, United Kingdom
                        
                        I am passionated about creating seamless user experience
                       
                        I love creating dynamic animations and CSS effects to engage users.
                    </h4>
                </DivFlex50LWrapper>
                <DivFlex50RWrapper animateSlideInRight={show.itemFour} ref={refFour} className="aboutMeFlex50R">
                    {icons}
                </DivFlex50RWrapper>
            </div>
        </section>
    )
}

export default AboutMe