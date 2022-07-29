import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'
import { Table } from '../../tools/CustomTypes'
import Button from '../general/button/Button'

type RocksatRow = {
	year: string,
	teamConcept: string,
	source: React.ReactElement
}

export const TableInfo: Table<RocksatRow> = {
	rows: [
		{
			year: '2022', teamConcept: 'Examining Sonoluminescent Bubble with Respect to Gravity Change',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2022-current-teams/temple-university'}
				text={'2022 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2020', teamConcept: 'Evaluating Ozone and CFC Levels',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2020-current-teams/rsc-tu-20'}
				text={'2020 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2019', teamConcept: 'Detecting Muon Radiation',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2019-current-teams/rsc-tu-2019'}
				text={'2019 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2017', teamConcept: 'Measuring Radiation Levels and Atmospheric Ionization',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2017-current-teams/tu17'}
				text={'2017 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2016', teamConcept: 'Determining Concentration of Sulfate Based Aerosols in the Troposphere',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2016-current-teams/tu16'}
				text={'2016 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2015', teamConcept: 'Collecting Biological Air Samples',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2015-current-teams/temple15'}
				text={'2015 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2014', teamConcept: 'Collecting Samples of the Troposphere, Stratosphere, and Stratopause',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2014-resources/current-teams/temple'}
				text={'2014 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2013', teamConcept: 'Analyzing Greenhouse Gases of the Troposphere, Stratosphere, and Stratopause',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2013-team-resources/current-teams/temple'}
				text={'2013 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2012', teamConcept: 'Measuring the Earth\'s Magnetic Field and Taking Biological Samples',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2012-team-resources/teams'}
				text={'2012 Rocksat Team'} size={'medium'}/>
		},
		{
			year: '2011', teamConcept: 'Controlling an Active Vibration Damping System Using Piezoceramic Patch Dampers',
			source: <Button source={'https://spacegrant.colorado.edu/rs-c-2011-home/participants?layout=edit&id=297'}
				text={'2011 Rocksat Team'} size={'medium'}/>
		}
	]
}

export default class RocksatStyles {
	static readonly RocksatContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows:
			calc(var(--vh) * .3)   /* Title container */
			calc(var(--vh) * .3)   /* Title container */
			calc(var(--vh) * .7)   /* Title container */
			max(calc(var(--vh) * .15), 200px);   /* Contacts */

		& > .img-container {
			display: flex;
			background: black;
		}

		& > .img-container > img {
			width: 100%;
			align-self: center;
		}
	`

	static readonly TitleContainer = styled.div`
		width: 100%;
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
		}
	`

	static readonly Table = styled.div`
		width: 100%;
	`
}
