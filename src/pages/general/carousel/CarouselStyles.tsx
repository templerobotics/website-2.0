import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'
import { ANIMATION_TIME, COLORS, CSS_STYLES, FONT_FAMILY } from '../../../tools/Constants'
import { Color } from '../../../tools/CustomTypes'

export interface SlideInfo {
	image: string
	title: string
	description: string
	color: Color
	otherContent: React.ReactElement
}

export type CarouselProps = {
	slideInfo: SlideInfo[],
}

export type CarouselSlideProps = {
	slideInfo: SlideInfo,
	id: string,
}

export default class CarouselStyles {
	static readonly CarouselContainer = styled.div`
		padding: calc(var(--vh) * .05);
		display: grid;
		grid-template-columns: auto calc(var(--vh) * .7) auto;
		grid-template-rows: calc(var(--vh) * .24) auto;
		justify-items: center;
		align-items: center;
		-webkit-transition: background-color ${ANIMATION_TIME}; /* For Safari 3.1 to 6.0 */
		transition: background-color ${ANIMATION_TIME};
	`

	static readonly Chevron = styled(BsChevronLeft || BsChevronRight)<{right?: boolean | string}>`
		color: ${COLORS.TEXT};
		:hover {
			color: ${COLORS.HOVER_TEXT};
			cursor: pointer;
		}
		grid-column: ${props => props.right ? 3 : 1};
	`

	static readonly CarouselSlide = styled.div`
		height: 100%;
		grid-column: 2;
		grid-row: 1;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: 100%;
		column-gap: 2%;
		overflow: hidden;
		border: 2px solid rgba(255, 255, 255, .5);

		& > .trim-img {
			width: 100%;
			height: 100%;
		}

		& > .trim-img > .slide-img {
			width: 100%;
			align-self: center;
			z-index: -10;
		}
	`

	static readonly SlideWords = styled.div`
		grid-column: 2;
		height: 100%;
		text-align: center;
		overflow-y: scroll;

		& > h2 {
			${FONT_FAMILY.SECONDARY_TITLE}
		}

		& > p {
			margin-bottom: 1rem;
		}

		${CSS_STYLES.showScrollbar('&')}

		& > div > a {
			margin: calc(var(--vh) * .01);
		}
	`

	static readonly SlideContainer = styled.div`
		height: 100%;
    	overflow: hidden;
	`

	static readonly SlideCountContainer = styled.div`
		grid-column: 2;

		& > * {
			-webkit-transition: color ${ANIMATION_TIME} linear;
			-ms-transition: color ${ANIMATION_TIME} linear;
			transition: color ${ANIMATION_TIME} linear;
		}
	`
}
