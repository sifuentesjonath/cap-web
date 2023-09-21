import React from 'react';
import Slider from 'rc-slider'

import styled from 'styled-components';

import { SliderWrapper, SliderStyle } from './style';

interface IUnitsSelectorProps {
  onSelect: (value:number) => void;
}
const UnitsSelector: React.FC<IUnitsSelectorProps> = props => {
  const { onSelect } = props;

  const getUnitQuantity = (sliderSelection: string):number  => {
    const UnitsQuantity = {
      '0': 1,
      '14.28': 2,
      '28.57': 3,
      '42.85': 4,
      '57.14': 5,
      '71.42': 6,
      '85.71': 7,
      '100': +8,
    };
    return UnitsQuantity[sliderSelection];
  }
  const marks = {
    0: "1",
    14.28: "2",
    28.57: "3",
    42.85: "4",
    57.14: "5",
    71.42: "6",
    85.71: "7",
    100: "+8",
  }

  return (
    <SliderWrapper style={{width: 450}}>
      <SliderStyle>
        <Slider
          onChange={(value) => onSelect(getUnitQuantity(value.toString()))}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
          dotStyle={{ display: "none"}}
          handleStyle={{
            marginRight: '8px',
            backgroundColor: 'white',
            borderColor: '#00C092',
            opacity: 1,
            marginTop: 2,
            height: 28,
            width: 28,
          }}
          railStyle={{
            backgroundColor: '#E1E1E1',
            height: 26,
            borderRadius: '999px',
          }}
          trackStyle={{
            backgroundColor: '#00C092',
            height: 26,
            borderRadius: '999px',
          }}
          min={1}
          defaultValue={12.5} // first value of mark
          marks={marks}
          step={null}
        />
      </SliderStyle>
    </SliderWrapper>
  );
};


export default UnitsSelector;
