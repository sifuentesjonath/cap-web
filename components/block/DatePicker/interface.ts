// DatePicker

export interface IDatePickerProps {
  initialDate?: Date;
  options?: {
    yearReverse?: boolean;
    monthShort?: boolean;
    monthCaps?: boolean;
  };
  onChange: (date: Date) => void;
  oldestDateLimit?: number;
  newestDateLimit?: number;
}

// Popup

export interface IDatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
  className?: string;
  buttonClassName?: string;
  oldestDateLimit?: number;
  newestDateLimit?: number;
}

export interface ICalendarProps {
  style: React.CSSProperties;
  placement: string;
  ref: React.Ref<HTMLDivElement>;
  oldestDateLimit: number;
  newestDateLimit?: number;
}

// SubComponents

export interface IYearSelectionProps {
  oldestYearLimit?: number,
  newestDateLimit?: number;
}

// Context
export type ViewStateType = "date" | "month" | "year";

export interface IMonthYear {
  month: number;
  year: number;
}

export interface IDatepickerContext {
  date: Date | null;
  visible: IMonthYear;
  view: ViewStateType;
  nextMonth: () => void;
  prevMonth: () => void;
  nextYear: () => void;
  prevYear: () => void;
  nextDecade: () => void;
  prevDecade: () => void;
  selectMonth: (m: number) => void;
  selectYear: (y: number) => void;
  selectDate: (d: number) => void;
  viewMonths: () => void;
  viewYears: () => void;
  isVisible: boolean;
  showCalendar: () => void;
  toggleCalendar: () => void;
  isSelectedDate: (d: number) => boolean;
}
