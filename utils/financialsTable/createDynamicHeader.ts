import { Column } from '@material-table/core';
import { TableRowType } from "./types";
import createColumnWidth from "./handleDynamicColumnWidth";
import moment from 'moment';

const createDynamicHeader = (tableHeader: TableRowType, dateView: string) => {
	const columnsWidth = createColumnWidth(dateView);
	const { rowName: TableHeaderName, values: tableHeaderValues } = tableHeader;
	
	// Incomes
	const tableColumns: Array<Column<TableRowType>> = [
		{ 
			title: TableHeaderName[0], // Incomes
			field: 'rowName[0]', 
			width: columnsWidth.income, 
			sorting: false 
		},
		{ 
			title: TableHeaderName[1], // Empty
			field: '', 
			width: columnsWidth.category, 
			cellStyle: { 
				fontWeight: 700 
			}, 
			sorting: false 
		},
	];

	// Month columns or Year Columns 
	const currentYear = new Date().getFullYear()
	const toMonthDateFormat = (month) => moment(`${month + 1}-${currentYear}`, 'M-YYYY').format('MM-YYYY');
	const dynamicScrollableColumns: Array<Column<TableRowType>> = tableHeaderValues.map((monthOrYear, index) => {
		const name = dateView === 'm6' ? toMonthDateFormat(monthOrYear) : monthOrYear;
		return { 
			title: name, 
			field: `values[${index}]`, 
			width: columnsWidth.dynamic, 
			sorting: false 
		}
	});

	// Total Column of Header
	const totalColumn: Column<TableRowType> = { 
		title: 'Total', 
		field: 'total', 
		width: columnsWidth.total, 
		cellStyle: { fontWeight: 700, padding: dateView === 'm6' ? '16px 18px' : '16px', },
		sorting: false,
	};

	const tableColumnsAndDynamicMonths = [...tableColumns, ...dynamicScrollableColumns, totalColumn];

	return tableColumnsAndDynamicMonths;
}

export default createDynamicHeader;