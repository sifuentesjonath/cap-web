import styled, { css } from 'styled-components';

const responsiveWidth  = css`
	@media (min-width: 1700px) {
		width: 1200px; 
		margin: 0 auto;
	}
	@media (min-width: 2300px) {
		width: 1600px; 
	}
`

export const TitleAndButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32px 32px 24px 50px;
	${responsiveWidth};
	@media (max-width: 1000px){
		margin-top: 5rem;
	}
`;



export const TitlePosition = styled.div`
	position: relative;
	width: 700px;
	height: 48px;
	left: 30px;
	top: 32px;
	margin-bottom: 60px;
`


export const Title = styled.h2`
	font-family: Degular, sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 48px;
	@media (min-width: 1700px) {
	}
`


export const ButtonsPosition = styled.div`
	position: absolute;
	width: 350px;
	top: 35px;
	right: 45px;
	display: inline-flex;
	justify-content : space-between;
`


export const PropertyCardsContainer = styled.div`
	width: 100%;
	height: auto;
	padding-top: 10px;
	overflow-y: auto;
	${responsiveWidth};
`;
