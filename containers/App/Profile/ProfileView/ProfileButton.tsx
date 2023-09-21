import { FC } from 'react'
import Button from '@components/block/Button';
// Image // Icons
import { LogoutIcon } from '@heroicons/react/outline';
import { useMediaQuery } from '@react-hook/media-query';
import { dimensions } from '@/scss/media';

interface IProfileButtonProps {
	onLogout: () => void;
}
const ProfileButton:FC<IProfileButtonProps> = props => {
	const { onLogout } = props;
	const isDesktop = useMediaQuery(`(${dimensions.desktopSmall})`);
	return (
		<>
			{isDesktop ?
				<Button onClick={onLogout}
					bgColor='#000000'
					className='button'
				>
					<LogoutIcon className='w-7 h-7 text-red-600' />
					Logout
				</Button>
				: null
			}
		</>
	)
}

export default ProfileButton