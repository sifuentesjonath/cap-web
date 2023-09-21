import { FontFamilies } from '@/containers/styles/typography';
import styled from 'styled-components';

export const TermsOfUseContainer = styled.div`
	${FontFamilies.outfitFont};
	height: 100%;
	overflow-y: auto;
	/* padding: 24px; */
	padding: 24px 0px;
	max-width: 620px;
	ol {
		list-style: decimal;
		li:last-child {
			margin-bottom: 16px;
		}
	}
	li {
		font-weight: 300;
		font-style: italic;
		display: list-item;
		list-style-position: inside;
	}

	.terms-header{
		span {
			display: block;
		}
		h1 {
			${FontFamilies.outfitFont};
			font-weight: 900;
			font-size: 32px;
			text-align: center;
			margin-bottom: 16px;
		}
	}

	.terms-header-centered{
		span {
			display: block;
			text-align: center;
		}
		.url {
			font-weight: 600;
		}
	}
	
	.terms-spaced-span {
		margin-bottom: 16px;
	}
`;

export const ContentBlock = styled.div`
	h4, h5 {
		font-weight: bold;
		text-decoration: underline;
		margin-bottom: 8px;
	}
	h5 {
		font-weight: 600;
	}
	p {
		margin-bottom: 16px;
	}
	.advanced-ol {
		li {
			span {
				text-decoration: underline;
			}
			p {
				padding-left: 16px;
				/* padding-right: 16px; */
				margin: 0;
			}
			ol {
				padding-left: 16px;
				list-style: lower-alpha;
				span {
					text-decoration: none;
				}
			}
		}
	}
`;

// Other components

export const ContactInfoContainer = styled.div`
	span {
		display: block;
	}
	span:last-child {
		margin-bottom: 16px;
	}
`;