import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import EventSection from './EventSection'

import Styles from './EventsStyles'

import { getEventsFromDatabase } from '../../tools/HelpfulFunctions'

const Events = (): React.ReactElement => {
	const events = getEventsFromDatabase()
	console.log(events)

	return (
		<Styles.EventsContainer numOfEvents={events.length}>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Events</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<EventSection events={events}/>
		</Styles.EventsContainer>
	)
}

export default Events
