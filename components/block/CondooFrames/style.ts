import { media } from '@/scss/media';
import styled from 'styled-components';

export const FrameContainer = styled.div`
	width: 100%;
	min-height: 415px;
	display: flex;
	gap: 40px;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;

	${media.tablet}{
		gap: 20px;
	}
	${media.mobileSmall}{
		flex-direction: column;
		gap: 20px;
	}
	${media.mobile}{
		flex-direction: column;
		gap: 20px;
	}
`;
