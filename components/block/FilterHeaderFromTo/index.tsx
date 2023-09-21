import React, { FC } from 'react'
//
import CreatableSelect from 'react-select/creatable';
// Components
// Styles
import {
  FilterHeaderContainer,
  LabelWithFilterInput,
  SelectWithInputStyle,
  LabelDoubleInputsContainer,
  DoubleInputsPosition,
  DoubleInputStyle,
  ExtraButtonsContainer,
} from './style'


const SelecWithInput = ({ options }) => {
  const buildOptions = (options:Array<{value:number,title:string}>) => {
    const builtOptions = options?.map(option =>{
      // console.log(option)
    return  {label: option.title, value:option.value}
    })
  
    return builtOptions;
  }
  return(
    <SelectWithInputStyle>
      <CreatableSelect
        className='my-select'
        classNamePrefix='custom'
        placeHolder='Select'
        options={buildOptions(options)}
      />
    </SelectWithInputStyle>
  )
}


interface IFilterHeaderFromTo {
  filterInputLabelName: string;
  rangeInputLabelName: string;
  propertyOptions?:any[];
}
const FilterHeaderFromTo:FC<IFilterHeaderFromTo> = props => {
  const {
    filterInputLabelName,
    rangeInputLabelName,
    children,
    propertyOptions
  } = props;

  
const getOptions = () => {
  return propertyOptions;
}
  return (
    <FilterHeaderContainer>
      <div className='h-full flex pl-12 gap-10'>
        <LabelWithFilterInput>

            <h4>{filterInputLabelName}</h4>
            <SelecWithInput options={getOptions()}/>

        </LabelWithFilterInput>

        <LabelDoubleInputsContainer>

            <h4>{rangeInputLabelName}</h4>

            <DoubleInputsPosition>
              <DoubleInputStyle>
                <input
                  placeholder='From'
                  className={`
                  my-input block w-1/2
                  'text-black
                    focus:outline-none
                  `}
                />
                <input
                  placeholder='To'
                  className={`
                  my-input block w-1/2
                  'text-black
                    focus:outline-none
                `}/>
              </DoubleInputStyle>
            </DoubleInputsPosition>

        </LabelDoubleInputsContainer>

        <ExtraButtonsContainer>
          {children}
        </ExtraButtonsContainer>
      </div>

    </FilterHeaderContainer>
  )
}

export default FilterHeaderFromTo
