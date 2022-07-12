import React from 'react'
import PropTypes from 'prop-types'

import './SocialIcon.css'

export default class SocialIcon extends React.Component<{}, {icon: PropTypes.ReactElementLike, source: string}> {
	static propTypes: { iconElement: PropTypes.Requireable<PropTypes.ReactElementLike>; source: PropTypes.Requireable<string> }
	constructor(props: any) {
		super(props)
		this.state = { icon: props.iconElement, source: props.source }
	}

	render () {
		return (
			<a id='icon-container' href={this.state.source} target="_blank" rel="noreferrer">
				{this.state.icon}
			</a>
		)
	}
}

SocialIcon.propTypes = {
	iconElement: PropTypes.element,
	source: PropTypes.string
}
