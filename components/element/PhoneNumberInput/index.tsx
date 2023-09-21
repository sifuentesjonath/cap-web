/**
 * This Phone number input works with react-hook-form directly
 * - control: from useForm
 * - name: the respective name of the field defined in your default values (from useForm)
 * - you can pass rules too
*/
import { FC, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import styled from 'styled-components'

interface IPhoneNumberInputProps {
	name: string;
	control: any;
	rules: any;
	disabled?: boolean;
}
const PhoneNumberInput: FC<IPhoneNumberInputProps> = ({
	name,
	control,
	rules,
	disabled = false
}) => {
	return (
		<PhoneInput
			international
			disabled={disabled}
			countryCallingCodeEditable={false}
			defaultCountry='CA'
			name={name}
			control={control}
			rules={{
				...rules,
			}}
		/>
	)
}

const PhoneInput = styled(PhoneInputWithCountry)`
	.PhoneInputCountryIcon--border {
		border-radius: 3px !important;
		border-color: inherit;
	}
	// TODO: better styling
	/* input {
		border: 0;
	}
	font-family: outfit,sans-serif;
	width: 100%;
	height: 52px;
	border: 1px solid #E1E1E1;
	border-radius: 8px;
	box-shadow: unset;
	background-color: white;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 0px 16px;
	min-height: 35px; */
`;
export default PhoneNumberInput;