import React from 'react'
import PropTypes from 'prop-types'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import './Carousel.css'

export default class Carousel extends React.Component<{}, {slides: string, currentSlide: number}> {
	static propTypes: { images: PropTypes.Requireable<string[]> }
	constructor(props: any) {
		super(props)
		this.state = { 
			slides: props.images,
			currentSlide: 0
		}
	}

	slideDirection = (direction: number, event: Event) => {
		// Move slides left
		let currSlide = this.state.currentSlide + direction
		const slideElement1: HTMLElement = document.querySelector(`#slide${(this.state.currentSlide)}`)!
		if (currSlide > this.state.slides.length - 1) {
			currSlide = 0
		}
		if (currSlide < 0) {
			currSlide = this.state.slides.length - 1
		}
		const slideElement2: HTMLElement = document.querySelector(`#slide${(currSlide)}`)!
		slideElement1.style.setProperty('display', 'none', 'important')
		slideElement2.style.setProperty('display', 'inline', 'important')
		this.setState({ currentSlide: currSlide })
		event.preventDefault()
	}

	slideLeft = (event: Event) => { this.slideDirection(1, event) }
	slideRight = (event: Event) => { this.slideDirection(-1, event) }

	// Render the slides one at a time
	renderSlides = () => {
		var indents: React.ReactElement[] = []
		indents.push(<img className='slide' id={'slide0'} key={0} src={this.state.slides[0]}/>)
		for (var i = 1; i < this.state.slides.length; i++) {
			indents.push(<img className='slide' id={`slide${i}`} key={i} src={this.state.slides[i]} style={{display: 'none'}}/>)
		}
		return indents
	}

	render () {
		return (
			<div className='carousel-container'>
				<BsChevronLeft className='chevron-icon' id='chevron-left' onClick={() => this.slideLeft}/>
				<div className='trim-img'>
					{this.renderSlides()}
				</div>
				<BsChevronRight className='chevron-icon' id='chevron-right' onClick={() => this.slideRight}/>
				<p className='slide-description'>items</p>
			</div>
		)
	}
}

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string.isRequired)
}
