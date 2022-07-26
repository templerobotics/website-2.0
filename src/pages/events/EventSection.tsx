import React from 'react'

import Styles, { EventSectionProps } from './EventSectionStyles'

class EventSection extends React.Component<EventSectionProps, never> {
	render (): React.ReactElement {
		return (
			<Styles.EventSectionContainer>
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
			</Styles.EventSectionContainer>
		)
	}
}

export default EventSection
