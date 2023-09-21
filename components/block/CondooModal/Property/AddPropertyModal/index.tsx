import { FC, useRef, useEffect } from 'react'
// Helpers
import { getRandomThumbnail, ThumbNailType } from '@components/block/PropertyDisplay/properties';
// Components
import CondooModal from '../../index'
import AddPropertyForm from './AddPropertyForm'

interface IAddPropertyModalProps {
	toggle: boolean;
	onClose: () => void;
}
const AddPropertyModal: FC<IAddPropertyModalProps> = ({ toggle, onClose }) => {
	const thumbNail = useRef<ThumbNailType>(getRandomThumbnail())
	useEffect(() => { thumbNail.current = getRandomThumbnail(); }, [])

	return (
		<CondooModal
			title='Add Property'
			toggle={toggle}
			onClose={onClose}
			modalImageBackground={thumbNail.current.background}
			modalImage={thumbNail.current.icon}
		>
			<AddPropertyForm onCloseModal={onClose} />
		</CondooModal>
	)
}

export default AddPropertyModal