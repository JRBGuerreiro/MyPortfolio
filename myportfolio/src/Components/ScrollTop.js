import React, {useState, useLayoutEffect} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollTop = () => {
    const [showArrow, setShowArrow] = useState(false)

    useLayoutEffect(() => {

        const checkScroll = () => {
            var scrollHeight = document.body.scrollHeight
            var currentPosition = document.documentElement.scrollTop
            var offset = scrollHeight - currentPosition
            var deviceScreenWidth = window.screen.width

            ///mobile devices
            if(deviceScreenWidth < 767) {
                if (!showArrow && offset < 1000){
                    setShowArrow(true)
                } else if (showArrow && offset >= 1000){
                    setShowArrow(false)
                }
            } else {
                if (!showArrow && offset < 1800){
                    setShowArrow(true)
                } else if (showArrow && offset >= 1800){
                    setShowArrow(false)
                }
            }
        }

        window.addEventListener('scroll', checkScroll)

        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [showArrow])

    const scrollTop = (event) => {
        event.preventDefault()
        window.scrollTo({top:0, behavior:"smooth"})
    }

    return (
        showArrow 
        ? <div className="arrowWrapper">
            <FaArrowCircleUp className="arrowTop" onClick={scrollTop}></FaArrowCircleUp>
            <p>Back to top</p>
          </div>
        : null
    )

}

export default ScrollTop