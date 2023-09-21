/** Parses the result of a `Date` as string to a `Date` object
 * Example date: 
 * ```
 * 1990-08-09T06:00:00.000Z
 * ```
 */
const useDateString = (date: string): Date => {
	const splitedDate = date.split('T')[0]; // 1990-08-09T06:00:00.000Z
	const [year, month, day] = splitedDate.split('-'); // e.g. 1990-08-09
	return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

export default useDateString;