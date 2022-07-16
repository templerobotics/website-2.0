import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export class SponsorImages {
	static readonly arrow = require('../../assets/pics/sponsors/arrow.png')
}

export default class SponsorsStyles {
	static readonly SponsorContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)   /* Title container */
			calc(var(--vh) * .4)   /* Sponsor container */
			max(calc(var(--vh) * .15), 200px);   /* Contacts */

		& > .img-container {
			display: flex;
			background: black;
		}

		& > .img-container > img {
			width: 100%;
			align-self: center;
		}
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
		}
	`
}
