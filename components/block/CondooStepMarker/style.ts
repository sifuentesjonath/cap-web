import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop, TypographyMobile } from '@/containers/styles/typography';
import { LightColors } from '@/containers/styles/colors';

export const StepMarkerContainer = styled.div`
	overflow: hidden;
	padding-left: 24px;
	padding-right: 34px;
	height: 64%;
	${media.desktopSmall}{
		padding: 0;
		height: 70%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	${media.desktop}{
		padding: 0;
		height: 70%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	${media.desktopLarge}{
		padding: 0;
		height: 70%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;

export const SubContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4%;
	${media.desktop}{
		width: 435px;
	}
	${media.desktopSmall}{
		width: 435px;
	}
	${media.desktopLarge}{
		width: 435px;
	}
	button {
		width: 158.94px;
		height: 44px;
		${TypographyDesktop.ButtonTitle};
		${FontFamilies.outfitFont};
		font-weight: 500;
		${media.tablet}{
			margin-left: 0;
		}
		${media.desktop}{
			margin-top: 28px;
		}
	}
`;

export const Part = styled.div`
	${FontFamilies.outfitFont};
	${TypographyDesktop.SmallParagraph};
	font-weight: 400;
	${media.desktop}{
		font-size: 14px;
		line-height: 24px;
	}
`;

export const Title = styled.div`
	${TypographyMobile.H1};
	${FontFamilies.outfitFont};
	font-weight: 900;
	${media.desktop}{
		font-size: 36px;
		line-height: 48px;
	}
`;

export const Description = styled.div`
	${TypographyDesktop.Paragraph};
	${FontFamilies.outfitFont};
	color: ${LightColors.DescriptionText};

	${media.desktop}{
		font-size: 16px;
		line-height: 24px;
	}
`;