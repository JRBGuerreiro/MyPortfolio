import React, {useState, useRef, useLayoutEffect} from 'react'
import styled from "styled-components";

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

const DivPassionTitleWrapper = styled.div `
    transform: translateX(${({animatePassion}) => (animatePassion ? "0" : "-100vw")});
    transition: transform 1s;
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 120px;
    border-radius: 0 0 100px 100px;
    margin: 30px 0 30px 0;
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



const Passions = () => {

        const [show, doShow] = useState({
            title: false,
            img:false,
            img1:false,
            img2:false,
            img3:false,
        }) 
    
        const refTitle = useRef(null),
            refImg = useRef(null),
            refImg1 = useRef(null),
            refImg2 = useRef(null),
            refImg3 = useRef(null)
    
        useLayoutEffect(() => {
            const topPos = element => element.getBoundingClientRect().top
    
            const passionTitleWrapper = topPos(refTitle.current),
                  imgPos = topPos(refImg.current),
                  imgPos1 = topPos(refImg1.current),
                  imgPos2 = topPos(refImg2.current),
                  imgPos3 = topPos(refImg3.current)
    
            const scrollHandler = () => {
                const scrolPos = window.scrollY + window.innerHeight
                if(passionTitleWrapper < scrolPos) {
                    doShow(state => ({...state, title:true}))
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



    return(
        <section className="aboutMePassions" id="passions">
        <DivPassionTitleWrapper animatePassion={show.title} ref={refTitle}>
            <H1Passion className="aboutMeTitle">Passions</H1Passion>
        </DivPassionTitleWrapper>    
            <Me className="me">
                <ImageWrapper ref={refImg} animateSlideInLeftImg={show.img} className="passionsImgWrapper">
                    <h2>Scuba Diving</h2>
                    <img src= "images/ScubaDiving.jpg" alt="scubadiving" />    
                </ImageWrapper >    
                <ImageWrapper2 animateSlideInRightImg2={show.img1} ref={refImg1} className="passionsImgWrapper">
                    <h2>Wildlife</h2>
                    <img src= "images/NatureWildlife.jpg" alt="elephant" /> 
                </ImageWrapper2>    
                <ImageWrapper3 ref={refImg2} animateSlideInLeftImg3={show.img2} className="passionsImgWrapper">
                    <h2>Travelling</h2>
                    <img src= "images/TravellingDiscovering.jpg" alt="sightseeing" />    
                </ImageWrapper3>    
                <ImageWrapper4 ref={refImg3} animateSlideInRightImg4={show.img3} className="passionsImgWrapper">
                    <h2>Rugby</h2>
                    <img src= "images/ContactSports.jpg" alt="rugby" />     
                </ImageWrapper4>
            </Me>
        </section>
    )
}

export default Passions