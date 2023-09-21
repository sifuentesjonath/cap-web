import moment from "moment";

/** Returns month name by number */
const useMonthByNumber = (monthNumber: number) => {
	return moment.months(monthNumber);
}

export default useMonthByNumber;