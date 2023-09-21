import { FC } from 'react'
import { TitleHolderType } from '@/service/apiTypes'
// Components
import TitleHolderLabel from '@components/block/TitleHolderLabel';
// Style
import {
	ScrollableContainer
} from '../style'

interface ITitleHolderViewProps {
	titleHolders: TitleHolderType[];
}
const TitleHolderView:FC<ITitleHolderViewProps> = props => {
	const { titleHolders } = props;
	return (
		<ScrollableContainer titleHolderview>
			{Array.isArray(titleHolders) &&
				titleHolders?.map(titleHolder => {
					const { Id } = titleHolder;
					return (
						<TitleHolderLabel key={`titleHolder_${Id}`} titleHolder={titleHolder} /> 
					)
				})
			}
		</ScrollableContainer>
	)
}

export default TitleHolderView