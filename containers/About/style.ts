import { media } from '@/scss/media';
import styled from 'styled-components';
import { FontFamilies, TypographyDesktop } from '../styles/typography';

export const AboutContainer = styled.div`
	padding-top: 24px;
	padding-left: 48px;
	padding-right: 48px;
	overflow-x: hidden;
`;

export const AboutUsTitle = styled.h1`
	${TypographyDesktop.H1}
	${FontFamilies.degularFont};
	font-weight: 800;
	text-align: center;
`;

export const FAQAccordionContainer = styled.div`
	padding: 0 140px;
	margin-bottom: 97px;
	${media.desktopLarge}{
		padding: 0 200px;
	}
	${media.mobileSmall}{
		padding: 0 8px;
	}
	${media.mobile}{
		padding: 0 8px;
	}
	${media.tablet}{
		padding: 0 60px;
	}
	.faqs {
		${TypographyDesktop.H1}
		${FontFamilies.degularFont};
		font-weight: 800;
		margin-bottom: 24px;
	}
	
`;