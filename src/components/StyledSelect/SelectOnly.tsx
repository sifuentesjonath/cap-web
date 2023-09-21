import { FC } from 'react';
import Select from 'react-select';
import { MySelectContainer } from "./style";

export interface IOptionsProps {
  value: string,
  label: string,
}

interface ISelectOnlyProps {
  options: IOptionsProps[],
  value?: IOptionsProps,
  defaultValue?: string,
  placeholder: string,
  onChange: (value) => void,
  className?: string,
  isDisabled?: boolean;
  styles?: any;
}

const SelectOnly: FC<ISelectOnlyProps> = ({
  options = [],
  value,
  defaultValue,
  placeholder,
  onChange,
  className,
  isDisabled,
  styles
}) => {
  return (
    <MySelectContainer className={className} style={styles}>
      <Select
        isDisabled={isDisabled}
        className="my-select"
        classNamePrefix="custom"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        isSearchable={false}
        onChange={onChange}
        options={options}
      />
    </MySelectContainer>
  );
};

export default SelectOnly;
