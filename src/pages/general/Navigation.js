import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'

import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import React from 'react'

import logo from '../../assets/pics/all-white-long.png'

const scrollToTop = () =>{
	window.scrollTo({
		top: 0, 
		behavior: 'smooth'
		/* you can also use 'auto' behaviour
		in place of 'smooth' */
	})
}

export default class Navigation extends React.Component {
	render () {
		return (
			<>
				{/* The rest of the navigation bar */}
				<Navbar sticky='top' bg='dark' variant='dark' expand='md'>
					{/* Top left of the navigation bar */}
					<Navbar.Brand className='logo-and-title'>
						<Link to="/home">
							<img alt='logo' src={logo} width='200px' id='web-logo' onClick={scrollToTop}/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav variant='pills' className='navbar-container'>
							<NavLink as={HashLink} to='/home' onClick={scrollToTop}>Home</NavLink>
							<NavLink as={Link} to='/events' onClick={scrollToTop}>Events</NavLink>
							<NavLink as={HashLink} to='/home#programs'>Programs</NavLink>
							<NavLink as={HashLink} to='/home#sponsors'>Sponsors</NavLink>
							<NavLink as={HashLink} to='/home#contact'>Contact Us</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		)
	}
}
