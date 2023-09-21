import { createBaseArray } from "../createTableItems";
import { TableRowType } from "../types";

const buildContributionRow = (size: number): TableRowType => {
	const fieldLayout = ['Contribution to reserve', '']
	return {
		rowName: fieldLayout,
		values: createBaseArray(size),
		total: 0
	}
}

export default buildContributionRow;