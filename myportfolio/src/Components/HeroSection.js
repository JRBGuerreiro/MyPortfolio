import React from 'react'

class HeroSection extends React.Component {

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.handleScroll)
    }


    handleScroll = (event) => {
        var heroHeaderWrapper = document.querySelector(".heroHeaderWrapper")
        var opacity = (document.body.offsetHeight - document.documentElement.scrollTop) / document.body.offsetHeight
        var scale = (document.body.offsetHeight - document.documentElement.scrollTop) / document.body.offsetHeight
        heroHeaderWrapper.style.setProperty('--greetingOpacity', opacity)
        heroHeaderWrapper.style.setProperty('--greetingScale', scale)
    }

    render(){
        return(
            <section className="heroSection">
                <video className="heroVideo" src="images/videoSea.mp4" autoPlay playsInline muted loop/>
                <div className="heroHeaderWrapper">
                    <h1 className="initialGreeting">Hello and welcome to my portfolio</h1>
                    <h2 className="initialGreetingName">My name is Jorge Guerreiro</h2>
                    <button className="initialButton">Get to know me<span/></button>
                </div>
            </section>
        )
    }
}

export default HeroSection