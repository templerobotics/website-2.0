import styled from 'styled-components'
import { FONT_FAMILY } from '../../../tools/Constants'

export interface ButtonProps {
	id?: string,
	className?: string,
	text: string,
	source?: string,
	local?: boolean,
	onClick?: () => void,

	/** @param {string} [size='small'] The size of the button. Defaults to `'small'`. */
	size?: 'small'|'medium'|'large'
}

export default class ButtonStyles {
	static readonly ButtonContainer = styled.a`
		& > .link-submit-button {
			height: calc(var(--vh) * .03);
			border-radius: calc(var(--vh) * .05);
		}
		& > .link-submit-button > div {
			display: flex;
			height: 100%;
			align-items: center;
		}
		& > .link-submit-button > div > p {
			font-weight: bold;
			${FONT_FAMILY.BODY}
			font-size: calc(var(--vh) * .015);
			margin: 0;
		}
		& > .link-submit-button:hover {
			color: var(--color-primary);
		}
	`

	static readonly ButtonContainerDiv = styled.div`
		& > .link-submit-button {
			height: calc(var(--vh) * .03);
			border-radius: calc(var(--vh) * .05);
		}
		& > .link-submit-button > div {
			display: flex;
			height: 100%;
			align-items: center;
		}
		& > .link-submit-button > div > p {
			font-weight: bold;
			${FONT_FAMILY.BODY}
			font-size: calc(var(--vh) * .015);
			margin: 0;
		}
		& > .link-submit-button:hover {
			color: var(--color-primary);
		}
	`
}
