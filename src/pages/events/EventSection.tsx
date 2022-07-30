import React from 'react'
import { EventObject } from '../../tools/CustomTypes'

import Styles from './EventSectionStyles'

class EventSection extends React.Component<{events: EventObject[]}, never> {
	render (): React.ReactElement {
		return (
			<Styles.EventSectionContainer rows={this.props.events.length}>
				{this.props.events.map((event, i) => {
					return (
						<Styles.EventItemContainer key={i}>
							<h2 className='title'>{event.title}</h2>
							<div className='date'>
								<p>{!isNaN(event.date.getMonth()) ? `${event.date.getMonth() + 1}/${event.date.getDate()}` : 'TBD'}</p>
							</div>
							<p className='location'>Location: {event.location}</p>
							<p className='description'>Description: {event.description}</p>
						</Styles.EventItemContainer>
					)
				})}
			</Styles.EventSectionContainer>
		)
	}
}

export default EventSection
