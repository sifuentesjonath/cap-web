import styled, { css } from 'styled-components';
import { media } from '@/scss/media';

const responsiveWidth  = css`
	@media (min-width: 1700px) {
		width: 1200px; 
		margin: 0 auto;
	}
	@media (min-width: 2300px) {
		width: 1600px; 
	}
`

export const UserHomeContainer = styled.div`
height: 100%;
padding-top: 24px;
padding-left: 3.5rem;
padding-right: 3.5rem;
/* overflow: hidden; */
overflow-x: hidden;
${({ isMobile }) => isMobile && 
	`
	padding-top: 5rem;
	padding-left: 0;
	padding-right: 0;
	`
}
`;

export const BaseContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
row-gap: 10px;
${responsiveWidth};
.chart-gray-box {
	width: 100%;
}
`;

export const GrayBox = styled.div`
display: flex;
background-color: #F9F9F9;
border-radius: 16px;
`;

export const WelcomeContainer = styled(GrayBox)`
	min-height: 190px;
	${media.mobileSmallHeight}{
		min-height: 140px;
	}
	padding: 20px 20px;
	.content {
		margin-top: auto;
	}
	a {
		// font-family: degular-text, sans-serif;
		font-weight: 500;
		line-height: 24px;
		text-decoration: underline;
	}

`;

export const GraphContainer = styled(GrayBox)`
position: relative;
flex-direction: column;
height: 100%;
margin-bottom: 58px;
${({ isMobile }) => isMobile && 
	`
	margin: 0;
	padding-bottom: 2.8rem;
	`
}
@media (max-height: 700px) {
	min-height: 96vh;
}
@media (min-width: 1700px) {
	height: 70%;
}
`;

export const GraphPosition = styled.div`
	height: 100%;
	width: 100%;
	${media.desktop}{
		padding-left: 0.75rem;
		padding-right: 0.75rem;
	}
	right: -10px;
`;

export const Title = styled.h1`
	font-family: degular-text, sans-serif;
	font-size: 30px;
	font-style: normal;
	font-weight: 800;
	span {
		text-transform: capitalize;
	}
`;

export const SubTitle = styled.h2`
	font-family: outfit, sans-serif;
	font-size: 20px;
	font-weight: 500;
	line-height: 28px;
`;

export const PaymentsContainer = styled.div`
	background-color: #F8F8F8;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	width: 190px;
	height: 146px;
	border-radius: 8px;
	> * {
		&:first-child {
			margin-left: auto;
			margin-right: auto;
			padding-top: 1.0rem;
			// font-size: 12px;
		}
		&:last-child {
			margin-top: auto;
			margin-left: auto;
			margin-right: auto;
			padding-bottom: 0.4rem;
		}
	}
	${media.desktopSmall}{
		background-color: #FFFFFF;
		min-width: 206px;
		height: 140.72px;
		margin: 23.81px 16px ;
		padding: 18px 16px;
		border-radius: 0;
		> * {
			&:first-child {
				padding-bottom: 23.81px;
				margin: 0;
			}
		}
	}
	${media.desktop}{
		background-color: #FFFFFF;
		min-width: 206px;
		height: 150.72px;
		margin: 23.81px 16px ;
		padding: 18px 16px;
		border-radius: 0;
		> * {
			&:first-child {
				padding-bottom: 23.81px;
				margin: 0;
			}
		}
	}
	${media.desktopLarge}{
		background-color: #FFFFFF;
		min-width: 206px;
		height: 160.72px;
		margin: 23.81px 16px ;
		padding: 18px 16px;
		border-radius: 0;
		> * {
			&:first-child {
				padding-bottom: 23.81px;
				margin: 0;
			}
		}
	}
`;

export const PaymentsToDateText = styled.h2`
	font-weight: 500;
	text-transform: uppercase;
	font-size: 18px;
	${media.desktopSmall}{
		font-size: 12px;
	}
	${media.desktop}{
		font-size: 12px;
	}
	${media.desktopLarge}{
		font-size: 12px;
	}
`;

export const PaymentText = styled.h2`
font-family: degular-text, sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 800;
padding-right: 21px;
`;

export const GroupedButtonsContainer = styled.div`
display: flex;
margin-left: auto;
padding-top: 13.39px;
padding-right: 16px;
${({ isMobile }) => isMobile && 
	`
	width: 100%;
	justify-content: center;
	`
}
`;