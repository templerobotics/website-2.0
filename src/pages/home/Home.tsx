// Third party imports
import React from 'react'

// Custom styles
import Styles from './HomeStyles'

// Custom components
import Carousel from '../general/carousel/Carousel'
import Contact from '../contact/Contact'
import Button from '../general/button/Button'

// Images
import nasaLogo from '../../assets/pics/logos/nasa.png'

const slideInfo = Styles.slideInfo

const Home = (): React.ReactElement => {
	return (
		<Styles.HomeContainer>
			<Styles.TitleContainer className='title-container'>
				<div className='nasa-title'>
					<img src={nasaLogo} alt='NASA'/>
					<p>Temple Space Exploration</p>
				</div>
				{/* TODO: Change motto */}
				<Styles.LargeText>Shoot for the moon with us!</Styles.LargeText>
				<Styles.SmallText>Visit us in the</Styles.SmallText>
				<Styles.Header>
					NASA space exploration and embedded systems lab <br/>
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
				<h2>Help Temple Space Exploration get to the moon!</h2>
				<Button source={'/sponsors'} local={true} text={'Become a Sponsor'} size={'large'}/>
			</Styles.SectionHeader>

			<Contact/>
		</Styles.HomeContainer>
	)
}

export default Home
