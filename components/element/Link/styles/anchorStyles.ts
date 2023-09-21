import { LightColors } from '@/containers/styles/colors';
import { FontFamilies } from '@/containers/styles/typography';
import styled, { css } from 'styled-components';

export const NormalAnchor = styled.a``;

const disableButton = css`
	background-color: lightgrey !important;
	cursor: not-allowed;
	transform: unset;
	:hover {
		box-shadow: none !important;
	}
`;
export const ButtonAnchor = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${LightColors.Secondary};
  	transition: all ease .5s;
	border-radius: 9999px;
	height: 45px;
	width: 160px;

  	color: white;
	${FontFamilies.outfitFont};
	font-weight: 500;

	font-size: 1.125rem;
	line-height: 1.75rem;
	&:hover {
		transform: translateY(-5px);
		box-shadow: 0px 12px 13px 3px rgb(159 159 159 / 75%) !important;
	}
	${({ disabled }) => disabled ? disableButton : ''};
`;