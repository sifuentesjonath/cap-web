import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
// Component
import Input from '@components/block/Input';
import CreatableSelect from 'react-select/creatable';
// Icons
import { PencilIcon } from '@heroicons/react/outline';
import { IoMdSave } from 'react-icons/io'
// Style
import { MySelectContainer } from "./style";

interface ISelectWithInput {
	options: any;
	placeholder: string;
	value: any;
	onChange: (value: any) => void;
	onEdit: (value: any) => void;
	onCreateOption: (value: any) => Promise<void>;
	className?: string;
}

const SelectOnlyEditable: FC<ISelectWithInput> = ({
	options = [],
	placeholder,
	value,
	onChange,
	onEdit,
	onCreateOption,
	className
}) => {
	const
		isMobile = useMediaQuery(`(max-width: 1000px)`),
		valueLabel = value?.label ?? '',
		valueId = value?.value ?? undefined;
	// Edit - variables 
	const [isEditing, setIsEditing] = useState(false);
	let editValue = valueLabel;
	// Edit - actions
	const toggleEditing = () => setIsEditing(!isEditing);
	const onPressEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
		// if this input is a child from a 
		// form tag you must prevent the form tag to trigger submit for this to work 
		if (event.key == "Enter") onTriggerEditAction();
	}
	const onEditInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => editValue = value;
	const onTriggerEditAction = () => {
		try {
			if (valueLabel === editValue) return;
			if (!editValue) return;
			onEdit({ value: valueId, label: editValue });
		} catch (err) { } finally {
			toggleEditing();
		}
	}
	// Edit - input configuration
	const editInputConfig = {
		defaultValue: valueLabel,
		autoFocus: isEditing,
		onChange: onEditInputChange,
		onKeyUp: onPressEnterKey,
		// onBlur: isMobile ? undefined : toggleEditing,
	};
	return (
		<MySelectContainer className={className} isEditing={isEditing}>
			{isEditing
				? <Input className='edit-input' {...editInputConfig} />
				: <CreatableSelect
					className='my-select'
					classNamePrefix="custom"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onCreateOption={onCreateOption}
					options={options}
				/>
			}
			{value && <PencilIcon className='edit-icon' onClick={toggleEditing} />}
			{isEditing && <IoMdSave className='update-icon' onClick={onTriggerEditAction} />}
		</MySelectContainer>
	);
};

export default SelectOnlyEditable;