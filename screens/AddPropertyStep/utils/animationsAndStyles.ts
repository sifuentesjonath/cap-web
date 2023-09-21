import styled, { css } from 'styled-components';
import { animationPulse } from '@utils/animations'

// == Animation Types ==
export const animationButtonSaveProperty = animationPulse;

// == Animation Styles == 
export const ButtonSavePropertyAnimation = css`
	animation-duration: 1s;
	animation-delay: 2s;
	animation-iteration-count: infinite;
`;

