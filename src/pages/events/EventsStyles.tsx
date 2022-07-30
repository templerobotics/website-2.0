import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class EventsStyles {
	static readonly EventsContainer = styled.div<{numOfEvents: number}>`
		display: grid;
		grid-template-columns: 100%;
		justify-items: center;
		align-items: center;
		grid-template-rows: calc(var(--vh) * .3)
			calc(var(--vh) * ${props => props.numOfEvents} * .2)
			calc(var(--vh) * .2);

		& > .create-button-container {
			display: flex;
			align-items: center;
		}
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
		}
	`
}
