import { FC } from 'react'
// Component
import Image from 'next/image';
// Style / Icon
import interrogation from '@/public/images/interrogation.png'
import { dimensions, media } from '@/scss/media';
import styled from 'styled-components'
import { ImagePostion, Information, StyledPopup } from './style';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';
import { useMediaQuery } from '@react-hook/media-query';

interface IWhyInfoProps {
	whyMessage?: string;
	whyNeedMessage?: string;
	isRight?: boolean;

}


const WhyInfoButton: FC<IWhyInfoProps> = ({ whyMessage, whyNeedMessage, isRight }) => {
	const isMobile = useMediaQuery(`(${dimensions.mobile})`);
	const isDesktop = !isMobile;
	const position: string = isRight ? '78%' : '-70%';
	return (
		<WhyInfoContainer>
			{/* {isMobile && */}
			<div className='mobile'>
				<div className='why-info'>
					<ImagePostion href="#" >
						<StyledPopup
							closeOnDocumentClick
							position={'left'}
							trigger={open => (
								<button type='button' className="button">
									<Image src={interrogation} />
								</button>
							)}
						>
							<span>{whyMessage}</span>
						</StyledPopup>
					</ImagePostion>
					<Information>{whyNeedMessage}</Information>
				</div>
			</div>
			{/* } */}

			{/* {isDesktop &&
				<div className='desktop'>
					<MessagePopup position={position}>
						<div className='interrogation'>
							<Image src={interrogation} />
							<span className='message'>{whyMessage}</span>
						</div>
						<span>{whyNeedMessage}</span>

					</MessagePopup>
				</div>
			} */}

		</WhyInfoContainer>
	)
}

const MessagePopup = styled.div`
	display: flex;
	gap: 8px;
	.message {
		${TypographyDesktop.SmallParagraph};
		${FontFamilies.outfitFont};
		display: none;
		visibility: hidden;
	}
	.interrogation {
		&:hover {
			.message {
				border-radius: 16px;
				padding: 15px 20px 16px 21px;
				box-shadow: 0px 0px 16px rgba(63, 63, 63, 0.1);
				display: block;
				visibility: visible;
				position: absolute;
				left: ${({ position }) => position};
				bottom: -90%;
				width: 290px;
				background-color: white;
			}
		}
	}
`;

const WhyInfoContainer = styled.div`
	position: relative;
	span {
		${TypographyDesktop.ButtonTitle};
		${FontFamilies.outfitFont};
		font-weight: 500;
	}
	.why-info {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		// display: block;
		// visibility: visible;
	}
	.mobile {
		padding-left: 16px;
	}
	${media.desktop}{
		/* .mobile {
			display: none;
			visibility: hidden;
		} */

		.desktop {
			display: flex;
			gap: 8px;
		}
	}
	
`;

export default WhyInfoButton