// Third party
import React from 'react'
import { Link } from 'react-router-dom'

// Custom styles
import Styles, { ButtonProps } from './ButtonStyles'

// General tools
import { scrollToTop } from '../../../tools/HelpfulFunctions'

export default class Button extends React.Component<ButtonProps, never> {
	render (): React.ReactElement {
		let buttonSize: string
		let local = this.props.local
		local = !this.props.source ? true : local

		/** Set the proper size for the button */
		switch (this.props?.size ?? 'small') {
			case 'large': buttonSize = 'btn-lg'; break
			case 'medium': buttonSize = 'btn-md'; break
			default: buttonSize = 'btn-sm'
		}

		if (!local) {
			return (
				<div>
					<Styles.ButtonContainer className={this.props.className} id={this.props.id}
						href={ this.props.source } target='_blank' rel='noreferrer'>
						<button type='submit' className={ `link-submit-button btn btn-outline-light ${buttonSize}` }>
							<div>
								<p>{this.props.text}</p>
							</div>
						</button>
					</Styles.ButtonContainer>
				</div>
			)
		} else {
			return (
				<div>
					<Styles.ButtonContainerDiv className={this.props.className} id={this.props.id}>
						<Link to={ this.props.source ?? '' } onClick={ this.props.onClick ?? scrollToTop }
							className={ `link-submit-button btn btn-outline-light ${buttonSize}` }>
							<div>
								<p>{this.props.text}</p>
							</div>
						</Link>
					</Styles.ButtonContainerDiv>
				</div>
			)
		}
	}
}
