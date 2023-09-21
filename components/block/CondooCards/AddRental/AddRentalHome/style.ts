import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';

export const MainTittle = styled.h1`
	${TypographyMobile.H0Small}
	font-size: 36px;
	line-height: 42px;

	${media.desktop && media.desktopLarge}{
		padding-bottom: 12px;
	}
`

export const SubContainer = styled.div`
	${media.mobile}{
		width:100%;
	}
`

export const SubTittle = styled.p`
	${TypographyDesktop.Paragraph}
	${media.tablet} { 
		${TypographyMobile.H2Normal} 
		line-height: 28px;
	}
	${media.desktop && media.desktopLarge}{ 
		${TypographyDesktop.Paragraph}
		line-height: 28px;
		width: 380px;
	}
`