// Third party
import React from 'react'

// Custom styles
import Styles from './CopyrightStyles'

export default class Copyright extends React.Component {
	render (): React.ReactElement {
		return (
			<Styles.CopyrightContainer>
				© {new Date().getFullYear()} NASA Space Exploration and Embedded Systems Lab. All Rights Reserved.
			</Styles.CopyrightContainer>
		)
	}
}
