import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class RocksatStyles {
	static readonly RocksatContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .2)   /* Title container */
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
