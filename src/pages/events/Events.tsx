import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import EventSection from './EventSection'

import Styles from './EventsStyles'
import Button from '../general/button/Button'

import { getEventsFromDatabase } from '../../tools/HelpfulFunctions'

const Events = (): React.ReactElement => {
	const events = getEventsFromDatabase()
	console.log(events)

	const eventsGridCss = `
		calc(var(--vh) * .3)
		calc(var(--vh) * ${events.length} * 0.2)
		calc(var(--vh) * .2)
	`

	return (
		<Styles.EventsContainer style={{gridTemplateRows: eventsGridCss}}>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Events</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<EventSection events={events}/>
			<div className='create-button-container'>
				<Button text='Create New Event' size='large'/>
			</div>
		</Styles.EventsContainer>
	)
}

export default Events
