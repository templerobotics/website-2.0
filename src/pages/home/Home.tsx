// Third party imports
import React from 'react'

// Custom styles
import Styles from './HomeStyles'

// Custom components
import Carousel from '../general/carousel/Carousel'
import Contact from '../contact/Contact'
import Button from '../general/button/Button'

// Images
import title from '../../assets/pics/logos/white-red-long.png'

const slideInfo = Styles.slideInfo

const Home = (): React.ReactElement => {
	return (
		<Styles.HomeContainer>
			<Styles.TitleContainer className='title-container'>
				<img width='80%' src={title} alt='Temple Robotics'/>
				<Styles.LargeText>We make robots and stuff</Styles.LargeText>
				<Styles.SmallText>Visit us in the</Styles.SmallText>
				<Styles.Header>
					Student space exploration and embedded systems lab <br/>
					(second floor of the engineering building)
				</Styles.Header>
			</Styles.TitleContainer>

			<Styles.VideoSource source={'https://www.youtube.com/watch?v=zSLdsUXOmlI&ab_channel=MapleFilms'}
				text={'Video Source'} />

			{/* Id used for linking */}
			<Styles.SectionHeader id='programs'>
				<h2>Program</h2>
			</Styles.SectionHeader>

			<Carousel slideInfo={slideInfo}/>

			{/* Id used for linking */}
			<Styles.SectionHeader id='sponsors'>
				<h2>Help Temple Robotics make robots and stuff</h2>
				<Button source={'/sponsors'} local={true} text={'Become a Sponsor'} size={'large'}/>
			</Styles.SectionHeader>

			<Contact/>
		</Styles.HomeContainer>
	)
}

export default Home
