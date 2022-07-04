import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'

import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

import logo from '../../assets/pics/whiteredlong.png'

export default class Navigation extends React.Component {
	render () {
		return (
			<>
				{/* The rest of the navigation bar */}
				<Navbar sticky='top' bg='dark' variant='dark' expand='md'>
					{/* Top left of the navigation bar */}
					<Navbar.Brand className='logo-and-title'>
						<img alt='logo' src={logo} width='200px' height='30px' id='web-logo'/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav variant='pills' className='navbar-container'>
							<NavLink as={Link} to='/'>Home</NavLink>
							<NavLink as={Link} to='/events'>Events</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		)
	}
}
