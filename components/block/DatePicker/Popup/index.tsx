import {FC} from 'react'
import { IDatePickerProps } from '../interface';

import RawDatePicker from './popup'

const DatePicker: FC<IDatePickerProps> = props => (
  <RawDatePicker
    date={props.date}
    onChange={props.onChange}
    className={props.className}
    oldestDateLimit={props.oldestDateLimit && props.oldestDateLimit}
    newestDateLimit={props.newestDateLimit && props.newestDateLimit}
  />
);

export default DatePicker;