import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi'
import { RiSnapchatLine } from 'react-icons/ri'

import './Home.css'
import Carousel from './Carousel'
import SocialIcon from '../../tools/social-icon/SocialIcon'

import slide1 from '../../assets/pics/carousel/rmc-team.jpg'
import slide2 from '../../assets/pics/carousel/rocksat17.jpg'
import slide3 from '../../assets/pics/carousel/ballon-team.jpg'
import title from '../../assets/pics/white-red-long.png'

const Home = () => {
	return (
		<div className="grid-container" id='home-container'>
			<div className='title-container'>
				<img width='80%' src={title} alt="Temple Robotics"/>
				<p className='large-text'>We make robots and stuff</p>
				<p className='small-text'>Visit us in the</p>
				<h4 id='heading-description'>Student space exploration and embedded systems lab</h4>
			</div>
			<a id='video-source' href="https://www.youtube.com/watch?v=zSLdsUXOmlI&ab_channel=MapleFilms" target="_blank" rel="noreferrer">
				<button type='submit' className="btn btn-outline-light btn-sm">Video Source</button>
			</a>
			<div id='programs' className='section-header'>
				<span>Programs</span>
			</div>
			<Carousel images={[slide1, slide2, slide3]}/>
			<div id='sponsors' className='section-header'>
				<span>Sponsors</span>
			</div>
			<div id='contact'>
				<h2 id='contact-description'>We <BsHeartFill id='sponsor-heart'/> new friends!</h2>
				<div id='icons'>
					<SocialIcon iconElement={<FiTwitter/>} source={'https://twitter.com/templerobotics'} />
					<SocialIcon iconElement={<FiFacebook/>} source={'https://www.facebook.com/templerobotics'} />
					<SocialIcon iconElement={<FiInstagram/>} source={'https://www.instagram.com/templerobotics/'} />
					<SocialIcon iconElement={<RiSnapchatLine/>} source={'https://snapchat.com/add/templerobotics'} />
					<SocialIcon iconElement={<FiYoutube/>} source={'https://www.youtube.com/channel/UCv59XUAVDLtgk0KA9r4RTsA'} />
					<SocialIcon iconElement={<FiMail/>} source={'Mailto:robotics@temple.edu'} />
				</div>
			</div>
		</div>
	)
}

export default Home
