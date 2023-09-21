import styled, { css } from 'styled-components';
import {
	animationFadeInDown,
	animationBounceInDown,
} from '@utils/animations'

// == Animation Types ==

export const animationMainTitle = animationFadeInDown;
export const animationSubTitle = animationFadeInDown;
export const animationMapChip = animationBounceInDown;


// == Animation Styles == 

export const MainTitleAnimationStyle = css`
	animation-duration: 1.5s;
`;

export const SubTitleAnimationStyle = css`
	animation-duration: 1.5s;
`;

export const MapChipsAnimationStyle = css`
	animation-duration: 2.75s;
`;


