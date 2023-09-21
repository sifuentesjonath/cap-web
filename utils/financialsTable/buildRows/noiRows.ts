import { createTableRow } from "../createTableItems";
import { TableRowType } from "../types";

const buildNoiRow = (
	incomeTotalRow: TableRowType, 
	expenseTotalRow: TableRowType
):TableRowType => {
	const noiMonths = incomeTotalRow.values.map((monthPayment, index) => {
		const _noi = monthPayment - expenseTotalRow.values[index]
		return _noi;
	})
	const total = incomeTotalRow.total - expenseTotalRow.total;
	const noiRow = createTableRow(['NOI',''], noiMonths, total);
	return noiRow;
}

export default buildNoiRow;