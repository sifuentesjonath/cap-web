import { media } from '@/scss/media';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
	width: 140px;
	min-height: 100%;
	background: #F9F9F9;
`;

export const ContainerPosition = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 16px 60px;
`;

export const LogoPosition = styled.div`
`;

export const MenuSideBarContainer = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	position:relative;
	top:35px;
	${media.mobileSmallHeight}{
		gap: 0;
	}
`;

export const WidgetPosition = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	span {
		font-family: outfit;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const WidgetContainer = styled.div`
	background-color: ${({ isActive }) => isActive ? `#27c69b` : 'white'};
	padding: 8px;
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;