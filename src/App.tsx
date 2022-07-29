
// Third party
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './tools/OverallStyling'

// Custom Components
import Navigation from './pages/navigation/Navigation'
import Home from './pages/home/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Events from './pages/events/Events'
import RoboticMining from './pages/robotic-mining/RoboticMining'
import Copyright from './pages/copyright/Copyright'
import Rocksat from './pages/rocksat/Rocksat'
import NoMatch404 from './pages/general/NoMatch404'

// Images
import backgroundVideo from './assets/vids/nasavid.mp4'

const App = (): React.ReactElement => {
	return (
		<>
			<video loop={true} muted={true} autoPlay={true} playsInline={true} id='video-background'>
				<source src={backgroundVideo} type='video/mp4'/>
			</video>
			<GlobalStyles/>
			<Router basename='website-2.0'>
				<div className='App'>
					<Navigation/>
					<div className='content'>
						{/* Define routes within the website */}
						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/home' element={<Home/>}/>
							<Route path='/events' element={<Events/>}/>
							<Route path='/robotics' element={<RoboticMining/>}/>
							<Route path='/sponsors' element={<Sponsors/>}/>
							<Route path='/rocksat' element={<Rocksat/>}/>
							{/* If no path was matched, go to 404 page */}
							<Route path='*' element={<NoMatch404/>}/>
						</Routes>
					</div>
				</div>
			</Router>
			<Copyright/>
		</>
	)
}

export default App
