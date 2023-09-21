import { createTableRow } from "@utils/financialsTable/createTableItems";

const buildIncomeTableHeaderMonthView = () => {
	const months = [0,1,2,3,4,5,6,7,8,9,10,11];
	return createTableRow(['Incomes',''], [...months], 0);
}

export default buildIncomeTableHeaderMonthView;