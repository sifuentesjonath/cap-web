import { FC } from 'react'
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { UnitBedroomOptions } from './bedOptions'

interface ISelectBedroomsProps {
	onChange: (value:IOptionsProps) => void;
	className?: string;
	value: IOptionsProps;
	isDisabled?: boolean;
}
const SelectBedrooms:FC<ISelectBedroomsProps> = ({ onChange, className, value, isDisabled=false }) => {
	return (
		<SelectOnly className={className ?? ''}
			isDisabled={isDisabled}
			styles={{}}
			placeholder="Bedrooms"
			defaultValue="right_after"
			value={value ?? null}
			onChange={option => { onChange(option); }}
			options={UnitBedroomOptions}
		/>
	)
}

export default SelectBedrooms