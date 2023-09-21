import React, { useState } from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';

export interface IToggleGroupActiveOption {
  title: string;
  value: string;
}

export interface IToggleGroupActiveProps {
  onValueChange: (value: string) => string;
  options: IToggleGroupActiveOption[];
  className?: string;
  itemClassName?: string;
  itemClassNameActive: string;
  currentActive: string;
}

const ToggleGroupActive: React.FC<IToggleGroupActiveProps> = ({
  onValueChange,
  options,
  className,
  itemClassName,
  itemClassNameActive,
  currentActive,
}) => {
  const [activeItem, setActiveItem] = useState<string>(currentActive)
  const toggleItem = (selectedValue) => {
    const isTheSameSelection = selectedValue?.length == 0;
    if(isTheSameSelection){
      return;
    }
    setActiveItem(selectedValue);
  }
  return (
    <RadixToggleGroup.Root
      className={`
        ${className ? className : ''}
      `}
      type="single"
      // Could change this entire component to a custom hook should be ok
      onValueChange={(value) => toggleItem(onValueChange(value))}
    >
      {options.map(option => (
        <RadixToggleGroup.Item
          className={`
            ${itemClassName ? itemClassName : ''}
            ${activeItem === option.value ? itemClassNameActive : ''}
          `}
          id={option.value}
          key={option.value}
          value={option.value}
        >
          {option.title}
        </RadixToggleGroup.Item>
      ))}
    </RadixToggleGroup.Root>
  );
};

export default ToggleGroupActive;
