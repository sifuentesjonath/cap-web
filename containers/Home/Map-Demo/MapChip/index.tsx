import { FC, MutableRefObject } from 'react'
import {
	animationMapChip,
} from '../../utils/animationsAndStyles';

interface IMapChipProps {
	imageUrl: string;
	chipClassName: string;
	alt: string;
	isVisible?: boolean | MutableRefObject<any>;
}

const MapChip: FC<IMapChipProps> = ({ imageUrl, chipClassName, alt, isVisible }) => {
	const onVisible = isVisible ? animationMapChip : 'invisible';
	return (
		<img src={imageUrl} alt={alt}
			className={`condo-chip ${chipClassName} ${onVisible} `}
		/>
	)
}

export default MapChip