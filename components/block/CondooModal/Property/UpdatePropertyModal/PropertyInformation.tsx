import { FC } from 'react'
import styled from 'styled-components'

interface ICardLabelProps {
  topLabel: string;
  topValue: string;
  bottomLabel: string;
  bottomValue: string;
}
const CardLabel: FC<ICardLabelProps> = ({ topLabel, bottomLabel, topValue, bottomValue }) => {
  return (
    <div className='property-information-container'>
      <div className='sub-container'>
        <span className='info'>{topLabel}:</span>
        <span className='value'>{topValue}</span>
      </div>

      <div className='sub-container'>
        <span className='info'>{bottomLabel}:</span>
        <span className='value'>{bottomValue}</span>
      </div>
    </div>
  )
}

export default CardLabel