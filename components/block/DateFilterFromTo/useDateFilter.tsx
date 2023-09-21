import { useState, useEffect } from 'react'
import DatePicker from '../DatePicker/Popup';
// Styles
import {
  LabelDoubleInputsContainer,
  DoubleInputsPosition,
  DatePickerStyle,
} from './style'

interface IUseDateFilter {
  // onChange: (fromDate: Date, toDate: Date) => void; // TODO - add onChange instead of returning date states
  fromDate?: Date,
  toDate?: Date,
  limit?: {
    oldest?: Date,
    latest?: Date,
  }
}
const getDefaultOptions = () => {
  return {
    fromDate: new Date(),
    toDate: new Date(),
    limit: {
      oldest: undefined,
      latest: undefined
    }
  }
}
const useDateFilter = (options?: IUseDateFilter) => {
  const { fromDate, toDate, limit, } = options ?? getDefaultOptions();

  const [fromDateField, setFromDateField] = useState(fromDate);
  const [toDateField, setToDateField] = useState(toDate);

  const datePickerLimits = {
    oldest: limit?.oldest?.getFullYear() ?? undefined,
    latest: limit?.latest?.getFullYear() ?? undefined,
  }

  // TODO: implement onChange
  // useEffect(() => onChange(fromDateField, toDateField), [fromDateField, toDateField]);

  const DatePickerFrom = () => (
    <DatePicker
      date={fromDateField}
      onChange={date => setFromDateField(date)}
      className={DatePickerStyle}
      oldestDateLimit={datePickerLimits.oldest}
      newestDateLimit={datePickerLimits.latest}
    />
  )

  const DatePickerTo = () => (
    <DatePicker
      date={toDateField}
      onChange={date => setToDateField(date)}
      className={DatePickerStyle}
      oldestDateLimit={datePickerLimits.oldest}
      newestDateLimit={datePickerLimits.latest}
    />
  )

  // const DatePickerComponent = () => (
  //   <LabelDoubleInputsContainer>
  //     {/* <h4>Time Range</h4> */}

  //     <DoubleInputsPosition>
  //       <div className='date-input-container'>
  //         <h4 className='date-label'>From</h4>
  //         <DatePicker
  //           date={fromDateField}
  //           onChange={date => setFromDateField(date)}
  //           className={DatePickerStyle}
  //           oldestDateLimit={datePickerLimits.oldest}
  //           newestDateLimit={datePickerLimits.latest}
  //         />
  //       </div>

  //       <div className='date-input-container'>
  //         <h4 className='date-label'>To</h4>
  //         <DatePicker
  //           date={toDateField}
  //           onChange={date => setToDateField(date)}
  //           className={DatePickerStyle}
  //           oldestDateLimit={datePickerLimits.oldest}
  //           newestDateLimit={datePickerLimits.latest}
  //         />
  //       </div>
  //     </DoubleInputsPosition>
  //   </LabelDoubleInputsContainer>
  // )

  return {
    fromDateState: fromDateField,
    toDateState: toDateField,
    DatePickers: {
      from: DatePickerFrom,
      to: DatePickerTo
    }
  }
}

export default useDateFilter;
