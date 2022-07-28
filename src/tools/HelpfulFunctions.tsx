import { useEffect, useState } from 'react'

import debounce from 'lodash.debounce'
import { getEvents } from './services/getEvents'
import { EventObject } from './CustomTypes'

export const scrollToTop = (): void =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const getWindowWidth = (): {width: number} => {
	const [dimensions, setWidth] = useState({ width: window.innerWidth })

	useEffect(() => {
		const handler = debounce(() => {
			setWidth({ width: window.innerWidth })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return dimensions
}

export const getScrollY = (): {scroll: number} => {
	const [scroll, setScroll] = useState({ scroll: window.scrollY })

	useEffect(() => {
		const handler = debounce(() => {
			setScroll({ scroll: window.scrollY })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return scroll
}

export const setVariableCssVars = (): void => {
	useEffect(() => {
		const setVh = debounce(() => {
			document.documentElement.style.setProperty('--vh', `${window.innerWidth}px`)
		}, 10)

		window.addEventListener('resize', setVh)

		return () => {
			window.removeEventListener('resize', setVh)
		}
	})
}


function getWindowDimensions(): {width: number, height: number} {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

export default function useWindowDimensions(): {width: number, height: number} {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		function handleResize(): void {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}

export function getEventsFromDatabase(): EventObject[] {
	const [events, setList] = useState<EventObject[]>([])

	useEffect((): () => void  => {
		let mounted = true
		getEvents().then((events: EventObject[]) => {
			if(mounted) {
				setList(events)
			}
		})
		return () => mounted = false
	}, [])

	return events
}
