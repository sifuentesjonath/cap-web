import { media } from '@/scss/media';
import styled from 'styled-components';
import { ButtonSavePropertyAnimation } from '../utils/animationsAndStyles';

export const PositionButton = styled.div`
	${media.mobileSmall}{
		button {
			width: 130px;
		}
	}
`;

export const LinkUnderline = styled.button`
	font-family: Outfit , sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 29px;
	text-align: right;
	text-decoration-line:underline;
	${ButtonSavePropertyAnimation};
`;