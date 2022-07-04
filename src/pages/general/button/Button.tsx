import React from 'react'

import './Button.css'

type ButtonProps = {
	id: string,
	text: string,
	source: string
}

export default class Button extends React.Component<ButtonProps, never> {
	render () {
		return (
			<a id={this.props.id} href={this.props.source} target="_blank" rel="noreferrer">
				<button id='submit-button' type='submit' className='btn btn-outline-light btn-sm'>{this.props.text}</button>
			</a>
		)
	}
}
