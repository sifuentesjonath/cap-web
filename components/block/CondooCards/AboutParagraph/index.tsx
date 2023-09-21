import { FC } from 'react'
import ExplanationParagraph from '@components/block/CondooCards/ReusableExplanationParagraph'

import PageTexts from './page_texts.json'
import Link from '@components/element/Link'
import paths from '@utils/paths'

import styled from 'styled-components'
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography'
import { LightColors } from '@/containers/styles/colors'
import { media } from '@/scss/media'


interface IAboutParagraphProps {
	page?: 'about';
}
const AboutParagraph: FC<IAboutParagraphProps> = ({ page = 'about' }) => {
	const { title, body, button } = PageTexts[page]
	return (
		<AboutParagraphContainer>
			<ExplanationParagraph title={title}>
				<p>
					{`${body[0]} `}
					<strong>{`${body[1]} `}</strong>
					{`${body[2]}`}
				</p>
			</ExplanationParagraph>
			<Link type='button' to={paths.signUp}>{button}</Link>
		</AboutParagraphContainer>
	)
}

const GreyBoxStyle = `
	background-color: ${LightColors.CondooLightGrey};
	border-radius: 16px;
	padding: 80px 180px;
	margin: 16px;
	margin-bottom: 88px;
	
	${media.mobileSmall}{
		padding: 10px 8px;
	}
	${media.mobile}{
		padding: 10px 20px;
	}
	${media.tablet}{
		padding: 20px 60px;
	}
	${media.desktopLarge}{
		padding: 80px 232px;
	}
`
const AboutParagraphContainer = styled.div`
	${GreyBoxStyle}
	h2 {
		${TypographyDesktop.H1};
		font-size: 36px;
		${FontFamilies.degularFont};
		font-weight: 800;
		${media.mobileSmall}{
			font-size: 30px;
		}
		${media.mobile}{
			font-size: 30px;
		}
	}
	p {
		margin: 16px 0;
	}
	button {
		width: 158px;
	}
`;

export default AboutParagraph