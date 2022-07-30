// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../contact/Contact'
import SectionDescription from '../robotic-mining/SectionDescription'

// Custom styles
import Styles, { TableInfo } from './RocksatStyles'

// Images
import rocksat from '../../assets/pics/carousel/rocksat17.jpg'
import createTable from '../../tools/Table'

const Rocksat = (): React.ReactElement => {
	return (
		<Styles.RocksatContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Temple Rocksat</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>
			<SectionDescription
				title='What is it?'
				img={rocksat}
				description='The RockSat-C program is a national program, run by the Colorado Space Grant Consortium
				(CSGC), where students build rocket payloads to complete science missions. The payload is launched in a
				rocket at Wallops Island and the payload completes its mission as it falls back to earth.'
				src='https://spacegrant.colorado.edu/rs-c-2020-current-teams/rsc-tu-20'/>
			{/* TODO: Put in a section for previous senior design projects */}
			{createTable(TableInfo)}
			<Contact/>
		</Styles.RocksatContainer>
	)
}

export default Rocksat
