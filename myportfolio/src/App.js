import React, { useState, useReducer } from 'react'
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection'
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Modal from './Components/Modal';
import Form from './Components/Form'
import ScrollTop from './Components/ScrollTop';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {

	const [show, setShow] = useReducer((p) => !p, false);

	const [data, setData] = useState()

	const handleData = (newData) => setData(newData)

	return (
		<div>
			<Router>
                <NavBar/>
                <Switch>
                    <Route path='/aboutme' component={AboutMe}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contact' component={Form}/>
                </Switch>
           </Router>
			<HeroSection/>
			<AboutMe/>
			<Projects setData={handleData} setShow = {setShow}/>
			<Modal data={data} show={show} setShow={setShow} />
			<Form/>
			<ScrollTop></ScrollTop>
			<Footer/>
		</div>
    )
			
}

export default App;
