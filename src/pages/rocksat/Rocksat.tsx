// Third party
import React from 'react'
import { AiOutlineDash } from 'react-icons/ai'

// Custom components
import Contact from '../contact/Contact'

// Custom styles
import Styles from './RocksatStyles'

const Rocksat = (): React.ReactElement => {
	return (
		<Styles.RocksatContainer>
			<Styles.TitleContainer className='title-container'>
				<h2 className='title'>Rocksat</h2>
				<AiOutlineDash/>
			</Styles.TitleContainer>

			<Contact/>
		</Styles.RocksatContainer>
	)
}

export default Rocksat
