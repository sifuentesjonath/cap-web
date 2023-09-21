import { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useMediaQuery } from '@react-hook/media-query';
// Components
import SideBarHeader from './SideBarHeader';
import NavBarHeader from '@components/layout/Header/NavBarHeader';
import NavBarMenuMobile from '@components/layout/Header/NavBarHeader/NavBarMenuMobile';
// Icon
import { ChevronDownIcon } from '@heroicons/react/solid';
import { dimensions } from '@/scss/media';


interface IAppHeaderProps {
}
const AppHeader:FC<IAppHeaderProps> = ({}) => {
	const isDesktop = useMediaQuery(`(${dimensions.desktopSmall})`);
	const isMobile = !isDesktop;
	return (
		<>
			{isDesktop && <SideBarHeader />}

			{isMobile &&
				<NavBarHeader>
					<NavBarMenuMobile />
				</NavBarHeader>
			}
		</>
	)
}


export default AppHeader