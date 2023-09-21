import { FC } from 'react'
// Component
import AddRental from '../index'
// Style
import styled from 'styled-components'
import { TypographyDesktop } from '@/containers/styles/typography'
import { media } from '@/scss/media'

interface IAddRentalAboutProps { }
const AddRentalAbout: FC<IAddRentalAboutProps> = () => {
	return (
		<AddRental>
			<Paragraph>
				Property management made simple, <strong>for all condo landlords</strong>
			</Paragraph>
		</AddRental>
	)
}

const Paragraph = styled.p`
	${TypographyDesktop.H1}
	font-size: 38px; // Figma design specifies 42px...
	font-weight: 400;
	${media.mobileSmall}{
		font-size: 16px;
		width: 100%;
		line-height: 24px;
	}
	${media.mobile}{
		font-size: 30px;
	}
`;

export default AddRentalAbout