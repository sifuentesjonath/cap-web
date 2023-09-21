import {
	YearPaymentsType,
	getBaseArray,
	getMonthPaymentsAndTotalByIndex,
	sumValuesAndGetTotal,
} from "@/containers/App/Financials/financials";
import { AllPaymentsType } from "@utils/financialsTable/types";
import useMonthByNumber from "@/hooks/useMonthByNumber";
import moment from "moment";

// == Helpers ==

export type TableRowType = {
	rowName: string[];
	values: number[];
	rowTotal?: string;
	total?: any; // could be string or number but leaving it as any to avoid type warnings
}

interface ICondooTableRow extends TableRowType {
	rowTotal: string;
}

export const getEmptyRow = (name:string[],monthRange:number):TableRowType => {
	return {
		rowName: name,
		values: getBaseArray(monthRange),
		total: 0,
	}
}

export const makeTableRow = (rowName: string[], values: number[], total: number):any => {
	return { rowName, values, total }
}

export const makeCondooTableRow = (rowName: string[], rowTotal: string, values: number[], total?: number):ICondooTableRow => {
	return { rowName, rowTotal, values, total : total ?? ''};
}

export const isEmptyPayment = (payment) => Object.keys(payment).length === 0 ? true : false;

// == Table builders helpers

/** payment: { d2022: number }` `tagetYearKeys: [d2020, d2021, d2022]` */
export const getPaymentsYears = (payment: YearPaymentsType, targetYearKeys: string[]) => {
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

// == Table Builders ==

export const createEmptyTable = ():AllPaymentsType => {
	return {
		expenses: { CondooFees: {}, Maintenance: {}, PropertyTax: {} },
		incomes: { Other: {}, Parking: {}, Rental: {} }
	}
}

/** TableHeaderValues for month view: [0,1,2] -> Jan, Feb, Mar */
export const buildTableBodyByMonthView = (
	paymentData: {name: string, payment: YearPaymentsType}[],
	tableHeaderValues: number[],
	totalRowName: string
	):TableRowType[] => {

	const tableValuesLength = tableHeaderValues.length;
	let lastTotalRow = getEmptyRow([`Total ${totalRowName}`,''], tableValuesLength);
	const tableBodyRows:TableRowType[] = [];

	paymentData.forEach((_payment) => {
		const { name, payment } = _payment;
		const yearKeys = Object.keys(payment);

		if(yearKeys.length === 0){
			const emptyRow = getEmptyRow(['',name], tableValuesLength);
			tableBodyRows.push(emptyRow);
			return;
		}

		yearKeys.forEach((yearKey) => {
			// Calculate body rows
			const { months, total } = getMonthPaymentsAndTotalByIndex(payment[yearKey].months, tableHeaderValues);
			// Total obtained by the picked months:
			const tableRow = makeTableRow(['', name], months, total);
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

/** TableHeaderValues for year view: [..., 2020, 2021, 2022 ]*/
export const buildTableBodyByYearView = (
	paymentData: {name: string, payment: YearPaymentsType}[],
	tableHeaderValues: number[],
	totalRowName:string
) => {

	// convert received values to the object key format that backend sends us
	const targetYearKeys = tableHeaderValues.map((year) => `d${year}`);
	const tableValuesLength = tableHeaderValues.length;

	let totalRow:TableRowType = getEmptyRow([`Total ${totalRowName}`,''], tableValuesLength);
	const tableBody:TableRowType[] = paymentData.map((_payment) => {
		const { name, payment } = _payment;

		if(isEmptyPayment(payment)){
			const emptyRow = getEmptyRow(['', name], tableValuesLength);
			return emptyRow;
		}
		// Calculate year rows
		const { years, total } = getPaymentsYears(payment, targetYearKeys);
		const newRow = makeTableRow(['',name], years, total);
		// Calculate total
		const newTotalRow = sumValuesAndGetTotal(totalRow.values, years);
		totalRow.values = [...newTotalRow.values];
		totalRow.total = newTotalRow.total;

		return newRow;
	})
	tableBody.push(totalRow);
	return tableBody;
}

// == Specific Table Builders

/** Returns array of table items ready to be passed to TableNode variable type */
export const buildRowsForTable = (payments, displayMonthRange, dateView):{
	tableHeader: TableRowType,
	tableBody: any[],
} => {
	const incomeTableHeader = buildIncomeTableHeader(displayMonthRange, dateView);
	const dinamicColumnsLength = incomeTableHeader.values.length;

	const incomeBody = buildIncomesTableBody(payments, 
		incomeTableHeader.values, // month indexes
		dateView
	);

	const incomeTotalRow = incomeBody.pop();

	const expensesBody = buildExpensesTableBody(payments, incomeTableHeader.values, dateView);
	const expenseTotalRow = expensesBody.pop();

	const noiRow = buildNoiTableBody(incomeTotalRow, expenseTotalRow);

	const contributionRow: TableRowType = { // For now is 0
		rowName: ['', 'Contribution to reserve'],
		values: getBaseArray(dinamicColumnsLength),
		total: 0
	}
	const cashSurplusRow = buildCashSurplusTableBody(noiRow, contributionRow);

	// == Conversion ==

	// build total rows now with the new CondooTable Interface
	const condooIncomeTotalRow = makeCondooTableRow(incomeTotalRow.rowName, 'Total Incomes', incomeTotalRow.values, incomeTotalRow.total);
	const expensesHeader = makeCondooTableRow(['Expenses',''], 'Expenses', []);
	const condooExpensesTotalRow = makeCondooTableRow(expenseTotalRow.rowName, 'Total Expenses', expenseTotalRow.values, expenseTotalRow.total);
	const condooNoiRow = makeCondooTableRow(noiRow.rowName, 'Noi', noiRow.values, noiRow.total);
	const condooCashSurplusRow = makeCondooTableRow(cashSurplusRow.rowName, 'Cash Surplus', cashSurplusRow.values, cashSurplusRow.total);
	
	const tableRows = [
		// Income
		...incomeBody,
		condooIncomeTotalRow,
		// Expenses
		expensesHeader,
		...expensesBody,
		condooExpensesTotalRow,
		// Noi
		condooNoiRow,
		contributionRow,
		// Cash Surplus
		condooCashSurplusRow
	]
	
	return {
		tableHeader: incomeTableHeader,
		tableBody: tableRows,
		// tableFooter: cashSurplusRow,
	};
}

/** Returns a `TableRowType`. `values` can be either months or years */
export const buildIncomeTableHeader = (dateRange: Date[], dateView:string):TableRowType => {
	const [from, to] = [...dateRange];

	if(dateView === 'm6'){ // Return all months
		const months:number[] = [0,1,2,3,4,5,6,7,8,9,10,11];
		return makeTableRow(['Incomes',''], [...months], 0);
	}

	if(dateView === 'y1'){ // Return oldest year and at least 2 below it
		const years = [];

		const currentYear = moment().year();
		for(let year = currentYear; year >= from.getFullYear(); year--){
			years.push(year);
		}

		// Ensure there's at least 12 years in years array
		const yearsLength = years.length;
		const limit = 12;
		if(yearsLength <= limit){
			for(let i = yearsLength-1; years.length < limit; i++){
				years.push(years[i]-1);
			}
		}

		return makeTableRow(['Incomes', ''], [...years].reverse(), 0);
	}
}

/** Decides wether to build body as month view or year view */
export const buildIncomesTableBody = ({incomes}:AllPaymentsType, tableHeaderValues: number[], dateView: string): TableRowType[] => {
	const { Parking, Rental, Other } = incomes;

	const _payments = [
		{ name: 'Parking', payment: Parking },
		{ name: 'Rental', payment: Rental },
		{ name: 'Other', payment: Other }
	];

	const tableBodyRow = dateView === 'm6'
		? buildTableBodyByMonthView(_payments, tableHeaderValues, 'Income')
		: buildTableBodyByYearView(_payments, tableHeaderValues, 'Income');
	return tableBodyRow;
}

export const buildExpensesTableBody = ({expenses}:AllPaymentsType, tableHeaderValues: number[], dateView:string): TableRowType[] => {
	const { CondooFees, Maintenance, PropertyTax } = expenses;

	const _payments = [
		{ name: 'Condoo Fees', payment: CondooFees },
		{ name: 'Maintenance', payment: Maintenance },
		{ name: 'Property Tax', payment: PropertyTax },
		// { name: 'Condo Fee', payment: CondoFee }
	];

	const tableBodyRow = dateView === 'm6'
		? buildTableBodyByMonthView(_payments, tableHeaderValues, 'Expenses')
		: buildTableBodyByYearView(_payments, tableHeaderValues, 'Expenses');

	return tableBodyRow;
}

export const buildNoiTableBody = (incomeTotalRow:TableRowType, expenseTotalRow:TableRowType):TableRowType => {
	const noiMonths = incomeTotalRow.values.map((monthPayment, index) => {
		const _noi = monthPayment - expenseTotalRow.values[index]
		return _noi;
	})
	const total = incomeTotalRow.total - expenseTotalRow.total;
	const noiRow = makeTableRow(['NOI',''], noiMonths, total);
	return noiRow;
}

export const buildCashSurplusTableBody = (noiRow:TableRowType, contributionRow:TableRowType):TableRowType => {
	const cashSurplusMonths = noiRow.values.map((month, index) => month - contributionRow.values[index]);
	const total = noiRow.total + contributionRow.total;
	return {
		rowName: ['Cash Surplus', ''],
		values: cashSurplusMonths,
		total: total,
	}
}

// == Table formatting ==

export const processTableHeader = (tableHeader:number[], dateView:string) => {
	if(dateView === 'm6') return tableHeader.map((month) => useMonthByNumber(month+1));
	return tableHeader.reverse();
}

export const formatContribution = (contributions:number[]) => {
	return contributions.map(contribution => {
		return `(${contribution})`
	})
}