import { AllPaymentsType, TableRowType } from "../types";
import getTableView from "../tableItemsHandlers";

const buildIncomesRows = (
	{ incomes }: AllPaymentsType, 
	tableHeaderValues: number[], 
	dateView: string
): TableRowType[] => {
	const { Parking, Rental, Other } = incomes;
	const _payments = [
		{ name: 'Parking', payment: Parking },
		{ name: 'Rental', payment: Rental },
		{ name: 'Other', payment: Other }
	];
	return getTableView(dateView, _payments, tableHeaderValues, 'Income');
}

export default buildIncomesRows;