import { EventObject } from '../CustomTypes'

// https://temple-robotics-db.herokuapp.com/
export async function getEvents(): Promise<EventObject[]> {
	// Uncomment if a dynamic database is wanted
	// const data = await fetch('https://temple-robotics-db.herokuapp.com/events')
	const data = await fetch('https://templerobotics.github.io/website-2.0/db.json')
	return await data.json()
}
