
// Third party
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { isMobile } from 'react-device-detect'

// Styles
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tools/OverallStyling.css'

// Custom Components
import Navigation from './pages/navigation/Navigation'
import Home from './pages/home/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Events from './pages/events/Events'
import RoboticMining from './pages/robotic-mining/RoboticMining'
import Copyright from './pages/copyright/Copyright'

// General tools
import { ANIMATION_TIME, COLORS, FONT_FAMILY } from './tools/Constants'
// import useWindowDimensions, { setVariableCssVars } from './tools/HelpfulFunctions'

// Images
import backgroundVideo from './assets/vids/nasavid.mp4'

const GlobalStyles = createGlobalStyle`
	:root {
		--color-primary: ${COLORS.PRIMARY}; /* Main theme color */
		--color-secondary: ${COLORS.SECONDARY}; /* Secondary theme color */
		--color-third: ${COLORS.THIRD}; /* The third color */
		--color-selected: ${COLORS.SELECTED}; /* The background color for selected items */
		--color-background: ${COLORS.BACKGROUND}; /* Background or page color */

		--color-text: ${COLORS.TEXT}; /* Color of text */
		--color-hover-text: ${COLORS.HOVER_TEXT}; /* Color of text when hovering over a link */
		--link-color: ${COLORS.LINK}; /* Color of links */

		--QR-code-color: ${COLORS.PRIMARY}; /* The color for the QR code */
		--animation-time: ${ANIMATION_TIME}; /* The time it should take for most animations to complete */
	}

	* {
		margin: 0;
	}

	body {
		${FONT_FAMILY.BODY}
		background-color: var(--color-background);
		color: var(--color-text);
	}

	html,
	body {
		height: 100%;
	}
`

const App = (): React.ReactElement => {
	// TODO: On mobile if zoomed in when loading this will recompile or something, changing the value of --vh
	// document.documentElement.style.setProperty('--vh', `${useWindowDimensions().width}px`)
	// isMobile ? null : setVariableCssVars()

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
							<Route path='/rmc' element={<RoboticMining/>}/>
							<Route path='/sponsors' element={<Sponsors/>}/>
						</Routes>
					</div>
				</div>
			</Router>
			<Copyright/>
		</>
	)
}

export default App
