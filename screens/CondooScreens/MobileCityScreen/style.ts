import { media } from '@/scss/media';
import styled from 'styled-components';

const condooImage = `./images/condoo-city-green-cars.png`;

export const MobileCityScreenContainer = styled.div`
	.screen-container {
		height: 100vh;
		width: 100%;
	}

	.left-container {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
	}
	.mobile-city-container {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		height: 100%;
		/* padding-top: 9%; */
		padding: 50px 0 0; 
		background-color: #FFFFFF;

		span, a {
			font-family: outfit, sans-serif;
			font-weight: 400;
			font-size: 20px;
			line-height: 48px;
		}

		${({ isMobile }) => isMobile && 
			`
				width: 100%;
				padding-left: 4%;
				padding-right: 4%;
				padding-top: 10%;
				height: 87vh;
				justify-content: space-between;
			`
		}
		${media.tablet}{
			justify-content: center;
		}
		${media.desktop}{
			justify-content: start;
			/* width: 40%; */
		}
		${media.desktopSmall}{
			justify-content: start;
			/* width: 40%; */
		}
		${media.desktopLarge}{
			justify-content: start;
			/* width: 40%; */
		}
	}
	.logo-position {
		a {
			position: static;
		}
		margin: 0 auto;
	}

	@media (min-width: 1000px) and (min-height: 450px){
  		background-color: #FBFBFB;
		.screen-container {
			overflow: hidden;
			position: absolute;
			background-image: url('${condooImage}');
			background-size: 58% ;
			background-color: #FBFBFB;
			background-position: right center;
			background-repeat: no-repeat;
		}
		.mobile-city-container {
			width: 40%;
		}
	}
`;