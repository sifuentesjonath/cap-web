import { FC, useState, useContext } from 'react'
import { useRouter } from 'next/router';
// user service api
import { AuthContext } from '@/contexts/AuthContextProvider';
import { setAuthHeader } from '@/service/customAxios';
import { logoutUser } from '@/service/api';
// Components
import { slide as Menu } from 'react-burger-menu';
import HeaderLinkItems from '@components/block/HeaderLinkItems';
import LinkItem from '@components/block/LinkItem';
import useLogout from '@/hooks/useLogout';

const NavBarMenuMobile: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const LinkItemStyle = `site-navlink text-white font-normal text-xl transition-colors duration-300`;
	const router = useRouter();
	// User
	const { authUser } = useContext(AuthContext);
	const excludeItems = authUser ? ['Pricing', 'About', 'Resources'] : ["Home"];

	const onMenuStateChange = (state) => setIsMenuOpen(state.isOpen);
	const closeMenu = () => setIsMenuOpen(false);

	const onLogout = useLogout()

	const closeMenuAndLogout = () => {
		closeMenu();
		onLogout(router);
	}

	return (
		<div className=' w-full flex justify-end'>
			<div className='absolute left-0 top-0'>
				<Menu
					isOpen={isMenuOpen}
					onStateChange={onMenuStateChange}
					styles={burgerMenuStyles}
				>
					<div style={{ width: '80%' }}>
						<a href={"/"}>
							<img
								src="/images/white-logo.png"
								alt="Condoo logo"
							/>
						</a>

						<div className='mt-5 flex flex-col gap-4'>
							<HeaderLinkItems isMobile exclude={excludeItems}
								onClick={() => closeMenu()}
								itemsClassName={LinkItemStyle}
							/>
							{authUser ?
								<a className={`cursor-pointer ${LinkItemStyle}`} onClick={closeMenuAndLogout}>
									Log out
								</a>
								:
								<>
									<LinkItem onClick={() => closeMenu()} href='/login' className={LinkItemStyle}>
										Log In
									</LinkItem>

									<LinkItem onClick={() => closeMenu()} href='/signup' className={LinkItemStyle}>
										Sign Up
									</LinkItem>
								</>
							}
						</div>
					</div>

					<div style={{ display: 'flex', alignItems: 'end' }} className='h-full mb-10'>
					</div>

				</Menu>
			</div>
		</div>
	)
}

const burgerMenuStyles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		right: '30px',
		top: '20px',
	},
	bmBurgerBars: {
		background: '#000000',
		borderRadius: '16px'
	},
	bmBurgerBarsHover: {
		background: '#a90000'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%',
		width: '100%'
	},
	bmMenu: {
		background: 'rgb(0, 192, 146)',
		padding: '2.5em 0.5em 0',
		fontSize: '1.05em',
		borderColor: '#ffffff'
	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em',
		display: 'flex',
		flexDirection: 'column',
		gap: '1.2rem'
	},
	bmItem: {
		display: 'block',
		fontWeight: 'bold',
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}
}

export default NavBarMenuMobile