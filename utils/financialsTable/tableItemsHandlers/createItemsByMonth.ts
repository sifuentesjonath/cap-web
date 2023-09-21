import { createEmptyRow, createTableRow } from "../createTableItems";
import { TableRowType, YearPaymentsType } from "../types";
import { getMonthPaymentsAndTotalByIndex, sumValuesAndGetTotal } from "../handleRowValues";

const createTableItemsByMonth = (
	paymentData: {name: string, payment: YearPaymentsType }[],
	tableHeaderValues: number[],
	totalRowName: string
):TableRowType[] => {

	const tableValuesLength = tableHeaderValues.length;
	let lastTotalRow = createEmptyRow([`Total ${totalRowName}`,''], tableValuesLength);
	const tableBodyRows:TableRowType[] = [];

	paymentData.forEach((_payment) => {
		const { name, payment } = _payment;
		const yearKeys = Object.keys(payment);
		const fieldLayout = [name, ''];

		if(yearKeys.length === 0) {
			const emptyRow = createEmptyRow(fieldLayout, tableValuesLength);
			tableBodyRows.push(emptyRow);
			return;
		}

		yearKeys.forEach((yearKey) => {
			// Calculate body rows
			const { months, total } = getMonthPaymentsAndTotalByIndex(payment[yearKey].months, tableHeaderValues);
			// Total obtained by the picked months:
			const tableRow = createTableRow(fieldLayout, months, total);
			// if we want the total of all the year:
			// const tableRow = makeTableRow(['', name], months, payment[yearKey].total);

			// Calculate total row
			const newTotalRow = sumValuesAndGetTotal(lastTotalRow.values, months);
			lastTotalRow.values = [...newTotalRow.values];
			lastTotalRow.total = newTotalRow.total;

			tableBodyRows.push(tableRow);
		})
	})

	tableBodyRows.push(lastTotalRow);
	return tableBodyRows;
}

export default createTableItemsByMonth;