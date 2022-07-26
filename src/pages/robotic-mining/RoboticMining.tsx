// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Button from '../general/button/Button'
import PhotoGallery from '../general/photo-gallery/PhotoGallery'
import Contact from '../contact/Contact'

// Custom styles
import Styles, { GALLERY_INFO } from './RoboticMiningStyles'

// Images
import robot from '../../assets/pics/robot-2019.jpg'
import outreachPhoto1 from '../../assets/pics/outreach/vex.jpg'
import outreachPhoto2 from '../../assets/pics/outreach/expo.jpg'
import outreachPhoto3 from '../../assets/pics/outreach/interview.gif'

const RoboticMining = (): React.ReactElement => {
	return (
		<Styles.RmcContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>NASA Robotics Mining Competition</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<Styles.RmcDescription>
				<div>
					<h2>What is it?</h2>
					<p>
						The NASA Robotics Mining Competition is a competition in which university-level students design
						and build a mining robot that can traverse the simulated Martian chaotic terrain. See our robot
						to the right!
					</p>
					<Button text='Learn More' size='large' id='rmc-description-button'
						source='https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html' />
				</div>
				<div>
					{/* TODO: Put the updated robot in here */}
					<img alt='logo' src={robot} width='60%' id='web-logo'/>
				</div>
			</Styles.RmcDescription>

			<Styles.SpaceBackground>
				<Styles.OutreachGallery>
					<h2>Outreach</h2>
					<div className='outreach-slide'>
						<h2>Vex State Sectionals</h2>
						<p>
							Our team members volunteered at the competition to help judge notebooks ref the playing the
							feild and interview teams for award selection.
						</p>
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto1 } />
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto2 } />
					</div>
					<div className='outreach-slide'>
						<h2>Temple University TV</h2>
						<p>
							Our faculty advisor Dr. Helferty, a formor NASA employee, talks about how starting Temple Robotics
							and what it has become today.
						</p>
					</div>
					<div className='outreach-slide'>
						<h2>Philadelphia Robotics Expo</h2>
						<p>
							Our tableing event at the Philadelphia Robotics Expo where about 300 high school student came to see
							what philadelphia had to offer in robotics.
						</p>
					</div>
					<div className='outreach-image-container'>
						<img src={ outreachPhoto3 }/>
					</div>
				</Styles.OutreachGallery>

				<PhotoGallery id={'photo-gallery'} galleryInfo={ GALLERY_INFO }/>
			</Styles.SpaceBackground>

			<Contact/>
		</Styles.RmcContainer>
	)
}

export default RoboticMining
