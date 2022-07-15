/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */
import React from 'react'
import { BsChevronLeft, BsChevronRight, BsFillRecordFill } from 'react-icons/bs'
import $ from 'jquery'
import { Color } from '../../../tools/CustomTypes'
import { ANIMATION_TIME, COLORS } from '../../../tools/Constants'

import './Carousel.css'

export interface SlideInfo {
	image: string
	title: string
	description: string
	color: Color
}

type CarouselProps = {
	slideInfo: SlideInfo[],
	children?: JSX.Element|JSX.Element[]
}

type CarouselSlideProps = {
	slideInfo: SlideInfo,
	id: string,
}

export default class Carousel extends React.Component<CarouselProps, { currentSlide: number }> {

	constructor(props: CarouselProps) {
		super(props)
		this.state = { currentSlide: 0 }
	}

	/**
	 * Render the slide elements
	 * @returns An array of carousel slide elements
	 */
	renderSlides = () => {
		const imageElements: React.ReactElement[] = []
		
		for (let i = 0; i < this.props.slideInfo.length; i++) {
			imageElements.push(<CarouselSlide key={i} id={`slide${i}`} slideInfo={this.props.slideInfo[i]}/>)
		}
		return imageElements
	}

	/**
	 * Render the bottom slide counters
	 */
	renderSlideCount() {
		const counters: React.ReactElement[] = []
		counters.push(<BsFillRecordFill id={`counter${0}`} style={{ color: COLORS.PRIMARY }}/>)
		for (let i = 1; i < this.props.slideInfo.length; i++) {
			counters.push(<BsFillRecordFill id={`counter${i}`}/>)
		}
		return counters
	}

	slideLeft = () => { this.slide(-1) }
	slideRight = () => { this.slide(1) }

	/**
	 * Handle the sliding for the carousel
	 * @param direction -1 to go left one slide and 1 to go right one slide
	 */
	slide = (direction: number) => {
		const animationSpeed = ANIMATION_TIME
		let nextSlide = this.state.currentSlide + direction
		const n = this.props.slideInfo.length
		nextSlide = ((nextSlide % n) + n) % n

		$(`#slide${this.state.currentSlide}`)
			.fadeOut(animationSpeed).end()
		$(`#slide${nextSlide}`)
			.fadeIn(animationSpeed).end()

		$('.carousel-container').css('background', this.props.slideInfo[nextSlide].color)

		$(`#counter${this.state.currentSlide}`)
			.css('color', COLORS.TEXT)
		$(`#counter${nextSlide}`)
			.css('color', COLORS.PRIMARY)
		
		this.setState({ currentSlide: nextSlide })
	}

	render () {
		return (
			<div className='carousel-container' style={{background: this.props.slideInfo[0].color}}>
				<BsChevronLeft size={50} className='chevron-icon' id='chevron-left' onClick={this.slideLeft}/>
				<div id='slide-container'>
					{this.renderSlides()}
				</div>
				<BsChevronRight size={50} className='chevron-icon' id='chevron-right' onClick={this.slideRight}/>
				{/* TODO: Make a slide counter */}
				<div id='slide-count-container'>
					{this.renderSlideCount()}
				</div>
			</div>
		)
	}
}

/**
 * Carousel slide react component to go into the carousel
 */
class CarouselSlide extends React.Component<CarouselSlideProps, never> {
	render () {
		return (
			<div className={'slide'} id={this.props.id}>
				<div className='trim-img'>
					<img className='slide-img' src={this.props.slideInfo.image}/>
				</div>
				<div id='slide-words'>
					<h2>{this.props.slideInfo.title}</h2>
					<p id='slide-description'>{this.props.slideInfo.description}</p>
				</div>
			</div>
		)
	}
}
