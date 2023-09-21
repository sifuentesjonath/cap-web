import React, { FC, Dispatch, SetStateAction } from 'react'
import DatePicker from '../DatePicker/Popup';
// Styles
import {
  FilterHeaderContainer,
  LabelDoubleInputsContainer,
  DoubleInputsPosition,
  DatePickerStyle,
  ExtraButtonsContainer,
} from './style'

type DateDispatcher = Dispatch<SetStateAction<Date>>; // Define setState dispatcher type

interface IDateFilterFromTo {
  className?: string,
  oldestDateLimit?: number,
  newestDateLimit?: number,
  fromDateState: [fromDate: Date, setFromDate: DateDispatcher],
  toDateState: [toDate: Date, setToDate: DateDispatcher],
}
const DateFilterFromTo: FC<IDateFilterFromTo> = props => {
  const { children, oldestDateLimit, newestDateLimit, className = null } = props;
  // received states as props...
  const [fromDate, setFromDate] = props.fromDateState;
  const [toDate, setToDate] = props.toDateState;

  return (
    <FilterHeaderContainer>
      <LabelDoubleInputsContainer>
        <h4>Time Range</h4>

        <DoubleInputsPosition>
          <div className='date-input-container'>
            <h4 className='date-label'>From</h4>
            <DatePicker
              date={fromDate && fromDate}
              onChange={date => setFromDate(date)}
              className={DatePickerStyle}
              oldestDateLimit={oldestDateLimit}
              newestDateLimit={newestDateLimit}
            />
          </div>

          <div className='date-input-container'>
            <h4 className='date-label'>To</h4>
            <DatePicker
              date={toDate && toDate}
              onChange={date => setToDate(date)}
              className={DatePickerStyle}
              oldestDateLimit={oldestDateLimit}
              newestDateLimit={newestDateLimit}
            />
          </div>
        </DoubleInputsPosition>
      </LabelDoubleInputsContainer>

      {children &&
        <ExtraButtonsContainer>
          {children}
        </ExtraButtonsContainer>
      }
    </FilterHeaderContainer>
  )
}

export default DateFilterFromTo;
