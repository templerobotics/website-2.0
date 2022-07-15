import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../../tools/HelpfulFunctions'

import './Button.css'

type ButtonProps = {
	id?: string,
	text: string,
	source: string
	local?: boolean
}

export default class Button extends React.Component<ButtonProps, never> {

	/**
	 * Render the slide elements
	 * @returns An array of carousel slide elements
	 */
	renderLink = () => {
		if (this.props?.local) {
			return <Link id='submit-button' to={ this.props.source } onClick={ scrollToTop } className='btn btn-outline-light btn-sm'>
				{this.props.text}
			</Link>
		}
		return <button id='submit-button' type='submit' className='btn btn-outline-light btn-sm'>
			{this.props.text}
		</button>
	}

	render () {
		return (
			<a id={this.props.id} href={this.props.source} target="_blank" rel="noreferrer">
				{ this.renderLink() }
			</a>
		)
	}
}
