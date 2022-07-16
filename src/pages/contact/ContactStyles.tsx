import styled from 'styled-components'
import { FONT_FAMILY } from '../../tools/Constants'

export default class ContactStyles {
	static readonly ContactContainer = styled.div`
        justify-self: center;
        align-self: center;
        text-align: center;

        & > .contact-description {
            ${FONT_FAMILY.TITLE}
        }

        & > .icons {
            display: flex;
            gap: calc(var(--vh) * .01);
            justify-content: center;
        }
	`
}
