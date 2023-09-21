import { Column } from '@material-table/core';
import { AllPaymentsType, ICondooTableRow, TableRowType } from './types';

// export const createTableColumn = ():Column<TableRowType> => {}

export const createTableRow = (rowName: string[], values: number[], total: number):TableRowType => {
	return { rowName, values, total }
}

export const createEmptyRow = (name: string[], range: number):TableRowType => {
	return { rowName: name, values: new Array(range).fill(0), total: 0 }
}

export const createBaseArray = (size: number) => {
	const baseArray = new Array(size).fill(0);
	return [...baseArray];
}

export const createCondooTableRow = (rowName: string[], rowTotal: string, values: number[], total?: number):ICondooTableRow => {
	return { rowName, rowTotal, values, total: total ?? undefined };
}