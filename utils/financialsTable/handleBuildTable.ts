import buildIncomeHeader from "./header";
import { buildCashSurplusRow, buildExpensesRows, buildIncomesRows, buildNoiRow } from "./buildRows";
import buildContributionRow from "./buildRows/contributionRow";
import { createCondooTableRow } from "./createTableItems";

const buildTable = (payments, dateRange, dateView) => {
	const incomeTableHeader = buildIncomeHeader(dateRange, dateView);
	const headerIndexes = incomeTableHeader.values;
	
	const dynamicColumnsLength = incomeTableHeader.values.length;
	const incomesRows = buildIncomesRows(payments, headerIndexes, dateView);
	const incomeTotalRow = incomesRows.pop();

	const expensesRows = buildExpensesRows(payments, headerIndexes, dateView);
	const expensesTotalRow = expensesRows.pop();

	const noiRow = buildNoiRow(incomeTotalRow, expensesTotalRow);
	const contributionRow = buildContributionRow(dynamicColumnsLength);
	const cashSurplusRow = buildCashSurplusRow(noiRow, contributionRow);

	// == Convert to an usable object for table ==
	const
		condooIncomeTotalRow = createCondooTableRow(incomeTotalRow.rowName, 'Total Incomes', incomeTotalRow.values, incomeTotalRow.total),
		expensesHeader = createCondooTableRow(['Expenses',''], 'Expenses', []),
		condooExpensesTotalRow = createCondooTableRow(expensesTotalRow.rowName, 'Total Expenses', expensesTotalRow.values, expensesTotalRow.total),
		condooNoiRow = createCondooTableRow(noiRow.rowName, 'Noi', noiRow.values, noiRow.total),
		condooCashSurplusRow = createCondooTableRow(cashSurplusRow.rowName, 'Cash Surplus', cashSurplusRow.values, cashSurplusRow.total);

	const tableRows = [
		...incomesRows,
		condooIncomeTotalRow,
		expensesHeader,
		...expensesRows,
		condooExpensesTotalRow,
		condooNoiRow,
		contributionRow,
		condooCashSurplusRow,
	]
	return { tableHeader: incomeTableHeader, tableBody: tableRows };
}

export default buildTable;