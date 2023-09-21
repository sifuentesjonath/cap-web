import { TableRowType } from "../types";

const buildCashSurplusRow = (
	noiRow:TableRowType,
	contributionRow:TableRowType
):TableRowType => {
	const cashSurplusMonths = noiRow.values.map((month, index) => month - contributionRow.values[index]);
	const total = noiRow.total + contributionRow.total;
	return {
		rowName: ['Cash Surplus', ''],
		values: cashSurplusMonths,
		total: total,
	}
}

export default buildCashSurplusRow;