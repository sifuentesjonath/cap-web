import { FC } from 'react'
import { useRouter } from 'next/router';
import Logo from '@components/graphics/Logo';

import {
	MobileCityScreenContainer
} from './style'

interface IMobileCityScreenProps { }
const MobileCityScreen: FC<IMobileCityScreenProps> = ({ children }) => {
	const router = useRouter();
	const handleLogoClick = () => router.replace('/');
	return (
		<MobileCityScreenContainer>
			<div className='screen-container'>
				<div className='mobile-city-container'>
					<div className='logo-position'>
						<a onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
							<Logo />
						</a>
					</div>
					{children}
				</div>
			</div>
		</MobileCityScreenContainer>
	)
}

export default MobileCityScreen