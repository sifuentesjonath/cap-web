import { FC } from 'react'
import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

interface IInputHolderProps {
	placeHolder?: string,
	isMobile?: boolean;
}
const InputHolder: FC<IInputHolderProps> = ({ placeHolder, children }) => {
	return (
		<InputHolderContainer>
			{placeHolder &&
				<Label>{placeHolder}</Label>
			}
			{children}
		</InputHolderContainer>
	)
}

const InputHolderContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	.PhoneInputInput {
		font-family: outfit,sans-serif;
		width: 100%;
		height: 52px;
		border: 1px solid #E1E1E1;
		border-radius: 8px;
		box-shadow: unset;
		background-color: white;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 0px 16px;
		min-height: 35px;
		&:focus {
			box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
					0px 10px 20px -15px rgba(22, 23, 24, 0.2);
		}
	}
`;

const Label = styled.span`
	${TypographyDesktop.InputLabel};
	${FontFamilies.outfitFont};
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
`;

export default InputHolder