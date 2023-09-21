import * as Accordion from "@radix-ui/react-accordion";
import styled, { css, keyframes } from "styled-components";
import { media } from '@/scss/media'
import { LightColors } from "@/containers/styles/colors";
import { FontFamilies, TypographyDesktop } from "@/containers/styles/typography";
// import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
const MinusIcon = './images/minus-icon-close.png'
const PlusIcon = './images/plus-icon-open.png'

// Helper for switching between icons in open/closed views
const getAccordionIcon = (icon) => {
	return `
		background-image: url('${icon}');
		background-position: right;
		background-repeat: no-repeat;
		background-size: 26px;
	`
}

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
	border: 1px solid #E5E5E5;
	border-radius: 8px;
	margin-bottom: 8px;

	padding: 16px 32px ;
	&[data-state="open"] {
		padding: 16px 32px 24px;
	}
`;

export const AccordionHeader = styled(Accordion.Header)`
	font-size: 12px;
`;

export const AccordionTrigger = styled(Accordion.AccordionTrigger)`
	width: 100%;
	text-align: left;
	display: flex;
	justify-content: space-between;
	border-radius: 16px;
	font-family: inherit;
	font-size: 1.2em;

	.content {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 2rem;
		.title {
			text-decoration-line: underline;
			${TypographyDesktop.ParagraphTitle}
			${FontFamilies.outfitFont};
			${media.mobileSmall}{
				line-height: 20px;
			}
		}
	}

	.icon-container {
		width: 2rem;
	}
	.content-icon { // Allow icon to be visible
		height: 28px;
		width: 100%;
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

	&[data-state="closed"] {
		${getAccordionIcon(PlusIcon)}
	}
	&[data-state="open"] { 
		${getAccordionIcon(MinusIcon)}
		h4 {
			color: white;
		}
		.icon {
			background: white;
		}
	}
`;

export const AccordionContent = styled(Accordion.AccordionContent)`
	overflow: hidden;
	font-size: 12.7px;
	text-align: justify;
	${animatedContentClass};
`;

export const AccordionContentItem = styled.div`
	p {
		${TypographyDesktop.Paragraph}
		${FontFamilies.outfitFont};
		line-height: 24px;
	}
	a {
		color: ${LightColors.Secondary};
		text-decoration-line: underline;
		font-weight: 700;
	}
`;
