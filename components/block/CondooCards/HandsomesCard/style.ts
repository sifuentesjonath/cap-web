import { LightColors } from '@/containers/styles/colors';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';

// Handsomes Card

const CardsGridContainer = `.cards-grid-container {
	display: grid;
	grid-template-columns: repeat(2, 27rem);
	width: 100%;
	grid-gap: 16px;

	justify-content: space-evenly;
	justify-items: center;
	align-content: space-evenly;
	align-items: center;
	${media.mobileSmall}{
		grid-template-columns: repeat(1, 27rem);
	}
	${media.mobile}{
		grid-template-columns: repeat(1, 27rem);
	}
}`;

export const CardsContainer = styled.div`
	${CardsGridContainer}
	background-color: ${LightColors.CondooLightGrey};
	border-radius: 24px;
	padding: 80px 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	.cards-content {
		width: 100%;
	}
	.careers{
		position: absolute;
		right: 0;
		top: 0;
		margin: 16px 24px;
		${FontFamilies.outfitFont};
		font-size: 18px;
		font-weight: 500;
	}
	.our-team {
		align-self: start;
		${TypographyDesktop.H1}
		${FontFamilies.degularFont};
		font-weight: 800;
		margin-bottom: 24px;
	}
	/* @media (max-width: 330px) { } */
	@media (max-width: 810px){
		.our-team {
			text-align: center;
		}
	}

`;

// HandsomeCard

const CardContainerStyle = `
	display: flex;
	flex-direction: column;
	height: 380px;
	// max-height: 350px;
	width: 320px;
	border-radius: 12px;
	background: ${LightColors.NeutralWhite};
	box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
	${CardContainerStyle}
	.image-container {
		height: 320px;
		mix-blend-mode: luminosity;
	}
	/* .handsome-image { } */
	.content {
		padding: 8px 8px;
		label {
			${TypographyDesktop.BoldParagraph}
			${FontFamilies.degularFont}
		}
	}
`;