import React from 'react';
import { DropdownDate, DropdownComponent } from 'react-dropdown-date';
import { IDatePickerProps } from './interface'

const formatDate = (date: Date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const DatePicker: React.FC<IDatePickerProps> = ({
  initialDate,
  onChange,
  options = {},
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    initialDate || new Date()
  );

  React.useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate, onChange]);

  return (
    <DropdownDate
      selectedDate={
        formatDate(selectedDate) // 'yyyy-mm-dd' format only
      }
      startDate="1970-01-01"
      order={[
        DropdownComponent.year,
        DropdownComponent.month,
        DropdownComponent.day,
      ]}
      onDateChange={date => {
        setSelectedDate(date);
      }}
      names={{
        year: 'year',
        month: 'month',
        day: 'day',
      }}
      classes={{
        dateContainer: 'flex w-full h-full justify-between',
        yearContainer: 'w-1/3 h-full mr-4',
        monthContainer: 'w-1/3 h-full mr-4',
        dayContainer: 'w-1/3 h-full ',
        year: 'w-full h-full  rounded-xl',
        month: 'w-full h-full  rounded-xl',
        day: 'w-full h-full  rounded-xl',
      }}
      defaultValues={{
        year: 'YYYY',
        month: 'MMM',
        day: 'DD',
      }}
      options={{
        monthShort: true,
        ...options,
      }}
    />
  );
};

export default DatePicker;
