import React from 'react'

import './Home.css'
import Carousel from './Carousel'

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
				<p className='text-center small-text'>Visit us in the</p>
				<h4 className='text-center'>Student space exploration and embedded systems lab</h4>
				<a id='video-source' href="https://www.youtube.com/watch?v=zSLdsUXOmlI&ab_channel=MapleFilms" target="_blank" rel="noreferrer">
					<button type='submit' className="btn btn-outline-light btn-sm" href="google.com">Video Source</button>
				</a>
			</div>
			<div id='programs' className='section-header'>
				<span>Programs</span>
			</div>
			<Carousel images={[slide1, slide2, slide3]}/>
			<p>
				Welcome! My name is Ryan Hodge and I am an electrical engineer and computer science dual major.
			</p>
			<p>
				Testing
			</p>
			<h2>
				Test
			</h2>
			<h2 id='sponsors'>
				Test
			</h2>
		</div>
	)
}

export default Home
