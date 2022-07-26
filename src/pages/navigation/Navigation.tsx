// Third party
import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// TODO: Remove or implement
// import { HashLink } from 'react-router-hash-link'

// Custom styles
import Styles from './NavigationStyles'

// General tools
import * as Constants from '../../tools/Constants'
import { getScrollY, getWindowWidth, scrollToTop } from '../../tools/HelpfulFunctions'

// Images
import logo from '../../assets/pics/logos/all-white-long.png'

const Navigation = (): React.ReactElement => {
	const { scroll } = getScrollY()
	const { width } = getWindowWidth()
	return (
		<>
			{/* The rest of the navigation bar. The className is dependent on whether the navbar is expanded or not */}
			<Styles.NavigationBar id='navbar-transition'
				transparency={ scroll <= 10 && width > Constants.MOBILE_SIZE ? 1 : 0 }
				toggle={ width < Constants.MOBILE_SIZE ? 1 : 0 }
				sticky='top' bg='dark' variant='dark' expand='md' collapseOnSelect>
				{/* Top left of the navigation bar */}
				<Styles.Logo className='logo-and-title'>
					<Link className='logo-container' to='/home'>
						<img alt='logo' src={logo} width='200px' id='web-logo' onClick={scrollToTop}/>
					</Link>
				</Styles.Logo>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='basic-navbar-links'>
					<Styles.NavbarLinks variant='pills' toggle={ width < Constants.MOBILE_SIZE ? 1 : 0 }>
						{/* Use HashLink when going to an id */}
						{/* TODO: Maybe put links to other pages in offcanvas or dropdown or soemthing */}
						<NavLink eventKey='1' as={Link} to='/home' onClick={scrollToTop}>Home</NavLink>
						<NavLink eventKey='2' as={Link} to='/events' onClick={scrollToTop}>Events</NavLink>
						<NavLink eventKey='3' as={Link} to='/sponsors' onClick={scrollToTop}>Sponsors</NavLink>
						<NavLink eventKey='7' as={Link} to='/rmc' onClick={scrollToTop}>RMC</NavLink>
						{/* <NavLink eventKey='4' as={HashLink} to='/home#programs'>Programs</NavLink> */}
						{/* <NavLink eventKey='5' as={HashLink} to='/home#sponsors'>Sponsors</NavLink> */}
						{/* <NavLink eventKey='6' as={HashLink} to='/home#contact'>Contact Us</NavLink> */}
					</Styles.NavbarLinks>
				</Navbar.Collapse>
			</Styles.NavigationBar>
		</>
	)
}

export default Navigation
