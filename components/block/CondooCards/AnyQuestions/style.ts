import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';

export const QuestionContainerPosition = styled.div`
	${media.desktop}{
		height: 287px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
	}
	${media.desktopLarge}{
		height: 287px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
	}
	/* margin-bottom: 26px;
	margin-top: 26px;
	margin-right: 26px; */
	height: 450px;
	width: 100%;
	
	${media.mobileSmall}{
		height: 380px; //NOTE: figma design says it's 287px of height but is too small for image to fit in
		/* margin-left:28px; */
	}
`;

export const QuestionContainer = styled.div`
	${media.desktop}{
		flex-direction: row;
		justify-content: center;
		gap: 120px;
		position: relative;
	}
	${media.desktopLarge}{
		flex-direction: row;
		justify-content: center;
		gap: 120px;
		position: relative;
	}

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 100%;
	
	background: #FBFBFB;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 24px;

	h2 {
		${media.desktop}{
			font-size: 48px;
			line-height: 48px;
		}
		${media.desktopLarge}{
			font-size: 48px;
			line-height: 48px;
		}
		font-family: degular, sans-serif;
		font-weight: 900;
		font-size: 32px;
		line-height: 38px;
	}
	button {
		font-family: outfit, sans-serif;
		width: 178px;
		margin-bottom: 30px;
	}
	.image {
		${media.tablet}{
			// width: 23%;
			// height: 30%;
		}
		${media.desktop}{
			padding: 0;
			padding-top: 8px;
			width: 340px;
			position:relative;
		}
		${media.desktopLarge}{
			padding: 0;
			padding-top: 8px;
			width: 340px;
			position:relative;
		}
		display: flex;
		align-items: center;
		padding-top: 50px;
		width: 200px;
		height: auto;
	}
	.content {
		display: flex;
		justify-content: center;
		h2 {
			${TypographyDesktop.H1};
			${FontFamilies.outfitFont};
			font-size: 42px;
			font-weight: 900;
		}
		button {
			height: 40px;
			font-size: 16px;
		}
	}
	.content-box {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 24px;
	}
	@media (max-width: 810px){
		.content-box {
			max-width: 408px;
			align-items: center;
    		text-align: center;
		}
	}
`;