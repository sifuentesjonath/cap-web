import { createContext, useEffect, useState } from "react";
import { IMonthYear, IDatepickerContext, ViewStateType } from "../interface";

export const DatepickerCtx = createContext<IDatepickerContext>({
  date: new Date(),
  visible: {
    month: 0,
    year: 1970,
  },
  view: "date",
  nextMonth: () => { },
  prevMonth: () => { },
  nextYear: () => { },
  prevYear: () => { },
  nextDecade: () => { },
  prevDecade: () => { },
  selectMonth: (m) => { },
  selectYear: (y) => { },
  selectDate: (d) => { },
  viewMonths: () => { },
  viewYears: () => { },
  isVisible: false,
  showCalendar: () => { },
  toggleCalendar: () => { },
  isSelectedDate: (d) => false,
});

export function useDatepickerCtx(
  date: Date,
  onChange: (d: Date) => void,
  ref: React.MutableRefObject<HTMLElement | undefined>
  ):IDatepickerContext {

  const [monthYear, setMonthYear] = useState<IMonthYear>({
    month: date?.getMonth() ?? new Date().getMonth(),
    year: date?.getFullYear() ?? new Date().getFullYear(),
  });

  const [view, setView] = useState<ViewStateType>("date");

  const [isVisible, setVisible] = useState<boolean>(false);

  const selectDate = (day: number) => {
    onChange(new Date(monthYear.year, monthYear.month, day));
    setVisible(false);
  };

  const isSelectedDate = (day: number): boolean => {
    if (
      day === date.getDate() &&
      monthYear.month === date.getMonth() &&
      monthYear.year === date.getFullYear()
    ) {
      return true;
    }
    return false;
  };

  const selectMonth = (m: number) => {
    setMonthYear((state) => ({ ...state, month: m }));
    setView("date");
  };

  const selectYear = (y: number) => {
    setMonthYear((state) => ({ ...state, year: y }));
    setView("month");
  };

  useEffect(() => {
    function mouseDownListener(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    }

    if (isVisible) {
      setMonthYear({ month: date.getMonth(), year: date.getFullYear() });
      document.addEventListener("mousedown", mouseDownListener);
    }

    return () => {
      document.removeEventListener("mousedown", mouseDownListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return {
    date,
    visible: monthYear,
    view,
    nextMonth: () =>
      setMonthYear((state) =>
        state.month >= 11
          ? { month: 0, year: state.year + 1 }
          : { month: state.month + 1, year: state.year }
      ),
    prevMonth: () =>
      setMonthYear((state) =>
        state.month <= 0
          ? { month: 11, year: state.year - 1 }
          : { month: state.month - 1, year: state.year }
      ),
    nextYear: () => setMonthYear((state) => ({ ...state, year: state.year + 1 })),
    prevYear: () => setMonthYear((state) => ({ ...state, year: state.year - 1 })),
    nextDecade: () => setMonthYear((state) => ({ ...state, year: state.year + 12 })),
    prevDecade: () => setMonthYear((state) => ({ ...state, year: state.year - 12 })),
    selectMonth,
    selectYear,
    selectDate,
    viewMonths: () => setView("month"),
    viewYears: () => setView("year"),
    isVisible,
    showCalendar: () => setVisible(true),
    toggleCalendar: () => setVisible((state) => !state),
    isSelectedDate,
  };
}
