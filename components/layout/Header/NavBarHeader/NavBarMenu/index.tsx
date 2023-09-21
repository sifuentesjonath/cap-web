import { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import NavBarMenuMobile from '../NavBarMenuMobile';
import styled from 'styled-components';

const NavBarMenu: FC = ({ children }) => {
	const isMobile = useMediaQuery(`(max-width: 1200px)`);
	const isDesktop = !isMobile;
	return (
		<>
			{isDesktop &&
				<NavBarMenuContainer isMobile={isMobile}>
					{children}
				</NavBarMenuContainer>
			}

			{isMobile &&
				<NavBarMenuMobile />
			}
		</>
	)
}

const NavBarMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export default NavBarMenu;