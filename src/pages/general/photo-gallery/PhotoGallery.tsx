// Third party
import React from 'react'
import $ from 'jquery'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

// Custom styles
import Styles, { PhotoGalleryProps, GallerySlideProps } from './PhotoGalleryStyles'

// General tools
import { ANIMATION_TIME } from '../../../tools/Constants'

export default class PhotoGallery extends React.Component<PhotoGalleryProps, {currentSlide: number}> {
	constructor(props: PhotoGalleryProps) {
		super(props)
		this.state = {
			currentSlide: 0
		}
	}

	/** Render the slides for the gallery */
	renderSlide = (): React.ReactElement[] => {
		const slideElements: React.ReactElement[] = []
		for (let i = 0; i < Math.ceil(this.props.galleryInfo.length / 3); i++) {
			const photoArray = this.props.galleryInfo.slice(i * 3, (i + 1) * 3)
			slideElements.push(<GallerySlide key={i} id={`slide${i}`} galleryInfo={photoArray}/>)
		}
		return slideElements
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
		const slidesLength = Math.ceil(this.props.galleryInfo.length / 3)
		nextSlide = ((nextSlide % slidesLength) + slidesLength) % slidesLength

		$(`#slide${this.state.currentSlide}`)
			.fadeOut(animationSpeed).end()
		$(`#slide${nextSlide}`)
			.fadeIn(animationSpeed).end()

		this.setState({ currentSlide: nextSlide })
	}

	render(): React.ReactElement {
		const gridColumns = '100% '.repeat(Math.ceil(this.props.galleryInfo.length / 3))
		const width = document.documentElement.style.getPropertyValue('--vh')

		return (
			<Styles.GalleryContainer id={this.props.id}>
				<Styles.Chevron as={BsChevronLeft} size={parseFloat(width) * 0.05} onClick={this.slideLeft}/>
				<Styles.SlideContainer gridColumns={gridColumns}>
					{this.renderSlide()}
				</Styles.SlideContainer>
				<Styles.Chevron as={BsChevronRight} size={parseFloat(width) * 0.05} onClick={this.slideRight}/>
			</Styles.GalleryContainer>
		)
	}
}

/**
 * Gallery slide react component to go into the photo gallery
 */
class GallerySlide extends React.Component<GallerySlideProps, never> {
	renderImages = (): React.ReactElement[] => {
		const slideImages: React.ReactElement[] = []
		this.props.galleryInfo.forEach((gallery, i) => {
			slideImages.push(
				<Styles.ImageContainer key={i}>
					<div className='gallery-image-container'>
						<img src={gallery.image}/>
					</div>
					<h3>{gallery.title}</h3>
					<p>{gallery.description}</p>
				</Styles.ImageContainer>
			)
		})
		return slideImages
	}

	render (): React.ReactElement {
		return (
			<Styles.Slide id={this.props.id}>
				{this.renderImages()}
			</Styles.Slide>
		)
	}
}
