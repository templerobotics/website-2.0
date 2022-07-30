// Third party
import React from 'react'
import styled from 'styled-components'
import { COLORS, CSS_STYLES, FONT_FAMILY } from '../../tools/Constants'
import Button from '../general/button/Button'

const SectionDescriptionStyle = styled.div`
	height: 100%;
	background: linear-gradient(200deg, ${COLORS.PRIMARY}, #996b72, ${COLORS.PRIMARY});
	text-align: center;
	row-gap: 5%;

	// New
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	& > div > div {

	}

	& > div > p {
		padding-left: calc(var(--vh) * .1);
		padding-right: calc(var(--vh) * .1);
		overflow-y: auto;
		margin-bottom: calc(var(--vh) * .04);
	}

	& > div > h2 {
		${FONT_FAMILY.TITLE}
	}

	${CSS_STYLES.showScrollbar('& > div > p')}
`

type SectionDescriptionProps = {
	img: string,
	title: string,
	description: string,
	src?: string,
	button?: string
}

export default class SectionDescription extends React.Component<SectionDescriptionProps, never> {
	render (): React.ReactElement {

		return (
			<SectionDescriptionStyle>
				<div>
					<h2>{this.props.title}</h2>
					<p>{this.props.description}</p>
					{this.props.src ? <Button text={this.props.button ? this.props.button : 'Learn More'}
						size='large' id='rmc-description-button' source={this.props.src} /> : <></>}
				</div>
				<div>
					<img alt='logo' src={this.props.img} width='60%' id='web-logo'/>
				</div>
			</SectionDescriptionStyle>
		)
	}
}
