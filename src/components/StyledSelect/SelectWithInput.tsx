import { FC } from 'react';
import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import { MySelectContainer } from "./style";

interface ISelectWithInput {
  options: any;
  placeholder: string;
  value: any;
  onChange: (value:any) => void;
  onCreateOption: (value: any) => Promise<void>;
  isCardInput?: boolean;
  height?: number;
  className?: string;
}

const SelectWithInput:FC<ISelectWithInput> = ({
  options = [],
  placeholder,
  value,
  onChange,
  onCreateOption,
  isCardInput,
  height,
  className
}) => {
  return (
    <MySelectContainer className={className} height={height}>
      <CreatableSelect
        className='my-select'
        classNamePrefix="custom"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onCreateOption={onCreateOption}
        options={options}
      />
    </MySelectContainer>
  );
};

const CardSelectInput = styled.div`
    width: 100%;
    height: 38px;
    border: solid 2px #E1E1E1;
    border-radius: 10px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 14px;
    min-height: 35px;

    --tw-placeholder-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-placeholder-opacity));
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
`;

export default SelectWithInput;
