import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { FiFacebook, FiInstagram, FiMail, FiTwitter, FiYoutube } from 'react-icons/fi'
import { RiSnapchatLine } from 'react-icons/ri'

import IconButton from '../general/button/IconButton'
import Styles from './ContactStyles'

export default class Contact extends React.Component<Record<string, never>, never> {
	render (): React.ReactElement {
		return (
			<Styles.ContactContainer>
				<h2 className='contact-description'>We <BsHeartFill id='sponsor-heart'/> new friends!</h2>
				<div className='icons'>
					<IconButton icon={<FiTwitter/>} source={'https://twitter.com/templerobotics'} />
					<IconButton icon={<FiFacebook/>} source={'https://www.facebook.com/templerobotics'} />
					<IconButton icon={<FiInstagram/>} source={'https://www.instagram.com/templerobotics/'} />
					<IconButton icon={<RiSnapchatLine/>} source={'https://snapchat.com/add/templerobotics'} />
					<IconButton icon={<FiYoutube/>} source={'https://www.youtube.com/channel/UCv59XUAVDLtgk0KA9r4RTsA'} />
					<IconButton icon={<FiMail/>} source={'Mailto:robotics@temple.edu'} />
				</div>
			</Styles.ContactContainer>
		)
	}
}
