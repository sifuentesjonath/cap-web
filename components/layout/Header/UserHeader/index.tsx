import { useRouter } from 'next/router';
import { FC } from 'react'
// Components
import { Menu } from '@headlessui/react';
import Link from '@components/element/Link'
import Button from '@components/block/Button';
import HeaderLinkItems from '@components/block/HeaderLinkItems';
// Headers
import AppHeader from '@components/layout/Header/AppHeader';
import NavBarHeader from '@components/layout/Header/NavBarHeader';
import NavBarMenu from '@components/layout/Header/NavBarHeader/NavBarMenu';
import useLogout from '@/hooks/useLogout';
import paths from '@utils/paths';
import { LoginSignUpContainer, MenuContain } from '../headerStyles'

const getCapitalizedPathName = (pathname: string) => {
	const name = pathname.split('/')[1] // e.g. pathname is 'pathname /path'
	const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	return capitalizedName;
}

interface IUserHeaderProps {
	authProfile: any;
}
const UserHeader: FC<IUserHeaderProps> = ({ authProfile }) => {
	const router = useRouter();
	const onLogout = useLogout();
	const { pathname } = router;
	const excludeItems = ['Home'];

	// Path validators
	const isAppPage = pathname.includes(paths.app);
	const isSetupPage = pathname.includes(paths.setup);

	const blackList = [paths.login, paths.signUp, paths.resetPassword, paths.notFound];
	const isNotInBlackList = !blackList.includes(pathname);

	const isSentStep = pathname.includes(paths.sent);


	const getUserHeader = () => {
		if (isAppPage) return <AppHeader />;

		if (isSetupPage) return (
			<NavBarHeader>
				<NavBarMenu>
					<div className="flex-1 flex justify-between items-center">
						<Menu
							as="div"
							className="relative inline-block text-left ml-auto"
						>
							<Button
								onClick={async () => { onLogout(router) }}
								bgColor={'#00C092'}
								txtColor={'white'}
								width={'158.84px'}
								height={44}
							>
								Logout
							</Button>
						</Menu>
					</div>
				</NavBarMenu>
			</NavBarHeader>
		)

		if (isNotInBlackList) return (
			<NavBarHeader className={`${!isSentStep ? '' : 'shadow-md'}`}>
				{!isSentStep &&
					<NavBarMenu>
						<MenuContain className="flex justify-between items-center">
							<HeaderLinkItems exclude={excludeItems} />
						</MenuContain>
						<LoginSignUpContainer>
							<Link type='button' to={paths.app}>
								Home
							</Link>
						</ LoginSignUpContainer>
					</NavBarMenu>
				}
			</NavBarHeader>
		)
	}

	return (
		<>
			{getUserHeader()}
		</>
	);
}

export default UserHeader