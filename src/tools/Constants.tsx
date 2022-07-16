import { Color } from './CustomTypes'

export const MOBILE_SIZE = 767

export const ANIMATION_TIME = '500ms'

export class COLORS {
	static readonly PRIMARY: Color = '#9D2235'
	static readonly SECONDARY: Color = '#343a3f'
	static readonly THIRD: Color = '#52575b'
	static readonly SELECTED: Color = '#801c29'
	static readonly BACKGROUND: Color = '#9D2235'
	static readonly TEXT: Color = '#FFFFFF'
	static readonly HOVER_TEXT: Color = '#d1d1d1'
	static readonly LINK: Color = '#FFFFFF'
	static readonly BLUE: Color = '#516a8a'
	static readonly GREEN: Color = '#618a51'
	static readonly PURPLE: Color = '#75518a'
	static readonly SECONDARY_SCROLLBAR: Color = '#9d22357f'
}

export const PHOTO_GALLERY = [
	require('../assets/pics/photo-gallery/club-filing.jpg'),
	require('../assets/pics/photo-gallery/boxbot.png'),
	require('../assets/pics/photo-gallery/ethernet-screwup.jpg'),
	require('../assets/pics/photo-gallery/botshop.png'),
	require('../assets/pics/photo-gallery/rmc-2011.jpg'),
	require('../assets/pics/photo-gallery/rmc-2010.png'),
	require('../assets/pics/photo-gallery/rmc-2009.png')
]

export class CSS_STYLES {

	/**
	 * @brief Make sure the scrollbar is visible in overflow
	 * @param path Path to where the scrollbar should be applied
	 * @param color Color of the scrollbar
	 * @returns The string for the css property
	 */
	static showScrollbar(path = '', color: Color = '#0000007f'): string {
		return `
			${path}::-webkit-scrollbar {
				-webkit-appearance: none;
				width: 7px;
			}

			${path}::-webkit-scrollbar-thumb {
				border-radius: 4px;
				background-color: ${color ?? 'rgba(0, 0, 0, .5)'};
				box-shadow: 0 0 1px rgba(255, 255, 255, .5);
				border: 1px solid rgba(255, 255, 255, .5);
			}
		`
	}
}

export class FONT_FAMILY {
	static readonly PAGE_TITLE = `
		margin: 0;
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 500;
		font-size: calc(var(--vh) * .1);
		letter-spacing: 1px;
		line-height: 1.1;
		margin-left: 10%;
		margin-right: 10%;
	`

	static readonly TITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .05);
		letter-spacing: 1px;
		line-height: 1.1;
	`

	static readonly SECONDARY_TITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .04);
		letter-spacing: 1px;
		line-height: 1.1;
	`

	static readonly SUBTITLE = `
		font-family: 'Arca', 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
		font-weight: 200;
		font-size: calc(var(--vh) * .02);
		letter-spacing: 1px;
		line-height: 1.1;
	`

	static readonly BODY = `
		font-family: 'Futura', 'Helvetica', 'Arial', 'sans-serif';
		font-size: calc(var(--vh) * .012);
		line-height: 1.5;
		margin-bottom: 20px;
	`
}
