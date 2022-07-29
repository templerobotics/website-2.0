import styled from 'styled-components'
import { COLORS, FONT_FAMILY } from '../../tools/Constants'

export default class EventSectionStyles {
	static readonly EventSectionContainer = styled.div<{rows: number}>`
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(${props => props.rows}, minmax(0, 1fr));
		grid-row-gap: 5%;
		justify-items: center;
	`

	static readonly EventItemContainer = styled.div`
		width: 80%;
		height: 100%;
		display: grid;
		grid-template-columns: 30% 30% 40%;
		grid-template-rows: 40% 60%;
		background-color: ${COLORS.PRIMARY};
        border-radius: calc(var(--vh) * .05);
		justify-items: center;
		align-items: center;
		overflow: hidden;

		& > .date {
			height: 100%;
			width: 100%;
			grid-row-start: 1;
			grid-row-end: 3;
			background-color: ${COLORS.SELECTED};
			display: flex;
			align-items: center;
			justify-content: center;
			${FONT_FAMILY.TITLE}
		}

		& > .location,
		& > .description {
			align-self: flex-start;
		}

		& > .title {
			grid-column-start: 2;
			grid-column-end: 4;
		}

		& > *,
		& > div > p {
			margin: 0;
		}
	`
}
