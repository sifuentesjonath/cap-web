import { FC } from 'react'
import { TitleHolderType } from '@/service/apiTypes'
// Components
import PlaidDetailsDisplay from './PlaidDetailsDisplay'
import {
	LabelContainerBox,
} from '../style'

interface IPlaidDetails {
	titleHolder: TitleHolderType;
}
const PlaidDetails:FC<IPlaidDetails> = ({ titleHolder }) => {
	return (
		<LabelContainerBox height={'223'} >
			<span className='title-info'>Plaid Details:</span>

			<PlaidDetailsDisplay titleHolder={titleHolder} />
		</LabelContainerBox>
	)
}

export default PlaidDetails