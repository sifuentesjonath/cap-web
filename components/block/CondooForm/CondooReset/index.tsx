import ResetPasswordForm from './ResetPasswordForm'
import { FormPosition} from '../style'
import { media } from '@/scss/media';

import styled from 'styled-components';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

const CondooLogin = () => {
	return (
		<ResetContainer>
			<>
				<h1>Password Reset</h1>
				<Description>
					Please enter the email address for your Condoo account. 
					We will send you instructions on how to reset your password.
				</Description>
			</>

			<FormPosition>
				<ResetPasswordForm />
			</FormPosition>
		</ResetContainer>
	)
}

const Description = styled.div`
	${FontFamilies.outfitFont};
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	margin-top: 1rem;
	margin-bottom: 1rem;
	width: 85%;
	${media.mobile}{
		width: 90%;
	}
	${media.desktop}{
		margin-top: 41px;
		margin-bottom: 61px;
	}
	${media.desktopLarge}{
		margin-top: 41px;
		margin-bottom: 61px;
	}
`;

const ResetContainer = styled.div`
	display: flex;
	${media.mobile}{
		height: 100%;
	}
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	h1 {
		${TypographyDesktop.H1};
		${FontFamilies.outfitFont};
		font-size: 48px;
		font-weight: 900;
		${media.desktop}{
			font-size: 48px;
			line-height: 48px;
		}
		${media.desktopLarge}{
			font-size: 48px;
			line-height: 48px;
		}
	}
`;

export default CondooLogin