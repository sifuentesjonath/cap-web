import { FC } from 'react'
import Image from 'next/image'
import { CardContainer, } from '../style'

interface IHandsomeCardProps {
	name: string;
	image: StaticImageData;
}
const HandsomeCard: FC<IHandsomeCardProps> = ({ name, image }) => {
	return (
		<CardContainer>
			<div className='image-container'>
				<Image className='handsome-image'
					src={image}
					layout={'intrinsic'}
				/>
			</div>

			<div className='content'>
				<label>{name}</label>
			</div>
		</CardContainer>
	)
}

export default HandsomeCard