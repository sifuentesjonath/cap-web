import { FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import NavBarHeader from '@components/layout/Header/NavBarHeader';
import NavBarMenu from '@components/layout/Header/NavBarHeader/NavBarMenu';
import NavItem from '@components/layout/Header/NavItem';
import HeaderLinkItems from '@components/block/HeaderLinkItems';
import { media } from '@/scss/media';
import { LoginSignUpContainer, MenuContain } from '../headerStyles'

interface IPageHeaderProps { }
const PageHeader: FC<IPageHeaderProps> = () => {
	const router = useRouter();
	const { pathname } = router;

	const CondooUserAccess = ['/login', '/signup', '/resetPassword', '/404'];
	const isCondooUserAccess = CondooUserAccess.includes(pathname);

	const excludeItems = ['Home']
	const isPricingPage = pathname.includes('/pricing');

	return (
		<>
			{!isCondooUserAccess &&
				<NavBarHeader className={`${isPricingPage ? 'shadow-md' : ''}`}>
					<NavBarMenu>
						<MenuContain className="flex">
							<HeaderLinkItems exclude={excludeItems} />
						</MenuContain>

						<LoginSignUpContainer>
							<NavItem href="/login" className="ml-auto">Log In</NavItem>

							<Link href="/signup">
								<a className="btn-getStarted">Get Started</a>
							</Link>
						</LoginSignUpContainer>
					</NavBarMenu>
				</NavBarHeader>
			}
		</>
	)
}

export default PageHeader