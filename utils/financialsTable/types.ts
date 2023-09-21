import { Column } from '@material-table/core';

export type CondooTableType = {
	tableHeader: Column<TableRowType>[],
	tableBody: TableRowType[],
}

export type TableRowType = {
	rowName: string[];
	values: number[];
	rowTotal?: string;
	total?: any; // could be string or number but leaving it as any to avoid type warnings
}

export interface ICondooTableRow extends TableRowType {
	rowTotal: string;
}

export type YearPaymentsType = {
	[yearKey: string]: {
		months: number[];
		total: number;
	}
}

export type AllPaymentsType = {
	incomes: {
		Parking?: YearPaymentsType;
		Rental?: YearPaymentsType;
		Other?: YearPaymentsType;
	};
	expenses?: {
		CondooFees?: YearPaymentsType;
		Maintenance?: YearPaymentsType;
		PropertyTax?: YearPaymentsType;

		Management_Fees?: YearPaymentsType;
		Utilities?: YearPaymentsType;
		Leasing_Fees?: YearPaymentsType;
		Insurance?: YearPaymentsType;
	};
}
