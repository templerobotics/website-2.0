import React from 'react'
import styled from 'styled-components'

import Button from '../general/button/Button'
import { SlideInfo } from '../general/carousel/CarouselStyles'
import { COLORS, FONT_FAMILY } from '../../tools/Constants'
import slide1 from '../../assets/pics/carousel/rmc-team.jpg'
import slide2 from '../../assets/pics/carousel/rocksat17.jpg'
import slide3 from '../../assets/pics/carousel/ballon-team.jpg'


export default class HomeStyles {
	static readonly slideInfo: SlideInfo[] = [
		{
			image: slide1, title: 'NASA RMC',
			description: `The NASA Robotics Mining Competition is a university-level student competion 
			to design and build a mining robot that can traverse the challenging simulated Martian terrain.
			The mining robot must then excavate the regolith simulant and/or the ice simulant (gravel) and
			return the excavated mass for deposit into the collector bin to simulate an offworld, in situ
			resource mining mission.`,
			color: COLORS.BLUE,
			otherContent: <Button source={'/rmc'} local={true} text={'Learn More'} size={'medium'}/>
		},
		{
			image: slide2,
			title: 'ROCKSAT', description: `The Rockstat Team designed a payload that will be placed inside of a sounding 
			rocket which is provided by the Wallops Flight Facility. The rocket will launch at Wallops Island where it will follow a 
			sub-orbital flight path into the Atlantic Ocean, reaching an estimated maximum height of 72 miles.`,
			color: COLORS.GREEN, otherContent: <Button source={'https://spacegrant.colorado.edu/rs-c-2020-current-teams/rsc-tu-20'}
				size={'medium'} text={'Learn More'} />
		},
		{
			image: slide3, title: 'NASA BALOONING',
			description: `The Temple NASA Ballooning Team will participate as one of over fifty teams 
			responsible for the design and production of an HAB that is capable of recording and streaming live video footage to the NASA 
			website, a task which has never been attempted for a solar eclipse.`,
			color: COLORS.PURPLE,
			otherContent:
			<div style={{justifyContent: 'center', columnGap: '5%', display: 'flex', flexDirection: 'row'}}>
				<Button source={'https://sites.google.com/a/temple.edu/eclipseballooningproject/home'}
					text={'Learn More'} size={'medium'} />
				<Button source={'https://www.youtube.com/watch?v=rGMibNYSnRg'} text={'Watch Video'} size={'medium'} />
			</div>
		}
	]

	static readonly HomeContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			max(calc(var(--vh) * .4), 250px)   	/* Intro heading */
			calc(var(--vh) * .06)   			/* Intro heading button */
			calc(var(--vh) * .15)   			/* Program section heading */
			calc(var(--vh) * .4)    			/* Carousel */
			max(calc(var(--vh) * .3), 200px)   	/* Sponsors section heading */
			max(calc(var(--vh) * .15), 200px);  /* Contacts */
		justify-content: center;
	`

	static readonly TitleContainer = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`

	static readonly LargeText = styled.p`
		font-family: 'arca', 'Lato', 'Helvetica', 'Arial', 'sans-serif';
		font-size: 2vw;
		letter-spacing: 5px;
		line-height: 3;
		text-transform: uppercase;
	`

	static readonly SmallText = styled.p`
		font-family: 'Futura', 'Helvetica', 'Arial', 'sans-serif';
		font-size: 10px;
		letter-spacing: 9px;
		text-transform: uppercase;
		margin-top: 40px;
	`

	static readonly Header = styled.h4`
		${FONT_FAMILY.SUBTITLE}
	`

	static readonly SectionHeader = styled.div`
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0%;
		align-items: center;
		justify-content: center;
		font-size: 60px;
		background: linear-gradient(200deg, #9D2235, #996b72, #9D2235);

		& > h2 {
			${FONT_FAMILY.TITLE}
		}
	`

	static readonly VideoSource = styled(Button)`
		margin-left: 5%;
		margin-bottom: 5%;
		align-self: flex-start !important;
	`
}
