import styled from 'styled-components'
import { CSS_STYLES, FONT_FAMILY, PHOTO_GALLERY } from '../../tools/Constants'
import { GalleryImage } from '../general/photo-gallery/PhotoGalleryStyles'
import spaceBackground from '../../assets/pics/outreach/space-background.jpg'

export const GALLERY_INFO: GalleryImage[] = [
	{ image: PHOTO_GALLERY[0], title: '2018', description: 'Our ME\'s filing away to make sure everything fits perfectly.' },
	{ image: PHOTO_GALLERY[1], title: '2018', description: 'BoxBot, of course we still love you.' },
	{ image: PHOTO_GALLERY[2], title: '2017', description: `Our team plugged the ethernet cable into the wrong port. 
		Good thing duct tape fixes everything!` },
	{ image: PHOTO_GALLERY[3], title: '2017', description: `Our hotel didnt like us working on the robot in our rooms. 
		I guess we'll just use our vans.` },
	{ image: PHOTO_GALLERY[4], title: '2011', description: 'The year our team autonomus was so good they had to change the rules' },
	{ image: PHOTO_GALLERY[5], title: '2010', description: 'Scoops was born' },
	{ image: PHOTO_GALLERY[6], title: '2009', description: 'Our first team at the very first Robotics Mining Competition' }
]

export default class RoboticMiningStyles {
	static readonly RmcContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 
			calc(var(--vh) * .4)    /* Intro heading */
			calc(var(--vh) * .4)    /* Robot and competition description */
			calc(var(--vh) * 1.6)   /* Outreach gallery and photo gallery */
			max(calc(var(--vh) * .15), 200px);  /* Contact info */
		justify-content: center;
		align-content: center;
	`

	static readonly TitleContainer = styled.div`
		& > .title {
			${FONT_FAMILY.PAGE_TITLE}
			font-size: calc(var(--vh) * .07);
		}
	`

	static readonly RmcDescription = styled.div`
		height: 100%;
		background: linear-gradient(200deg, var(--color-primary), #996b72, var(--color-primary));
		text-align: center;
		row-gap: 5%;

		// New
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		& > div > div {
			margin-bottom: calc(var(--vh) * .08);
		}

		& > div > p {
			margin: auto;
			padding-left: calc(var(--vh) * .1);
			padding-right: calc(var(--vh) * .1);
			overflow-y: auto;
			height: calc(var(--vh) * .1);
		}

		& > div > h2 {
			${FONT_FAMILY.TITLE}
			margin-top: calc(var(--vh) * .08);
			margin-bottom: 0;
		}

		${CSS_STYLES.showScrollbar('& > div > p')}
	`

	static readonly OutreachGallery = styled.div`
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: calc(var(--vh) * .1) repeat(3, minmax(0, 1fr));
		row-gap: 4%;
		column-gap: 4%;
		justify-items: center;
		align-items: center;
		text-align: center;

		& > h2 {
			${FONT_FAMILY.TITLE}
			grid-column-start: 1;
			grid-column-end: 3;
			text-align: center;
			margin: 0;
		}

		& > .outreach-image-container {
			height: 100%;
			overflow: hidden;
		}

		& > .outreach-image-container > img,
		& > .outreach-image-container > video {
			width:100%;
			min-height: 100%;
			object-fit: cover;
		}

		& > .outreach-slide > h2 {
			${FONT_FAMILY.SECONDARY_TITLE}
			margin-bottom: 5%;
		}

		& > .outreach-slide > p {
			padding-left: 20%;
			padding-right: 20%;
		}
	`

	static readonly SpaceBackground = styled.div`
		background-image: url(${spaceBackground});
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: calc(var(--vh) * 1.2) calc(var(--vh) * 0.4);
		justify-items: center;
		align-items: center;
	`
}
