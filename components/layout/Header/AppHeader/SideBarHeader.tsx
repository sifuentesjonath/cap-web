import { FC, useMemo } from 'react'
// Next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Components
import LogoApp from '@components/graphics/LogoApp';
import OptionChip from '../OptionChip';
import emojiSunglasses from '@/public/images/emoji_sunglasses.png'
// Style
import {
	SideBarContainer,
	ContainerPosition,
	LogoPosition,
	MenuSideBarContainer,
	WidgetPosition,
	WidgetContainer,
} from './style'
import paths from '@utils/paths';
import SideBarPaths from './sideBarPaths';

const SideBarHeader: FC = () => {
	const currentPathName = useRouter().pathname;
	const currentPathIndex = SideBarPaths.findIndex(({ path }) => path == currentPathName);
	const isProfilePage = currentPathName.includes('profile');

	const itemPaths = useMemo(() =>
		SideBarPaths.map((item, index) => ({ ...item, isActive: index === currentPathIndex })),
		[currentPathName]
	);

	return (
		<SideBarContainer className={`shadow-xl z-10`}>
			<ContainerPosition>
				<LogoPosition>
					<Link href={paths.app} passHref>
						<LogoApp />
					</Link>
				</LogoPosition>

				<MenuSideBarContainer>
					{itemPaths.map(({ name, path, image, isActive }) =>
						<OptionChip
							key={`${name}-${path}`}
							name={name}
							path={path}
							image={isActive ? image.enabled : image.disabled}
							isActive={isActive}
						/>
					)}
				</MenuSideBarContainer>

				<WidgetPosition >
					<WidgetContainer isActive={isProfilePage}>
						<Link href={paths.appProfile}>
							<a className='flex items-center'>
								<Image src={emojiSunglasses} width={40} height={40} />
							</a>
						</Link>
					</WidgetContainer>
					<span>Account</span>
				</WidgetPosition>
			</ContainerPosition>
		</SideBarContainer>
	)
}

export default SideBarHeader