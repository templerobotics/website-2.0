import './Navigation.css'

import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import React from 'react'

import logo from '../../assets/pics/all-white-long.png'
import debounce from 'lodash.debounce'

const scrollToTop = () =>{
	window.scrollTo({
		top: 0, 
		behavior: 'smooth'
	})
}

const Navigation = () => {
	const [dimensions, setDimensions] = React.useState({ 
		width: window.innerWidth
	})

	// Used for changing the color of the navbar items when in mobile mode
	React.useEffect(() => {
		const set_width = debounce(function handleResize() {
			setDimensions({ width: window.innerWidth })
		}, 500)

		const handle_scroll = debounce(function handleResize() {
			let msgEl = document.querySelector('#navbar-transition')
			if (window.scrollY <= 10) {
				// Fade to clear if not already clear
				msgEl.style.setProperty('background-color', 'transparent', 'important')
			}
			else {
				// Fade to red
				msgEl.style.setProperty('background-color', 'var(--color-primary)', 'important')
			}
		}, 10)

		window.addEventListener('resize', set_width)
		window.addEventListener('scroll', handle_scroll)

		return () => { 
			window.removeEventListener('resize', set_width)
			window.removeEventListener('scroll', handle_scroll)
		}
	})

	return (
		<>
			{/* The rest of the navigation bar. The className is dependent on whether the navbar is expanded or not */}
			<Navbar id='navbar-transition' className={dimensions.width < 760 ? 'toggle' : 'no-toggle'} sticky='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
				{/* Top left of the navigation bar */}
				<Navbar.Brand className='logo-and-title'>
					<Link to='/home'>
						<img alt='logo' src={logo} width='200px' id='web-logo' onClick={scrollToTop}/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav variant='pills' className='navbar-container'>
						{/* Use HashLink when going to an id */}
						{/* TODO: Try and get the scrolling for the id's to go to the right place */}
						<NavLink eventKey='1' as={HashLink} to='/home' onClick={scrollToTop}>Home</NavLink>
						<NavLink eventKey='2' as={Link} to='/events' onClick={scrollToTop}>Events</NavLink>
						<NavLink eventKey='3' as={HashLink} to='/home#programs'>Programs</NavLink>
						<NavLink eventKey='4' as={HashLink} to='/home#sponsors'>Sponsors</NavLink>
						<NavLink eventKey='5' as={HashLink} to='/home#contact'>Contact Us</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Navigation