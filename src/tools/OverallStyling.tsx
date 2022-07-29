import { createGlobalStyle } from 'styled-components'
import { COLORS, FONT_FAMILY } from './Constants'
import webFont1 from './fonts/futura-medium-webfont.woff'
import webFont2 from './fonts/futura-medium-webfont.woff2'
import arcaFont1 from './fonts/arcamajora3-heavy-webfont.otf'
import arcaFont2 from './fonts/arcamajora3-heavy-webfont.eot'
import arcaFont3 from './fonts/arcamajora3-heavy-webfont.woff2'
import arcaFont4 from './fonts/arcamajora3-heavy-webfont.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Futura';
        src: url(${webFont1}) format('woff2'),
            url(${webFont2}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Arca';
        src: url(${arcaFont1}) format('otf'),
            url(${arcaFont2}) format('eot'),
            url(${arcaFont3}) format('woff2'),
            url(${arcaFont4}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    p {
        margin: 0;
    }

    /* Any of the links and dropdown title button */
    .styled-drop,
    .styled-link {
        color: ${COLORS.LINK};
        text-decoration: none;
    }

    /* When hovering on any links */
    .styled-drop:hover,
    .styled-link:hover {
        color: ${COLORS.HOVER_TEXT};
    }

    /* Set up the title for the current page (location) */
    .title-container {
        /* For centering items within a grid */
        text-align: center;
        place-self: center;
    }

    /* Set up the title for the current page */
    .title-container>h1 {
        color: ${COLORS.TEXT};
        margin: 0;
    }

    #video-background {
        filter: brightness(50%);
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        z-index: -1;
    }

	body {
		${FONT_FAMILY.BODY}
		background-color: ${COLORS.BACKGROUND};
		color: ${COLORS.TEXT};
	}

	html,
	body {
		height: 100%;
	}
`
