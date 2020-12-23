import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slider = (props) => {

    const [current, setCurrent] = useState(0)
    const length = props.images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) 
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {props.images.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (<img src={slide} alt="travel image"/>
                    )}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
