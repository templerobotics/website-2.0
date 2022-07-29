export type Color = `#${string}`

export interface Table<T = object> {
	rows: T[]
}

export type EventObject = {
	title: string,
	date: Date,
	location: string,
	description: string
}
