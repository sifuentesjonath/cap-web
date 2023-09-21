import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { LightColors } from '@/containers/styles/colors';
import { media } from '@/scss/media';

export const buttonCloseStyle = `w-24 text-2xl font-medium rounded-3xl h-11 bg-[${LightColors.Primary}]`;
export const buttonConfirmStyle = `w-60 text-2xl font-medium rounded-3xl h-11 bg-[${LightColors.Secondary}]`;

export const ConfirmActionModalContainer = styled(Popup)`
	&-overlay {
		background: rgba(0,0,0,.2);
	}
	&-content {
		background-color: #FBFBFB;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
		border-radius: 16px;
		height: auto;
		width: 44%;
		${media.mobile}{
			width: 80%;
		}
	}
`;

export const ModalContent = styled.div`
	height: 180px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 16px;
	gap: 4px;

	h4, p {
		${FontFamilies.degularFont};
	}
	h4 {
		${TypographyDesktop.H4};
	}
	p {
		${TypographyDesktop.SmallParagraph};
		color: ${LightColors.NeutralGrey};
	}

	.buttons-container {
		width: 100%;
		display: flex;
		justify-content: end;
		gap: 32px;
	}
	${media.mobile}{
		210px;
	}
`;