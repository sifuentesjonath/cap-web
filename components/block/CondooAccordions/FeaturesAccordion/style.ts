import styled, { keyframes, css } from 'styled-components';
import { ChevronDownIcon } from '@heroicons/react/solid';

// Animations

const slideDown = keyframes`
	from {
		height: 0;
	}
	to {
		height: 'var(--radix-accordion-content-height)';
	}
`;

const slideUp = keyframes`
	from {
		height: 'var(--radix-accordion-content-height)';
	}
	to {
		height: 0;
	}
`;

const animatedContentClass = css`
	&[data-state="open"] {
		animation: ${open} 300ms ease-out;
	}
	&[data-state="closed"] {
		animation: ${close} 300ms ease-out;
	}
`;
// Chevron
export const StyledChevron = styled(ChevronDownIcon)`
	height: 1.5rem;
	width: 1.5rem;
	&:[data-state=open] { 
		transform: rotate(180deg);
		transition: transform 300ms;
	};
`;