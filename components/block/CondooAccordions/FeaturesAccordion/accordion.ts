import * as Accordion from "@radix-ui/react-accordion";
import styled, { css, keyframes } from "styled-components";
import { media } from '@/scss/media'
import { LightColors } from "@/containers/styles/colors";

const open = keyframes`
	from { height: 0; }
	to { height: var(--radix-accordion-content-height); }
`;

const close = keyframes`
	from { height: var(--radix-accordion-content-height); }
	to { height: 0; }
`;

const animatedContentClass = css`
	overflow: hidden;
	&[data-state="open"] {
		animation: ${open} 300ms ease-out;
	}
	&[data-state="closed"] {
		animation: ${close} 300ms ease-out;
	}
`;

export const RootAccordion = styled(Accordion.Accordion)<{ collapsible: boolean }>`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`;

export const AccordionItem = styled(Accordion.AccordionItem)`
	border-bottom: 1px solid white;
`;

export const AccordionHeader = styled(Accordion.Header)`
	margin-bottom: 4px;
	font-size: 12px;
`;

export const AccordionTrigger = styled(Accordion.AccordionTrigger)`
	width: 100%;
	text-align: left;
	display: flex;
	justify-content: space-between;
	border-radius: 16px;
	padding: 0.9rem;
	background-color: ${LightColors.CondooLightGrey};
	font-family: inherit;
	font-size: 1.2em;

	.content {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.icon { // Allow icon to be visible
		height: 100%;
		width: 10%;
	}
	.chevron {
		width: 30px;
		height: 30px;
		${media.tablet}{
			width: 32px;
			height: 32px;
		}
		color: ${LightColors.Secondary};
	}

	// --shadow-color: crimson;
	&:focus {
		outline: none;
	}
	&[data-disabled] { }

	&[data-state="open"] { 
		background-color: ${LightColors.Secondary};
		label {
			color: white;
		}
		.icon {
			background: white;
		}
		.chevron {
			color: white;
			transform: rotateX(180deg);
		}
	}

`;

export const AccordionContent = styled(Accordion.AccordionContent)`
	overflow: hidden;
	padding: 0.2rem 0.8rem 0.2rem 0.8rem;
	font-size: 12.7px;
	text-align: justify;
	${animatedContentClass};
`;

export const AccordionContentItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media only screen and (min-width: 700px) and (max-width: 1200px){
		.accordion-icon {
			padding: 0 3rem;
			margin: 0 auto;
		}
	}
`;
