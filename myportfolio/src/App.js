import React from 'react'
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection'
import Card from "./Components/Card"
import experienceData from './experienceData'

class App extends React.Component {
	constructor() {
		super()
        this.state = {
            experience: experienceData
        }
	}
  
	render() {

		const cards = this.state.experience.map(content =>
			<Card
				key = {content.id}
				card = {content}
			/>
			)

		return (
			<div>
				<HeroSection/>
				{/* <div className="projectsWrapper">
					<h1 className="projects">Projects</h1>
				</div> */}
				<div className="cardWrapper">
					{cards}
				</div>
				<Footer/>
			</div>
		  )
	}		
}

export default App;
