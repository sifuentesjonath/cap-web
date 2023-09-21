export const dayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];


/**
 * ======== Util functions ========
 */

/**
 * For formatting date
 * @param date
 */
export function getFormattedDate(date: Date): string {
	const monthNumber = date.getMonth();
	const 
		day = date.getDate(),
		monthName = monthNames[monthNumber],
		year = date.getFullYear();

	return `${day} ${monthName} ${year}`;
}

/**
 * Beginning of Day of Week of a Month
 * @param date
 */
export function getBeginningDayOfWeek(m: number, y: number): number {
	return new Date(y, m, 1).getDay();
}

/**
 * Is Leap Year
 * @param year
 */
export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Days in month
 */
export function getDaysInMonth(month: number, year: number) {
	switch (month) {
		case 0: case 2: case 4: case 6: case 7: case 9: case 11:
			return 31;
		case 1:
			return isLeapYear(year) ? 29 : 28;
		default:
			return 30;
	}
}