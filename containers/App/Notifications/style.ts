import { FontFamilies } from '@/containers/styles/typography';
import SelectInputStyle from '@/styles/selectInputStyle';
import styled from 'styled-components';

export const NotificationsContainer = styled.div`
	${FontFamilies.outfitFont};

	.notifications-top-panel {
		display: flex;
		width: 100%;
		min-height: 120px;
		background: #F9F9F9;
		padding: 1rem 3rem;
		gap: 24px;
	}	
	.property-filter,
	.name-filter,
	.date-filter {
		/* width: 30%; */
		display: flex;
		flex-direction: column;
		/* justify-content: center; */

		h4 { 
			font-family: outfit, sans-serif;
			font-size: 14px;
			font-weight: 400;
			line-height: 18px;
			padding-bottom: 10px;
		}

	}
	.name-filter {}
	.date-filter {}

	.date-filter .inputs {
		display: flex;
		gap: 8px;
	}

	.select-input {
		${SelectInputStyle};
	}

	.page-container {
		padding: 20px 115px;
	}
	.notifications-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.notifications-container h3 {
		font-weight: 700;
		font-size: 16px;
		line-height: 36px;
		text-transform: uppercase;
	}
`;
