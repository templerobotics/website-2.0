import { EventObject } from '../CustomTypes'

// https://temple-robotics-db.herokuapp.com/
export async function getEvents(): Promise<EventObject[]> {
	const data = await fetch('https://temple-robotics-db.herokuapp.com/events')
	return await data.json()
}
