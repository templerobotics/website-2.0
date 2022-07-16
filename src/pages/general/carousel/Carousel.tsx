// Third party
import React from 'react'
import $ from 'jquery'
import { BsChevronLeft, BsChevronRight, BsFillRecordFill } from 'react-icons/bs'

// Custom styles
import Styles, { CarouselProps, CarouselSlideProps } from './CarouselStyles'

// General tools
import { ANIMATION_TIME, COLORS } from '../../../tools/Constants'

export default class Carousel extends React.Component<CarouselProps, { currentSlide: number }> {
	constructor(props: CarouselProps) {
		super(props)
		this.state = { currentSlide: 0 }
	}

	/**
	 * Render the slide elements
	 * @returns An array of carousel slide elements
	 */
	renderSlides = (): React.ReactElement[] => {
		const imageElements: React.ReactElement[] = []

		for (let i = 0; i < this.props.slideInfo.length; i++) {
			imageElements.push(<CarouselSlide key={i} id={`slide${i}`} slideInfo={this.props.slideInfo[i]}/>)
		}
		return imageElements
	}

	/**
	 * Render the bottom slide counters
	 */
	renderSlideCount(): React.ReactElement[] {
		const counters: React.ReactElement[] = []
		counters.push(<BsFillRecordFill key={0} id={`counter${0}`} style={{ color: COLORS.PRIMARY }}/>)
		for (let i = 1; i < this.props.slideInfo.length; i++) {
			counters.push(<BsFillRecordFill key={i} id={`counter${i}`}/>)
		}
		return counters
	}

	slideLeft = (): void => { this.slide(-1) }
	slideRight = (): void => { this.slide(1) }

	/**
	 * Handle the sliding for the carousel
	 * @param direction -1 to go left one slide and 1 to go right one slide
	 */
	slide = (direction: number): void => {
		const animationSpeed = ANIMATION_TIME
		let nextSlide = this.state.currentSlide + direction
		const slidesLength = this.props.slideInfo.length
		nextSlide = ((nextSlide % slidesLength) + slidesLength) % slidesLength

		$(`#slide${this.state.currentSlide}`)
			.fadeOut(animationSpeed).end()
		$(`#slide${nextSlide}`)
			.fadeIn(animationSpeed).end()

		$('#carousel-container').css('background', this.props.slideInfo[nextSlide].color)

		$(`#counter${this.state.currentSlide}`)
			.css('color', COLORS.TEXT)
		$(`#counter${nextSlide}`)
			.css('color', COLORS.PRIMARY)

		this.setState({ currentSlide: nextSlide })
	}

	componentDidMount(): void {
		// Hide slides after they render
		$('#slide1').hide()
		$('#slide2').hide()
	}

	render (): React.ReactElement {
		const width = document.documentElement.style.getPropertyValue('--vh')

		return (
			// Id used for jQuery selection
			<Styles.CarouselContainer id='carousel-container' style={{background: this.props.slideInfo[0].color}}>
				<Styles.Chevron as={BsChevronLeft} size={parseFloat(width) * 0.05} onClick={this.slideLeft}/>
				<Styles.SlideContainer>
					{this.renderSlides()}
				</Styles.SlideContainer>
				<Styles.Chevron as={BsChevronRight} size={parseFloat(width) * 0.05} onClick={this.slideRight} right={'true'}/>
				<Styles.SlideCountContainer>
					{this.renderSlideCount()}
				</Styles.SlideCountContainer>
			</Styles.CarouselContainer>
		)
	}
}

/**
 * Carousel slide react component to go into the carousel
 */
class CarouselSlide extends React.Component<CarouselSlideProps, never> {
	render (): React.ReactElement {
		return (
			<Styles.CarouselSlide id={this.props.id}>
				<div className='trim-img'>
					<img className='slide-img' src={this.props.slideInfo.image}/>
				</div>
				<Styles.SlideWords>
					<h2>{this.props.slideInfo.title}</h2>
					<p className='slide-description'>{this.props.slideInfo.description}</p>
					{this.props.slideInfo.otherContent}
				</Styles.SlideWords>
			</Styles.CarouselSlide>
		)
	}
}
