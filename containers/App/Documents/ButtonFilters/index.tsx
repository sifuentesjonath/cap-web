import { FC } from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import { buttons } from '../utils/buttons';
// Components
import ButtonChip from '@components/block/ButtonChip';
// Style 
import {
	ButtonContainer,
} from '../style'

interface IButtonFiltersProps {
	handleButtonFilterClick: (buttonTitle: string) => void;
}
const ButtonFilters: FC<IButtonFiltersProps> = props => {
	const { handleButtonFilterClick } = props;

	const isMobile = useMediaQuery(`(max-width: 1200px)`);
	return (
		<ButtonContainer>
			{
				buttons.map(({ image, buttonTitle }) =>
					<div className='button-frame' key={buttonTitle}>
						<ButtonChip
							image={image}
							buttonTitle={buttonTitle}
							isMobile={isMobile}
							handleClick={() => handleButtonFilterClick(buttonTitle)}
						/>
					</div>
				)
			}
		</ButtonContainer>
	)
}

export default ButtonFilters