// Third party
import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

// Custom components
import Contact from '../contact/Contact'

const RocksatContainer = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows:
		calc(var(--vh) * .2)   /* Title container */
		max(calc(var(--vh) * .15), 200px);   /* Contacts */
	justify-items: center;
	align-items: center;

	& > .message > p {
		${FONT_FAMILY.TITLE}
		text-align: center;
	}
`

const Rocksat = (): React.ReactElement => {
	return (
		<RocksatContainer>
			<div className='message'>
				<p>404</p>
				<p>Page Not Found</p>
			</div>
			<Contact/>
		</RocksatContainer>
	)
}

export default Rocksat
