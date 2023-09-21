import { FC, useEffect } from 'react'
import SelectOnly, { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import styled from 'styled-components';

interface ISelectTitleHolderProps {
	value: IOptionsProps;
	onSelect: (titleHolder: IOptionsProps) => void;
	titleHolderOptions: IOptionsProps[];
}
const SelectTitleHolder:FC<ISelectTitleHolderProps> = (props) => {
	const { value, onSelect, titleHolderOptions } = props;

	return (
		<SelectOnly
			placeholder="Name / Company on Title"
			defaultValue="right_after"
			value={value ?? null}
			onChange={onSelect}
			options={titleHolderOptions ?? null}
		/>
	)
}

export const SelectOnlyStyle = styled.div`
	.my-select {
		.custom__control {
			width: 100%;
			border: solid 1px #E1E1E1;
			border-radius: 10px;
			box-shadow: unset;
			height: 43px;
			margin-bottom: 6px;
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
`

export default SelectTitleHolder;