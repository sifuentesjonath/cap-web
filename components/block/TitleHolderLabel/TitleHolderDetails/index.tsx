import { FC } from 'react'
import { TitleHolderType } from '@/service/apiTypes'
import { getEmptyAddress } from '../TitleHolderLabel'
// Components
import Input from '@components/block/PropertyCardModalInput'
// Icons
import { PencilIcon } from '@heroicons/react/outline';
import {
	LabelContainerBox,
	TwoInputContainer,
	InputStyle
} from '../style'

interface ITitleHolderDetailsProps {
	titleHolder: TitleHolderType;
	handleOpen: (event: any) => void;
}
const TitleHolderDetails: FC<ITitleHolderDetailsProps> = props => {
	const { titleHolder, titleHolder: { Address }, handleOpen } = props;

	const { FirstName, LastName, Email } = titleHolder;
	const { City, Country, PostalCode, State, AddressLine1, NumberUnits } = Address ?? getEmptyAddress();

	const titleHolderName = FirstName ? `${FirstName} ${LastName ?? ''}` : '';

	const inputs = {
		TitleHolderName: {
			label: 'Name / Company on Title',
			defaultValue: titleHolderName,
		},
		StreetAddress: {
			label: 'Street Address',
			defaultValue: AddressLine1 ?? null,
		},
		Unit: {
			label: 'Unit',
			defaultValue: NumberUnits != 0 ? NumberUnits : null,
		},
		City: {
			label: 'City',
			defaultValue: City ?? null,
		},
		Province: {
			label: 'Province',
			defaultValue: State ?? null,
		},
		Country: {
			label: 'Country',
			defaultValue: Country ?? null,
		},
		PostalCode: {
			label: 'Postal Code',
			defaultValue: PostalCode.length != 0 ? PostalCode : null,
		},
		Email: {
			label: 'Email',
			defaultValue: Email ?? null,
		}
	}
	return (
		<LabelContainerBox>
			<div className='flex flex-col'>
				<span className='title-info'>Title Information</span>

				<label>{inputs.TitleHolderName.label}</label>
				<div className='companyTitle flex gap-3'>
					<span className=''> {inputs.TitleHolderName.defaultValue} </span>

					<button onClick={handleOpen}>
						<PencilIcon className='w-5 h-5' />
					</button>
				</div>
			</div>

			<TwoInputContainer>
				<InputStyle>
					<label>{inputs.StreetAddress.label}</label>
					<Input disabled
						placeholder='Street Address'
						defaultValue={inputs.StreetAddress.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>

				<InputStyle>
					<label>{inputs.Unit.label}</label>
					<Input disabled
						placeholder='Unit'
						defaultValue={inputs.Unit.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>
			</TwoInputContainer>

			<TwoInputContainer>
				<InputStyle>
					<label>{inputs.City.label}</label>
					<Input disabled
						placeholder='Toronto'
						defaultValue={inputs.City.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>

				<InputStyle>
					<label>{inputs.Province.label}</label>
					<Input disabled
						placeholder='Ontario'
						defaultValue={inputs.Province.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>
			</TwoInputContainer>

			<TwoInputContainer>
				<InputStyle>
					<label>{inputs.Country.label}</label>
					<Input disabled
						placeholder='Canada'
						defaultValue={inputs.Country.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>

				<InputStyle>
					<label>{inputs.PostalCode.label}</label>
					<Input disabled
						placeholder='Postal Code'
						defaultValue={inputs.PostalCode.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>
			</TwoInputContainer>

			<TwoInputContainer>
				<InputStyle>
					<label>{inputs.Email.label}</label>
					<Input disabled
						placeholder='Email'
						defaultValue={inputs.Email.defaultValue}
						placeholderStyle='input-style'
					/>
				</InputStyle>
			</TwoInputContainer>
		</LabelContainerBox>
	)
}

export default TitleHolderDetails