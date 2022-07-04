import React, { ReactElement } from 'react'

import './IconButton.css'

type IconButtonType = {
	icon: ReactElement,
	source: string
}

export default class IconButton extends React.Component<IconButtonType, never> {
	render () {
		return (
			<a id='icon-container' href={this.props.source} target="_blank" rel="noreferrer">
				{this.props.icon}
			</a>
		)
	}
}
