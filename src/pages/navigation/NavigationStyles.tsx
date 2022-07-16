import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavigationStyles {

	/* NavBar background color */
	static NavigationBar = styled(Navbar)<{transparency: boolean, toggle: boolean}>`
		padding: 0%;
		background-color: ${props => props.transparency ? 'transparent' : 'var(--color-primary)'} !important;
		transition: background-color 0.5s;
		height: 50px; /* TODO: change to relative based on screen width */


		& > .navbar-collapse {
			margin: ${props => props.toggle ? '0 !important' : 'inherit'};
    		background-color: ${props => props.toggle ? 'var(--color-primary) !important' : 'transparent'};
		}

		/* The navbar items (navlinks) container */
		& > .basic-navbar-links {
			margin-right: 5%;
    		justify-content: flex-end;
		}
	`

	static Logo = styled(Navbar.Brand)`
		margin-left: 5%; /* TODO: change to relative based on screen width */
		margin-right: 5%; /* TODO: change to relative based on screen width */
		padding-right: 3%; /* TODO: change to relative based on screen width */
		padding-left: 3%; /* TODO: change to relative based on screen width */
		background-color: var(--color-primary);
		height: 100%;

		& > .logo-container {
			height: 100%;
			display: flex;
			align-items: center;
		}

		:hover {
			background-color: var(--color-selected);
			cursor: pointer;
		}
	`

	static NavbarLinks = styled(Nav)<{toggle: boolean}>`
		& > a.nav-link.active {
			background-color: ${props => props.toggle ? 'var(--color-selected)' : 'transparent'} !important;
		}

		& > a.nav-link:hover {
			color: var(--color-hover-text) !important;
			background-color: ${props => props.toggle ? 'var(--color-selected)' : 'transparent'} !important;
		}

		& > a.nav-link {
			color: var(--color-text) !important;
			padding-left: 5%;
			font-size: 18px;
		}
	`
}
