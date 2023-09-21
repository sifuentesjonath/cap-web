import { LightColors } from '@/containers/styles/colors';
import { TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import styled from 'styled-components';
import { MainTitleAnimationStyle } from '../utils/animationsAndStyles';
import landingPageSpacing from '../utils/landingPageSpacing';

export const HomeHeroContainer = styled.div`
position: relative;
height: 100vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: ${landingPageSpacing.smallScreen};
background-color: ${LightColors.NeutralWhite};

.hero-content-container {
z-index: 10;
display: flex;
flex-direction: column;
gap: 16px;
}

.condoo-image {
position: absolute;
}

h1 {
	max-width: 340px;
}

@media (max-width: 460px) and (max-height: 640px){
	.condoo-image {
		visibility: hidden;
	}
}

@media (max-width: 410px) {
	flex-direction: column-reverse;
	justify-content: center;
}

@media (max-width: 380px) {
	.condoo-image {
		width: 300px;
	}
	.hero-content-container {
		position: relative;
	}

	height: 80vh;
}

@media (max-width: 500px) {
	.condoo-image {
		width: 300px;
		top: -24px;
		right: 0;
	}
	.hero-content-container {
		position: relative;
	}
	height: 90vh;
}

@media (min-width: 500px) {
	.condoo-image {
		width: 400px;
	}
	.hero-content-container {
		gap: 8px;
	}
}

@media (min-width: 600px) and (max-width: 810px){
	h1 {
		max-width: 360px;
	}
}

@media (min-width: 810px) {
	.condoo-image {
		width: 60vw;
	}
	h1 {
		max-width: 580px;
	}
	p {
		margin: 16px 0 8px;
	}
}

@media (max-height: 450px) and (max-width: 1000px) {
	justify-content: center;
	height: 70vh;
	h1 {
		font-size: 30px;
		max-width: 250px;
		line-height: 34px;
	}
	p {
		font-size: 12px;
	}
	.condoo-image {
		position: static;
		width: 282px;
	}
}

@media (min-width: 450px) and (max-height: 450px){
	height: 80vh;
}

@media (min-width: 1200px) {
	.condoo-image {
		height: 800px;
		width: auto;
		margin-bottom: 10px;
	}
	padding-left: 140px;
	h1 {
		${TypographyDesktop.H0};
	}
	.hero-content-container {
		margin-bottom: 8%;
	}
}

@media (min-width: 1200px) and (max-width: 1300px){
	h1 {
		max-width: 380px;
		font-size: 60px;
	}
}

@media (max-width: 2000px) {
	.condoo-image {
		top: 0;
		right: 0; // Compensate parent component padding
	}
}
@media (min-width: 1300px) {
	.condoo-image {
		top: -15vh !important;
	}
}

@media (min-width: 1800px) {
	justify-content: center;
	padding-left: 140px;
	.hero-content-container {
		width: 440px;
		margin-left: 80px;
	}
	.hero-content-elements-container {
		min-width: 500px;
	}
	padding: ${landingPageSpacing.hugeScreen};
	justify-content: center;
	height: 750px;
	.condoo-image {
		height: 900px;
		position: static;
	}	
}
`;

export const MainTittle = styled.h1`
${MainTitleAnimationStyle};

${TypographyMobile.H0};
@media (max-width: 810px) {
	max-width: 350px;
}

`;

export const SubTittle = styled.p`
${TypographyDesktop.Paragraph}
padding-top:16px;
padding-bottom:16px;
`;