import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import React from 'react'
import debounce from 'lodash.debounce'

import './OverallStyling.css'
import { ANIMATION_TIME, COLORS } from './tools/Constants'
import Navigation from './pages/navigation/Navigation'
import Home from './pages/home/Home'
import Events from './pages/events/Events'
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

	body {
		background-color: var(--color-background);
		color: var(--color-text);
		margin: 0;
	}

	.content { margin: 0 }
`

const App = () => {

	React.useEffect(() => {
		const set_vh = debounce(() => {
			const vh = window.innerWidth
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}, 10)

		window.addEventListener('resize', set_vh)
		set_vh()

		return () => window.removeEventListener('resize', set_vh)
	})

	return (
		<>
			<video autoPlay muted loop id="video-background">
				<source src={backgroundVideo} type="video/mp4"/>
				{/* eslint-disable-next-line max-len */}
				<source src="https://12-lvl3-pdl.vimeocdn.com/01/1253/1/31266267/70635209.mp4?expires=1496619294&token=0bc6407a4a5f1f813422a" type="video/mp4"/>
			</video>
			<GlobalStyles/>
			<Router basename='website-2.0'>
				<div className="App">
					<Navigation/>
					<div className='content'>
						{/* Define routes within the website */}
						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/home' element={<Home/>}/>
							<Route path='/events' element={<Events/>}/>
						</Routes>
					</div>
				</div>
			</Router>
		</>
	)
}

export default App
