import { Options as CSVExportOptions } from 'export-to-csv';
import { Column } from '@material-table/core';
import { TableRowType } from '@/components/block/CondooTableFinancials/TableFinancials';

const useCondooTableFinancialsExport = (fileName: string, tableHeader: Column<TableRowType>[], tableBody: TableRowType[]) => {
	const options = getCSVExportOptions(fileName, tableHeader);
	const csv = generateTableCSV(tableBody)

	return {
		options, 
		csv
	}
}

const getCSVExportOptions = (filename: string, tableHeader: Column<TableRowType>[]):CSVExportOptions => {
	const options:CSVExportOptions = {
		filename,
		fieldSeparator: ',',
		quoteStrings: '"',
		decimalSeparator: '.',
		showLabels: true,
		showTitle: true,
		title: filename,
		useTextFile: false,
		useBom: true,
		useKeysAsHeaders: false,
		headers: [...tableHeader.map(header => header.title.toString())] // <-- Won't work with useKeysAsHeaders present!
	}
	return options;
}

const generateTableCSV = (tableBody: TableRowType[]) => {
	const CSV = tableBody.map(({ rowName, values ,total }) => {
		const dynamicColumns: number[] = values;

		if (dynamicColumns.length === 0) 
			return getDynamicRow(rowName[0], rowName[1], getEmptyGlDynamicRow(), total)

		// iterate over dynamic values to display them as rows
		const dynamicValues = dynamicColumns.reduce((accumulator, currentMonthValue, index) => {
			const csvDynamicRow = {
				...accumulator,
				[`glD${index}`]: currentMonthValue,
			}
			return csvDynamicRow;
		}, {});

		return getDynamicRow(rowName[0], rowName[1], dynamicValues, total);
	})

	return CSV;
}

const getEmptyGlDynamicRow = () => {
	const emptyDynamicRow = new Array(15).fill("").reduce((accumulator, value, index) => {
		return {
			...accumulator,
			[`glD${index}`]: value,
		}
	}, {});

	return emptyDynamicRow;
}

const getDynamicRow = (glAccountType: string, glCategory: string, dynamicColumn: {[key: string]: number|string}, total: number) => {
	return {
		glAccountType, glCategory, ...dynamicColumn, total
	}
}


export default useCondooTableFinancialsExport;