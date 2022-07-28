import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class EventsStyles {
	static readonly EventsContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		justify-items: center;
		align-items: center;

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
