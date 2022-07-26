import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'
import EventSection from './EventSection'

import Styles from './EventsStyles'
import defaultImage from '../../assets/pics/outreach/expo.jpg'
import Button from '../general/button/Button'

const Events = (): React.ReactElement => {
	return (
		<Styles.SponsorContainer className='grid-container'>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Events</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			{/* Event component for each event */}
			<EventSection title='Test Event' description='This is the event description' img={defaultImage}/>
			<Button text='Create New Event' size='large'/>
		</Styles.SponsorContainer>
	)
}

export default Events
