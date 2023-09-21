/** Fomats a number into a readable ammount 
 * 
 * e.g: `2340 -> 2,340`
*/
const useAmountFormatter = (amount: number): string => {
	if (amount < 1e3)
		return Math.round(amount).toString();

	if (amount >= 1e3 && amount < 1e6)
		return +(amount / 1e3).toFixed(1) + "K";

	if (amount >= 1e6 && amount < 1e9)
		return +(amount / 1e6).toFixed(1) + "M";

	if (amount >= 1e9 && amount < 1e12)
		return +(amount / 1e9).toFixed(1) + "B";

	if (amount >= 1e12)
		return +(amount / 1e12).toFixed(1) + "T";
}

export default useAmountFormatter;