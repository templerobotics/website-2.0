import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { COLORS } from '../../tools/Constants'

export default class NavigationStyles {

	/* NavBar background color */
	static NavigationBar = styled(Navbar)<{transparency: boolean, toggle: boolean}>`
		padding: 0%;
		background-color: ${props => props.transparency ? 'transparent' : `${COLORS.PRIMARY}`} !important;
		transition: background-color 0.5s;
		height: 50px; /* TODO: change to relative based on screen width */


		& > .navbar-collapse {
			margin: ${props => props.toggle ? '0 !important' : 'inherit'};
    		background-color: ${props => props.toggle ? `${COLORS.PRIMARY} !important` : 'transparent'};
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
		padding-left: 3%;
		padding-right: 3%;
		background: linear-gradient(90deg, ${COLORS.PRIMARY}, #0a3d91, ${COLORS.PRIMARY});
		height: 100%;

		& > .logo-container {
			height: 100%;
			display: flex;
			column-gap: 3%;
			align-items: center;
			justify-content: center;
			text-decoration: none;
		}

		& > .logo-container > img {
			height: 100%;
		}

		& > .logo-container > p {
			color: ${COLORS.TEXT};
		}

		:hover {
			background: linear-gradient(90deg, ${COLORS.SELECTED}, #093273, ${COLORS.SELECTED});
			cursor: pointer;
		}
	`

	static NavbarLinks = styled(Nav)<{toggle: boolean}>`
		& > a.nav-link.active {
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
		}

		& > a.nav-link:hover {
			color: ${COLORS.HOVER_TEXT} !important;
			background-color: ${props => props.toggle ? `${COLORS.SELECTED}` : 'transparent'} !important;
		}

		& > a.nav-link {
			color: ${COLORS.TEXT} !important;
			padding-left: 5%;
			font-size: 18px;
		}
	`
}
