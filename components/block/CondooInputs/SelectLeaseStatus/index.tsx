import { FC } from 'react'
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';

interface ISelectLeaseStatusProps {
	onSelect: (value:IOptionsProps) => void;
	value: IOptionsProps;
}
const LeaseStatusOptions: IOptionsProps[] = [
	{ value: 'Leased', label: 'Leased', },
	{ value: 'Vacant', label: 'Vacant', },
]

export const getLeasedStatusOption = (status) => {
	const option = LeaseStatusOptions.find(({ value }) => value == status);
	return option;
}

const SelectLeaseStatus:FC<ISelectLeaseStatusProps> = ({ onSelect, value }) => {
	return (
		<SelectOnly
			placeholder="Currently Leased?"        
			defaultValue="right_after"
			value={value ?? null}
			className='input-style-select'
			onChange={onSelect}
			options={LeaseStatusOptions}
		/>
	)
}

export default SelectLeaseStatus