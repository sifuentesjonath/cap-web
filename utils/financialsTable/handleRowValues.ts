import { createBaseArray } from "./createTableItems";

export const getMonthPaymentsAndTotalByIndex = (months:number[], indexes:number[]) => {
	const grabbedMonths = indexes.map((index) => months[index]);
	const total = grabbedMonths.reduce((total, payment) => total + payment);
	return {
		months: grabbedMonths,
		total: total
	}
}

export const sumValuesAndGetTotal = (monthPayments:number[], newMonthPayments:number[]) => {
	const isNotSameLength = monthPayments.length != newMonthPayments.length;
	let total = 0;

	const _monthPayments = [...monthPayments];
	const _newMonthPayments = isNotSameLength ? createBaseArray(_monthPayments.length) : [...newMonthPayments];
	
	const mergedPayments = _monthPayments.map((paymentAmount, index) => {
		const newValueOnThisMonth = paymentAmount + _newMonthPayments[index];
		total += newValueOnThisMonth;
		return newValueOnThisMonth;
	})

	return {
		values: mergedPayments,
		total: total,
	}
}