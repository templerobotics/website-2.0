import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi'
import { RiSnapchatLine } from 'react-icons/ri'
import { COLORS } from '../../tools/Constants'

import './Home.css'
import Carousel, { SlideInfo } from '../general/carousel/Carousel'
import IconButton from '../general/button/IconButton'
import Button from '../general/button/Button'

import slide1 from '../../assets/pics/carousel/rmc-team.jpg'
import slide2 from '../../assets/pics/carousel/rocksat17.jpg'
import slide3 from '../../assets/pics/carousel/ballon-team.jpg'
import title from '../../assets/pics/white-red-long.png'

const slideInfo: SlideInfo[] = [
	{ image: slide1, title: 'NASA RMC', description: `The NASA Robotics Mining Competition is a university-level student competion 
		to design and build a mining robot that can traverse the challenging simulated Martian terrain. The mining robot must then excavate 
		the regolith simulant and/or the ice simulant (gravel) and return the excavated mass for deposit into the collector bin to simulate 
		an offworld, in situ resource mining mission.`, color: COLORS.BLUE },
	{ image: slide2, title: 'ROCKSAT', description: `The Rockstat Team designed a payload that will be placed inside of a sounding 
		rocket which is provided by the Wallops Flight Facility. The rocket will launch at Wallops Island where it will follow a 
		sub-orbital flight path into the Atlantic Ocean, reaching an estimated maximum height of 72 miles.`, color: COLORS.GREEN },
	{ image: slide3, title: 'NASA BALOONING', description: `The Temple NASA Ballooning Team will participate as one of over fifty teams 
		responsible for the design and production of an HAB that is capable of recording and streaming live video footage to the NASA 
		website, a task which has never been attempted for a solar eclipse.`, color: COLORS.PURPLE }
]

const Home = () => {
	return (
		<div className='grid-container' id='home-container'>
			<div className='title-container'>
				<img width='80%' src={title} alt='Temple Robotics'/>
				<p className='large-text'>We make robots and stuff</p>
				<p className='small-text'>Visit us in the</p>
				<h4 id='heading-description'>Student space exploration and embedded systems lab</h4>
			</div>

			<Button id={'video-source'} source={'https://www.youtube.com/watch?v=zSLdsUXOmlI&ab_channel=MapleFilms'}
				text={'Video Source'} />

			<div id='programs' className='section-header'>
				<span>Programs</span>
			</div>

			<Carousel slideInfo={slideInfo}/>

			<div id='sponsors' className='section-header'>
				<span>Sponsors</span>
			</div>

			<div id='contact'>
				<h2 id='contact-description'>We <BsHeartFill id='sponsor-heart'/> new friends!</h2>
				<div id='icons'>
					<IconButton icon={<FiTwitter/>} source={'https://twitter.com/templerobotics'} />
					<IconButton icon={<FiFacebook/>} source={'https://www.facebook.com/templerobotics'} />
					<IconButton icon={<FiInstagram/>} source={'https://www.instagram.com/templerobotics/'} />
					<IconButton icon={<RiSnapchatLine/>} source={'https://snapchat.com/add/templerobotics'} />
					<IconButton icon={<FiYoutube/>} source={'https://www.youtube.com/channel/UCv59XUAVDLtgk0KA9r4RTsA'} />
					<IconButton icon={<FiMail/>} source={'Mailto:robotics@temple.edu'} />
				</div>
			</div>
		</div>
	)
}

export default Home
