import { createEmptyRow, createTableRow } from "../createTableItems";
import { TableRowType, YearPaymentsType } from "../types";
import { sumValuesAndGetTotal } from "../handleRowValues";

const createTableItemsByYear = (
	paymentData: {name: string, payment: YearPaymentsType}[],
	tableHeaderValues: number[],
	totalRowName:string
) => {

	// convert received values to the object key format that backend sends us
	const targetYearKeys = tableHeaderValues.map((year) => `d${year}`);
	const tableValuesLength = tableHeaderValues.length;

	let totalRow:TableRowType = createEmptyRow([`Total ${totalRowName}`,''], tableValuesLength);
	const tableBody:TableRowType[] = paymentData.map((_payment) => {
		const { name, payment } = _payment;
		const fieldLayout = [ name, '']

		if(isEmptyPayment(payment)){
			const emptyRow = createEmptyRow(fieldLayout, tableValuesLength);
			return emptyRow;
		}
		// Calculate year rows
		const { years, total } = getPaymentsYears(payment, targetYearKeys);
		const newRow = createTableRow(fieldLayout, years, total);
		// Calculate total
		const newTotalRow = sumValuesAndGetTotal(totalRow.values, years);
		totalRow.values = [...newTotalRow.values];
		totalRow.total = newTotalRow.total;

		return newRow;
	})
	tableBody.push(totalRow);
	return tableBody;
}

const isEmptyPayment = (payment) => Object.keys(payment).length === 0 ? true : false;

const getPaymentsYears = (payment: YearPaymentsType, targetYearKeys: string[]) => {
	const yearKeys = Object.keys(payment);
	let totalYears = 0;

	const years = targetYearKeys.map((yearKey) => {
		if(!yearKeys.includes(yearKey)) return 0;

		const newTotal = payment[yearKey].total;
		totalYears += newTotal;
		return newTotal;
	})
	return {
		years,
		total: totalYears
	}
}

export default createTableItemsByYear;