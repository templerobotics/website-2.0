import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import React from 'react'

import './OverallStyling.css'

import Navigation from './pages/general/Navigation'
import Home from './pages/home/Home'
import Events from './pages/events/Events'

const GlobalStyles = createGlobalStyle`
	:root {
		--color-primary: #9D2235; /* Main theme color */
		--color-secondary: #343a3f; /* Secondary theme color */
		--color-third: #52575b; /* The third color */
		--color-selected: #343a3f; /* The background color for selected items */
		--color-background: #9D2235; /* Background or page color */
		--color-popup: black; /* Background of popups */

		--color-text: #c8c8c9; /* Color of text */
		--color-hover-text: white; /* Color of text when hovering over a link */

		--QR-code-color: #9D2235; /* The color for the QR code */
	}

	body {
		background-color: var(--color-background);
		color: var(--color-text);
	}

	.content { margin: 0 }
`

function debounce(fn, ms) {
	let timer
	return () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			timer = null
			fn.apply(this, arguments)
		}, ms)
	}
}

function App() {

	React.useEffect(() => {
		const set_vh = debounce(function handleResize() {
			let vh = window.innerWidth * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}, 10)

		window.addEventListener('resize', set_vh)
		set_vh()

		return () => window.removeEventListener('resize', set_vh)
	})

	return (
		<>
			<GlobalStyles/>
			<Router basename='website-2.0'>
				<div className="App">
					<Navigation/>
					<div className='content'>
						{/* Define routes within the website */}
						<Routes>
							<Route exact path='/' element={<Home/>}/>
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
