import { FC } from 'react'
import { ImagePostion, Information, StyledPopup } from '../WhyInfoButton/style';
import {
	Tag,
	TagText
} from './style'

interface IPropertyPopupProps {
	placeHolder: string;
	hoverText: string;
}
const PropertyPopup: FC<IPropertyPopupProps> = ({ placeHolder, hoverText }) => {
	return (
		<Tag>
			<StyledPopup
				closeOnDocumentClick
				position={'left'}
				on={['hover', 'focus']}
				trigger={open => (
					<TagText >{hoverText}</TagText>
				)}
			>
				<TagText >{placeHolder}</TagText>
			</StyledPopup>
		</Tag>
	)
}

export default PropertyPopup