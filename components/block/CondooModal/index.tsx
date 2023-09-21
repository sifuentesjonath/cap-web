/** Component made for reusing it for modals */
import { FC, ReactNode } from 'react'
// Icon
import Image from 'next/image';
import { XIcon } from '@heroicons/react/solid';
// Style
import {
	CondooModalContainer,
	ImageContainer,
	ModalContent,
	Divider
} from './style'

interface ICondooModalProps {
	toggle: boolean;
	onClose: () => void;
	title: string;
	modalImage: StaticImageData;
	aboveChildren?: ReactNode;
	modalImageBackground?: string;
}
const CondooModal: FC<ICondooModalProps> = ({
	title,
	toggle,
	onClose,
	children,
	modalImage,
	modalImageBackground = null,
	aboveChildren = null
}) => {
	return (
		<CondooModalContainer nested modal open={toggle} onClose={onClose}>
			{close => (
				<>
					<ImageContainer backgroundColor={modalImageBackground}>
						<div className='image-container'>
							<div className='image'>
								<Image className={`absolute left-0 right-0 rounded-t-2xl`}
									layout={`fill`}
									src={modalImage}
									alt={`modal image`}
								/>
							</div>
						</div>

						<button className='button-close' onClick={close}>
							<XIcon className='button-close-icon' />
						</button>

						<div className='title-container'>
							<h3>{title}</h3>
						</div>
					</ImageContainer>

					<ModalContent>
						{aboveChildren}
						<Divider className='rounded-sm' />
						{children}
					</ModalContent>
				</>
			)
			}
		</CondooModalContainer>
	)
}

export default CondooModal
