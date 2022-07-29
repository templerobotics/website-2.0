import React from 'react'
import { Table } from './CustomTypes'
import styled from 'styled-components'
import { COLORS } from './Constants'
import { convertToTileCase } from './HelpfulFunctions'

const CustomTable = styled.table`
	height: 100%;
	text-align: center;

	& > tr > td > div {
		background-color: transparent;
	}

	& > tr {
		background-color: ${COLORS.SECONDARY_DARK}7f;
		backdrop-filter: blur(10px);
	}
`

function makeRowCells(object: object): React.ReactElement {
	const cells: React.ReactElement[] = []
	for(const prop in object) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		cells.push(<td>{(object as any)[prop]}</td>)
	}
	return (<tr>{cells}</tr>)
}

export default function createTable(table: Table): React.ReactElement {
	const rows: React.ReactElement[] = []
	const headers: string[] = []
	table.rows.forEach(row => {
		rows.push(makeRowCells(row))
	})
	for(const prop in table.rows.at(0)) {
		headers.push(convertToTileCase(prop))
	}

	return (
		<CustomTable className='table table-dark'>
			<thead>
				<tr>
					{headers.map((header, i) => <th key={i} scope='col'>{header}</th>)}
				</tr>
			</thead>
			{rows.map(row => row)}
		</CustomTable>
	)
}
