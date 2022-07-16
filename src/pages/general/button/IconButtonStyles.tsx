import { ReactElement } from 'react'
import styled from 'styled-components'

export type IconButtonProps = {
	icon: ReactElement,
	source: string
}

export default class IconButtonStyles {
	static readonly IconContainer = styled.a`
		display: flex;
        height: calc(var(--vh) * .07);
        width: calc(var(--vh) * .07);
        line-height: calc(var(--vh) * .07);
        font-size: calc(var(--vh) * .035);
        border-radius: 100%;
        color: var(--link-color);
        align-items: center;
        justify-content: center;

        :hover {
            background-color: var(--link-color);
            color: var(--color-primary);
            cursor: pointer;
        }
	`
}
