import { EventObject } from '../CustomTypes'

type EventJson = {
	title: string,
	date: string,
	location: string,
	description: string
}

function sortByDate(eventa: EventObject, eventb: EventObject): number {
	if (eventa.date > eventb.date || isNaN(eventa.date.getMonth())) {
		return 1
	} else if (eventa.date == eventb.date) {
		return 0
	}
	return -1
}

export async function getEvents(): Promise<EventObject[]> {
	const data = await fetch('https://templerobotics.github.io/website-2.0/db.json')
	const eventData: EventJson[] = (await data.json()).events
	const currentDate = new Date()
	currentDate.setDate(currentDate.getDate() + 1)
	const returnData: EventObject[] = eventData.map(event => {
		return { ...event, date: currentDate }
	})
	eventData.forEach((event, i) => {
		returnData[i].date = new Date(event.date)
	})
	return returnData.filter(event => event.date.getTime() > currentDate.getTime() || isNaN(event.date.getMilliseconds())).sort(sortByDate)
}
