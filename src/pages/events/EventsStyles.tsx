import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class EventsStyles {
	static readonly SponsorContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)  	/* Page title */
			calc(var(--vh) * .4)   	/* Event section */
			calc(var(--vh) * .2);	/* Event button */
		row-gap: 5%;
		justify-items: center;
		align-items: center;
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
		}
	`
}
