import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { media } from '@/scss/media';
import styled from 'styled-components';
const tabletAppleSet = './images/tablet-apple-set.png';

export const TabletPhonesFrameContainer = styled.div`
	width: 100%;
	min-height: 415px;
	max-height: 760px;
	display: flex;
	gap: 40px;
	justify-content: center;
	align-items: center;
`;

export const TabletPhonesImage = styled.div`
	display: flex;
	min-height: 380px;
	min-width: 424px;	

	background-image: url('${tabletAppleSet}');
	background-size: auto 340px;
	background-repeat: no-repeat;
	${media.mobileSmall}{
		background-size: auto 220px;
		background-position: center;
	}
	${media.mobile}{
		background-size: auto 280px;
		background-position: center;
	}
	${media.desktop}{
		min-width: 490px;	
		background-size: auto 390px;
	}
	${media.desktopLarge}{
		min-width: 490px;	
		background-size: auto 390px;
	}
`;

export const FrameContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 370px;
	${TypographyDesktop.Paragraph}


	p {
		${FontFamilies.outfitFont}
		font-weight: 400;
	}
	button {
		font-weight: 500;
		height: 44px;
		width: 158px;
	}

	${media.mobileSmall}{
		width: 100%;
	}
	${media.mobile}{
		width: 100%;
	}
	${media.desktop}{
		margin-right: 80px;
	}
	${media.desktopLarge}{
		margin-right: 80px;
	}
`;

export const MainTitle = styled.h2`
	${FontFamilies.outfitFont};
	${TypographyDesktop.H1};
	font-size: 38px;
	font-weight: 600;
	max-width: 270px;
`;