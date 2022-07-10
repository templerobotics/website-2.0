import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-gradients'

GradientHelper.propTypes = {
	style: PropTypes.number,
	color1: PropTypes.number,
	color2: PropTypes.number,
	startX: PropTypes.number,
	startY: PropTypes.number,
	endX: PropTypes.number,
	endY: PropTypes.number
}

export default class GradientHelper extends Component {
	render() {
		const { style, color1, color2, startX, startY, endX, endY } = this.props
		return (
			<LinearGradient
				colors={[ color1, color2 ]}
				start={{ x: startX, y: startY }}
				end={{ x: endX, y: endY }}
				style={style}
			/>
		)
	}
}