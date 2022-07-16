import styled from 'styled-components'

export type EventSectionProps = {
	title: string,
	description: string,
	img: string
}

export default class EventSectionStyles {
	static readonly EventSectionContainer = styled.div`
		width: 80%;
		height: 100%;
		padding: 5%;
		background-color: var(--color-secondary);
        border-radius: calc(var(--vh) * .05);
	`
}
