// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../contact/Contact'

// Custom styles
import Styles, { SponsorImages } from './SponsorsStyles'

const Sponsors = (): React.ReactElement => {
	return (
		<Styles.SponsorContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Sponsors</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>

			<div className='img-container'>
				<img src={SponsorImages.arrow}/>
			</div>

			<Contact/>
		</Styles.SponsorContainer>
	)
}

export default Sponsors
