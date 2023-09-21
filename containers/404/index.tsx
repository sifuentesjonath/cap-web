import { FC } from 'react'
// Components
import MobileCityScreen from "@screens/CondooScreens/MobileCityScreen"
import Link from '@components/element/Link'
import paths from '@utils/paths'
// Style
import styled from 'styled-components'
import { FontFamilies } from '../styles/typography'

interface IPage404Props { }
const Page404: FC<IPage404Props> = () => {
	return (
		<MobileCityScreen>
			<NotFoundContainer>
				<h1>404 Error</h1>
				<p>
					Looks like you’ve taken a wrong turn.
					The page you’re looking for doesn’t exist - but don’t worry,
					use the link below to get back on Cruise Control.
				</p>
				<Link type='button' to={paths.home}>
					Go to homepage
				</Link>
			</NotFoundContainer>
		</MobileCityScreen>
	)
}

const NotFoundContainer = styled.div`
	${FontFamilies.outfitFont};
	h1 {
		font-size: 72px;
		font-weight: 900;
	}
	p {
		font-size: 20px;
		font-weight: 400;
		line-height: 26px;
		text-align: center;
		max-width: 365px;
	}

	display: flex;
	height: 480px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
	
	@media (max-height: 400px) {
		gap: 8px;
	}

	@media (max-width: 410px){
		h2, p {
			padding: 0 12px;
		}
	}
`;

export default Page404