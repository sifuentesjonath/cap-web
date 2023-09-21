import styled from 'styled-components'
import Popup from 'reactjs-popup';
import { FontFamilies } from '@/containers/styles/typography';

//  Modal Style

export const CondooModalContainer = styled(Popup)`
	&-overlay {
		background: rgba(0,0,0,.5);
	}
	&-content {
		background-color: #FBFBFB;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 16px;
		height: 95%;
		width: 74%;
	}
	@media (min-width: 1400px){
		&-content {
			width: 974px;
			height: 603px;
		}
	}
`;

export const ImageContainer = styled.div`
	height: 32%;
	width: 100%;
	position: relative;
	margin-bottom: 1rem;
	border-radius: 16px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	${({ backgroundColor }) => backgroundColor && 
		`background-color: ${backgroundColor};`
	}
	.image-container {
		position: absolute;
		left: 50%;
		top: 35%;
		transform: translate(-50%, 0);
	}
	.image {
		position: relative;
		height: 50px;
		width: 30px;
	}
	.button-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 16;
		width: 3rem;
		height: 3rem;
		--tw-bg-opacity: 1;
   	background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
		border-radius: 9999px;
	}
	.button-close-icon {
		color: white;
		width: 2rem;
		height: 100%;
		margin: auto;
	}
	.title-container {
		position: absolute;
		bottom: 0;
		h3 {
			font-family: ${FontFamilies.degularFont};
			font-weight: 800;
			font-size: 40px;
			padding-left: 20px;
			color: #FFFFFF;
			text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
		}
	}
	@media (max-width: 600px){
		.title-container h3 {
			font-size: 32px;
		}
	}
`;

export const ModalContent = styled.div`
	height: 66%;
	padding: 0 16px 16px;
`

export const Divider = styled.hr`
	border-width: 1.8px;
	border-color: rgb(0 0 0);
	background: rgb(0 0 0);
`;

// Other Styles