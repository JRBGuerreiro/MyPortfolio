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
        margin-bottom: 30px;
    `;

    const DivPassionTitleWrapper = styled.div `
        transform: translateX(${({animatePassion}) => (animatePassion ? "0" : "-100vw")});
        transition: transform 1s;
        width: 100vw;
        display: flex;
        justify-content: center;
        height: 120px;
        border-radius: 0 0 100px 100px;
        margin-bottom: 30px;
    `

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
        margin-top: 80px;

        @media (max-width: 768px) {
            font-size: 30pt;
        }

        &:after {
            opacity: ${({opacityAnim}) => (opacityAnim ? "1" : "0")};
            transition: opacity 1s;
            transition-delay: 0.8s;
            content: "About Me";
            display: block;
            color: rgba(40,54,71,.1);
            transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
            margin: -20px 0 0 10px;
        }
    `

    const H1Passion = styled.h1 `
        color: #283647;
        font-size: 32pt;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        margin: 60px 0 30px 0;

        @media (max-width: 768px) {
            font-size: 30pt;
        }

        &:after {
            content: "Passions";
            display: block;
            color: rgba(40,54,71,.1);
            transform: rotate3d(1, 0, 0, 114deg) scale(1, 2.5) skew(-38deg, 0deg);
            margin: -20px 0 0 10px;
        }
    `

    const Me = styled.div `
        display: flex;
        width: 60%;
        margin-top: 40px;
        justify-content: center;
        flex-wrap: wrap;

        img{
            object-fit: cover;
            height: 400px;
            width: 400px;
        }
    `
    const ImageWrapper = styled.div `
        transform: translateX(${({animateSlideInLeftImg}) => (animateSlideInLeftImg ? "0" : "-100vw")});
        transition: transform 1s;
    `

    const ImageWrapper2 = styled.div `
        transform: translateX(${({animateSlideInRightImg2}) => (animateSlideInRightImg2 ? "0" : "100vw")});
        transition: transform 1s;
    `

    const ImageWrapper3 = styled.div `
        transform: translateX(${({animateSlideInLeftImg3}) => (animateSlideInLeftImg3 ? "0" : "-100vw")});
        transition: transform 1s;
    `

    const ImageWrapper4 = styled.div `
        transform: translateX(${({animateSlideInRightImg4}) => (animateSlideInRightImg4 ? "0" : "100vw")});
        transition: transform 1s;
    `

const AboutMe = () => {
    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false,
        itemFour: false, 
        itemFive: false,
        itemSeven: false,
        img:false,
        img1:false,
        img2:false,
        img3:false,
    }) 

    const ref = useRef(null),
        refTwo = useRef(null),
        refThree = useRef(null),
        refFour = useRef(null),
        refSeven = useRef(null),
        refImg = useRef(null),
        refImg1 = useRef(null),
        refImg2 = useRef(null),
        refImg3 = useRef(null)

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top

        const divPos1 = topPos(ref.current),
              flexDiv50L = topPos(refThree.current),
              flexDiv50R = topPos(refFour.current),
              passionTitleWrapper = topPos(refSeven.current),
              imgPos = topPos(refImg.current),
              imgPos1 = topPos(refImg1.current),
              imgPos2 = topPos(refImg2.current),
              imgPos3 = topPos(refImg3.current)

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
            if(passionTitleWrapper < scrolPos) {
                doShow(state => ({...state, itemSeven:true}))
            }
            if(imgPos < scrolPos) {
                doShow(state => ({...state, img:true }))
            }
            if(imgPos1 < scrolPos) {
                doShow(state => ({...state, img1:true }))
            }
            if(imgPos2 < scrolPos) {
                doShow(state => ({...state, img2:true }))
            }
            if(imgPos3 < scrolPos) {
                doShow(state => ({...state, img3:true }))
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
                <H1 className="aboutMeTitle" opacityAnim={show.itemTwo} ref={refTwo}>About Me</H1>
            </DivTitleWrapper>
            <div className="aboutMeFlexWrapper">
                <DivFlex50LWrapper animateSlideInLeft={show.itemThree} ref={refThree} className="aboutMeFlex50L">
                    <div className="aboutMeImg"/>
                    <h2>Who am I?</h2>
                    <p>Hi, my name is Jorge and I'm a FrontEnd Software Developer
                       
                        I currently work for Bet365 in Stoke, United Kingdom
                        
                        I am passionated about creating seamless user experience
                       
                        I love creating dynamic animations and CSS effects to engage users.
                    </p>
                </DivFlex50LWrapper>
                <DivFlex50RWrapper animateSlideInRight={show.itemFour} ref={refFour} className="aboutMeFlex50R">
                    {icons}
                </DivFlex50RWrapper>
            </div>
            <div className="aboutMePassions">
            <DivPassionTitleWrapper animatePassion={show.itemSeven} ref={refSeven}>
                <H1Passion className="aboutMeTitle">Passions</H1Passion>
            </DivPassionTitleWrapper>    
                <Me className="me">
                    <ImageWrapper ref={refImg} animateSlideInLeftImg={show.img} className="passionsImgWrapper">
                        <h2>Scuba Diving</h2>
                        <img src= "images/ScubaDiving.jpg" alt="scubadiving" />    
                    </ImageWrapper >    
                    <ImageWrapper2 animateSlideInRightImg2={show.img1} ref={refImg1} className="passionsImgWrapper">
                        <h2>Wildlife Nature</h2>
                        <img src= "images/NatureWildlife.jpg" alt="elephant" /> 
                    </ImageWrapper2>    
                    <ImageWrapper3 ref={refImg2} animateSlideInLeftImg3={show.img2} className="passionsImgWrapper">
                        <h2>Travelling Discovering</h2>
                        <img src= "images/TravellingDiscovering.jpg" alt="sightseeing" />    
                    </ImageWrapper3>    
                    <ImageWrapper4 ref={refImg3} animateSlideInRightImg4={show.img3} className="passionsImgWrapper">
                        <h2>Rugby</h2>
                        <img src= "images/ContactSports.jpg" alt="rugby" />     
                    </ImageWrapper4>
                </Me>
            </div>
        </section>
    )
}

export default AboutMe