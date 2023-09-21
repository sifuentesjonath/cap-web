import { FC } from 'react'
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { UnitBathroomOptions } from './bathOptions'

interface ISelectBathroomsProps {
	onChange: (value:IOptionsProps) => void;
	className?: string;
	value: IOptionsProps;
	isDisabled?: boolean;
}
const SelectBathrooms:FC<ISelectBathroomsProps> = ({ onChange, className, value, isDisabled }) => {
	return (
		<SelectOnly className={className ?? ''}
			isDisabled={isDisabled}
			placeholder="Bathrooms"
			defaultValue="right_after"
			value={ value ?? null }
			styles={{}}
			onChange={option => { onChange(option); } }
			options={UnitBathroomOptions}
		/>
	)
}

export default SelectBathrooms