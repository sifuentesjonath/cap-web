import { FC } from 'react'
import styled, { css } from 'styled-components'
// Input Component
import Select from 'react-select'
import { OptionIcon, SingleValueIcon } from './customSelect';
// Country flags
import en from 'react-phone-number-input/locale/en.json'
import { getCountries } from 'react-phone-number-input/input'
import { getFlagUrlDefaultSvg } from '../CountryFlag/handleCountryFlag';

interface ISelectCountryInputProps {
	defaultCountry: string
	isDisabled?: boolean;
	className?: string;
	onChange: (option: { label: string, value: string, icon: string }) => void;
}
const SelectCountryInput: FC<ISelectCountryInputProps> = ({
	defaultCountry = null,
	isDisabled = false,
	className,
	onChange,
}) => {

	const countrySubstring = defaultCountry?.substring(0, 2).toUpperCase();
	const options = getCountries().map((countryCode) => {
		const countryName = en[countryCode];
		return {
			label: countryName,
			value: countryCode,
			icon: getFlagUrlDefaultSvg(countryCode)
		}
	})
	const defaultCountryPosition = options.findIndex((option) => option.value == countrySubstring);
	return (
		<SelectStyle className={className}>
			<Select
				isDisabled={isDisabled}
				className="my-select"
				classNamePrefix="custom"
				menuPortalTarget={document.body} menuPosition={'fixed'}
				defaultValue={options[defaultCountryPosition]}
				options={options}
				components={{
					Option: OptionIcon,
					SingleValue: SingleValueIcon
				}}
				onChange={onChange}
			/>
		</SelectStyle>
	)
}

/** Grab the style from here to override */
const defaultSelectStyle = css`
  .my-select {
    .custom__control {
      width: 100%;
      border: solid 1px #E1E1E1;
      border-radius: 10px;
      box-shadow: unset;
      height: 50px;
      .custom__value-container {
        .custom__placeholder {
          color: black;
        }
        .custom__single-value {
          color: rgba(4, 4, 5, 0.8);
          font-weight: 500;
        }
      }
      .custom__indicators {
        .custom__indicator-separator {
          display: none;
        }
      }
      .custom__input {
        input:focus {
          box-shadow: unset !important;
        }
      }
    }
    .custom__menu {
      .custom__menu-list {
        padding: 12px;
        .custom__option {
          cursor: pointer;
          background-color: white;
          color: rgb(4, 4, 5);
          font-weight: normal;
          font-size: 14px;
          &:hover {
            background-color: rgba(4, 4, 5, 0.05);
            color: rgb(4, 4, 5);
          }
          &.custom__option--is-selected {
            background-color: rgba(4, 4, 5, 0.05);
          }
        }
      }
    }
  }
`;

const SelectStyle = styled.div`
  ${({ className }) => className ? className : defaultSelectStyle}
`;

export default SelectCountryInput