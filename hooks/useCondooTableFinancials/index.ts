import { Column } from '@material-table/core';
import useMonthByNumber from '@/hooks/useMonthByNumber';
import { TableRowType, buildRowsForTable } from '@/components/block/CondooTableFinancials/TableFinancials'
import { AllPaymentsType } from '@utils/financialsTable/types';

export type CondooTableType = {
	tableHeader: Column<TableRowType>[],
	tableBody: TableRowType[],
}

export const buildCondooTableFinancials = (
	payments: AllPaymentsType,
	dateView: string,
	dateRange: Date[],
):CondooTableType => {
	const {
		tableHeader,
		tableBody,
	} = buildRowsForTable(payments, dateRange, dateView);

	const { rowName: TableHeaderName, values: tableHeaderValues } = tableHeader;

	const columnWidthHandler = {
		// these can maintain table layout 
		income: dateView == 'm6' ? 200 : 200,
		category: dateView == 'm6' ? 250 : 250,
		dynamic: dateView == 'm6' ? 100 : 100,
		total: dateView == 'm6' ? 100 : 100,

	}

	/** == Build Header Columns == 
	 *  1.- Income
	 *  2.- Category column which has an empty string
	 *  3.- Month/Year columns
	 *  4.- Total column
	 */

	// 'Incomes' column and Category column 
	const tableColumns: Array<Column<TableRowType>> = [
		{ 
			title: TableHeaderName[0], // Incomes
			field: 'rowName[0]', 
			width: columnWidthHandler.income, 
			sorting: false 
		},
		{ 
			title: TableHeaderName[1], // Empty
			field: 'rowName[1]', 
			width: columnWidthHandler.category, 
			cellStyle: { 
				fontWeight: 700 
			}, 
			sorting: false 
		},
	];

	// Month columns or Year Columns 
	const dinamicScrollableColumns: Array<Column<TableRowType>> = tableHeaderValues.map((monthOrYear, index) => {
		const name = dateView === 'm6' ? useMonthByNumber(monthOrYear) : monthOrYear;
		return { title: name, field: `values[${index}]`, width: columnWidthHandler.dynamic, sorting: false }
	});

	// Total Column of Header
	const totalColumn: Column<TableRowType> = { 
		title: 'Total', 
		field: 'total', 
		width: columnWidthHandler.total, 
		cellStyle: { 
			fontWeight: 700, 
			padding: dateView === 'm6' ? '16px 18px' : '16px',
		},
		sorting: false,
	};

	const tableColumnsAndDinamicMonths = [...tableColumns, ...dinamicScrollableColumns, totalColumn];

	return {
		tableHeader: tableColumnsAndDinamicMonths, 
		tableBody 
	}
}

const useCondooTableFinancials = (
	payments: AllPaymentsType,
	dateView: string,
	dateRange: Date[],
) => {
	if(!payments) {
		return { tableHeader: null, tableBody: null };
	}
	const { tableHeader, tableBody } = buildCondooTableFinancials(payments, dateView, dateRange);
	return {
		tableHeader, 
		tableBody
	}
}

export default useCondooTableFinancials;