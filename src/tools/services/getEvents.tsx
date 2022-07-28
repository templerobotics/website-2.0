import { EventObject } from '../CustomTypes'

type EventJson = {
	title: string,
	date: string,
	location: string,
	description: string
}

// https://temple-robotics-db.herokuapp.com/
export async function getEvents(): Promise<EventObject[]> {
	// Uncomment if a dynamic database is wanted
	// const data = await fetch('https://temple-robotics-db.herokuapp.com/events')
	const data = await fetch('https://templerobotics.github.io/website-2.0/db.json')
	const eventData: EventJson[] = await data.json()
	const currentDate = new Date()
	currentDate.setDate(currentDate.getDate() + 1)
	const returnData: EventObject[] = eventData.map(event => {
		return { ...event, date: currentDate }
	})
	eventData.forEach((event, i) => {
		const [month, day, year] = event.date.split('/')
		returnData[i].date = new Date(+year, +month - 1, +day)
	})
	return returnData.filter(event => event.date.getTime() > currentDate.getTime())
}
