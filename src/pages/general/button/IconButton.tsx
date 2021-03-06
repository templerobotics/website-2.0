// Third party
import React from 'react'

// Custom styles
import Styles, { IconButtonProps } from './IconButtonStyles'

export default class IconButton extends React.Component<IconButtonProps, never> {
	render (): React.ReactElement {
		return (
			<Styles.IconContainer href={this.props.source} target='_blank' rel='noreferrer'>
				{this.props.icon}
			</Styles.IconContainer>
		)
	}
}
