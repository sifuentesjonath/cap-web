import { FC } from 'react'
import CondooFrame from '../index'
import Link from '@components/element/Link';
// style
import {
	FrameContent,
	MainTitle,
	TabletPhonesImage
} from './style'
import paths from '@utils/paths';

interface ITabletPhoneFrameProps { }
const TabletPhoneFrame: FC<ITabletPhoneFrameProps> = () => {
	return (
		<CondooFrame leftChild={<TextFrame />} rightChild={<ImageFrame />} />
	)
}

const ImageFrame = () => <TabletPhonesImage></TabletPhonesImage>
const TextFrame: FC<ITabletPhoneFrameProps> = () => {
	return (
		<FrameContent>
			<MainTitle>Want to solve hard problems?</MainTitle>
			<p>We are always looking to expand our team of passionate problem solvers. If you are interested in working at Condoo we want to hear from you!</p>
			<Link type='button' to={paths.resourcesSubmitNewRequest}>Contact Support</Link>
		</FrameContent>
	)
}

export default TabletPhoneFrame