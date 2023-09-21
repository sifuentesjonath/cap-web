import { AllPaymentsType, TableRowType } from "../types";
import getTableView from "../tableItemsHandlers";

const buildExpensesRows = (
	{ expenses }: AllPaymentsType, 
	tableHeaderValues: number[], 
	dateView:string
): TableRowType[] => {
	const { CondooFees, Maintenance, PropertyTax, Management_Fees, Utilities, Leasing_Fees, Insurance } = expenses;
	const _payments = [
		{ name: 'Condoo Fees', payment: CondooFees },
		{ name: 'Maintenance', payment: Maintenance },
		{ name: 'Property Tax', payment: PropertyTax },
		{ name: 'Management Fees', payment: Management_Fees },
		{ name: 'Utilities', payment: Utilities },
		{ name: 'Leasing Fees', payment: Leasing_Fees },
		{ name: 'Insurance', payment: Insurance },
	];
	return getTableView(dateView, _payments, tableHeaderValues, 'Expenses');
}
export default buildExpensesRows;