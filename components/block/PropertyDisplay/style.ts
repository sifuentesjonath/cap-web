import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 0px 60px;
	@media (min-width: 1700px) {
	}
`;

export const PropertiesGroup = styled.div`
	height: 100%;
	width: 100%;
	margin-bottom: 10px;
`;

export const LocationTitle = styled.h3`
	font-size: 18px;
	font-family: outfit, sans-serif;
	font-weight: 800;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export const PropertiesCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 1rem;
	.card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
`;

export const Separator = styled.hr`
	width: 100%;
	margin-top: 30px;
	border: 1px solid #C1C1C1;
	background : #C1C1C1;
`;