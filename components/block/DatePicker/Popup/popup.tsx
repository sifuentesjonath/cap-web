import React, { FC, useRef, Ref, useContext, StyleHTMLAttributes, MouseEvent, forwardRef } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
// Context
import { DatepickerCtx, useDatepickerCtx } from './context';
// Interfaces
import { IDatePickerProps, ICalendarProps, IYearSelectionProps } from '../interface';
// Helpers
import { dayNames, monthNames, getFormattedDate, getBeginningDayOfWeek, getDaysInMonth } from './dates'
// Styles / Icons
import {
  DateSelectorInput,
  buttonClassName,
} from './style'
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, } from '@heroicons/react/solid';

const chevronStyle = `w-5 h-5 stroke-current text-[#00C092]`

/**
 * Date picker component that serves as popper of `Calendar` component
 * @param props date, onChange, className, buttonClassName
 */
const RawDatePicker: FC<IDatePickerProps> = ({
  date,
  onChange,
  className=false,
  buttonClassName,
  oldestDateLimit,
  newestDateLimit,
}) => {
  const popupNode = useRef<HTMLElement>();
  const ctxValue = useDatepickerCtx(date, onChange, popupNode);

  return (
    <DatepickerCtx.Provider value={ctxValue}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <span className="flex" ref={ref}>
              <DateSelectorInput className={className}
                type="text"
                onFocus={e => ctxValue.showCalendar()}
                value={getFormattedDate(date)}
                readOnly
              />

              <button
                className={`bg-gray-300 rounded-r flex items-center
                  justify-center text-sm font-semibold text-gray-700
                  px-2 focus:outline-none hidden ${
                    buttonClassName ? buttonClassName : ''
                  }`}
                onClick={e => ctxValue.toggleCalendar()}
              >
                <CalendarIcon className="w-5 h-5 text-secondary" />
              </button>
            </span>
          )}
        </Reference>
        <Popper
          placement="bottom-start"
          innerRef={node => (popupNode.current = node)}
        >
          {({ ref, style, placement, arrowProps }) =>
            ctxValue.isVisible ? (
              <Calendar
                oldestDateLimit={oldestDateLimit && oldestDateLimit}
                newestDateLimit={newestDateLimit && newestDateLimit}
                placement={placement}
                style={style}
                ref={ref as Ref<HTMLDivElement>}
              />
            ) : null
          }
        </Popper>
      </Manager>
    </DatepickerCtx.Provider>
  );
};

export default RawDatePicker;

/**
 * Handles calendar in different views
 * @param views: date, month, year
 */
const Calendar: FC<ICalendarProps> = forwardRef<
  HTMLDivElement,
  ICalendarProps
  > ((props, ref) => {
  const { view } = useContext(DatepickerCtx);

  let selectionComponent = null;
  switch (view) {
    case 'date':
      selectionComponent = <DateSelection />;
      break;
    case 'month':
      selectionComponent = <MonthSelection />;
      break;
    case 'year':
      selectionComponent = 
        <YearSelection 
          oldestYearLimit={props.oldestDateLimit && props.oldestDateLimit}
          newestDateLimit={props.newestDateLimit && props.newestDateLimit}
        />;
      break;
  }

  return (
    <div
      className="bg-white relative shadow-lg max-w-xs w-64 p-2 rounded-lg z-30"
      ref={ref}
      data-placement={props.placement}
      style={props.style}
    >
      {selectionComponent}
    </div>
  );
});

Calendar.displayName = 'CalendarComponent';

/**
 * Date Selection Component
 * @param props
 */
const DateSelection: FC<{}> = props => {
  const {
    nextMonth,
    prevMonth,
    viewMonths,
    viewYears,
    selectDate,
    visible: { month, year },
    isSelectedDate,
  } = useContext(DatepickerCtx);

  const dates = [];

  // This handles pushing blank spaces in days before beginning day of given month
  for (let i = 0; i < getBeginningDayOfWeek(month, year); i++) {
    dates.push(<div key={`emptybefore${i}`}></div>);
  }

  // This handles pushing all the rest of the days by the given month
  for (let i = 1; i <= getDaysInMonth(month, year); i++) {
    dates.push(
      <button
        key={`day${i}`}
        className={`hover:bg-gray-200 rounded p-1 text-sm ${
          isSelectedDate(i) ? 'bg-gray-300 font-semibold' : ''
        }`}
        onClick={() => selectDate(i)}
        style={{ textAlign: 'center' }}
      >
        {i}
      </button>
    );
  }

  return (
    <div
      className="text-gray-800"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <button className={buttonClassName} onClick={e => prevMonth()}>
        <ChevronLeftIcon className={`${chevronStyle}`} />
      </button>

      <button
        className={`${buttonClassName} font-semibold`}
        style={{ gridColumn: '2/5' }}
        onClick={e => viewMonths()}
      >
        {monthNames[month]}
      </button>

      <button
        className={`${buttonClassName} font-semibold`}
        style={{ gridColumn: '5/7' }}
        onClick={e => viewYears()}
      >
        {year}
      </button>

      <button className={buttonClassName} onClick={e => nextMonth()}>
        <ChevronRightIcon className={`${chevronStyle}`} />
      </button>

      {dayNames.map(day => (
        <div
          key={(200 + day).toString()}
          className="p-1 text-sm font-semibold"
          style={{ textAlign: 'center' }}
        >
          {day[0]}
        </div>
      ))}

      {dates}
    </div>
  );
};

/**
 * Month Selection Component
 * @param props
 */
const MonthSelection: FC<{}> = props => {
  const { viewYears, selectMonth, nextYear, prevYear, visible } =
    useContext(DatepickerCtx);

  return (
    <div
      className="h-48"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <div className="flex" style={{ gridColumn: '1/5' }}>
        <CalButton chevron="left" onClick={e => prevYear()} />
        <CalButton className="flex-grow" onClick={e => viewYears()}>
          {visible.year}
        </CalButton>
        <CalButton chevron="right" onClick={e => nextYear()} />
      </div>

      {monthNames.map((month, index) => (
        <CalButton onClick={e => selectMonth(index)} key={index}>
          {month.substring(0, 3)}
        </CalButton>
      ))}
    </div>
  );
};

/**
 * Year Selection Component
 * @param props
 */

const YearSelection: FC<IYearSelectionProps> = ({ oldestYearLimit, newestDateLimit }) => {
  const {
    selectYear,
    prevDecade,
    nextDecade,
    visible: { year },
  } = useContext(DatepickerCtx);

  let years = [];
  let [minYear, maxYear] = [year - 6, year + 6];
  
  // Handle Year limits
  if(oldestYearLimit && minYear < oldestYearLimit) minYear = oldestYearLimit; // Enable oldest year limit
  if(newestDateLimit && maxYear >= newestDateLimit) maxYear = newestDateLimit + 1; // Enable oldest year limit
  
  for (let i = minYear; i < maxYear; i++) {
    years.push(<CalButton key={`yearCalButton_${i}`} onClick={e => selectYear(i)}>{i}</CalButton>);
  }

  // fill with blank spaces so year buttons don't expand more than expected
  if(oldestYearLimit && newestDateLimit && years.length != 12){
    for (let i = years.length; i <= 12; i++) {
      years.push(<div key={`emptyYearLabel${i}`}></div>);
    }
  }

  return (
    <div
      className="h-48"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2rem auto',
        alignItems: 'stretch',
      }}
    >
      <div className="flex" style={{ gridColumn: '1/5' }}>
        <CalButton chevron="left" onClick={e => prevDecade()} />
        <CalButton className="flex-grow">
          {`${minYear} - ${maxYear - 1}`}
        </CalButton>
        <CalButton chevron="right" onClick={e => nextDecade()} />
      </div>
      {years}
    </div>
  );
};

const CalButton: FC<{
  chevron?: 'right' | 'left';
  className?: string;
  style?: StyleHTMLAttributes<HTMLButtonElement>;
  onClick?: (e:any) => void; // FIXME-1.0: deleting MouseEvent fixes type check
  } > = props => {
  let children = null;

  if (props.chevron && props.chevron === 'left')
    children = (
      <ChevronLeftIcon className={`${chevronStyle}`} />
    );
  else if (props.chevron && props.chevron === 'right')
    children = (
      <ChevronRightIcon className={`${chevronStyle}`} />
    );
  else children = props.children;

  return (
    <button
      className={`${buttonClassName} ${props.className}`}
      style={props.style}
      onClick={props.onClick} // FIXME-1.0: type handling not correct
    >
      {children}
    </button>
  );
};