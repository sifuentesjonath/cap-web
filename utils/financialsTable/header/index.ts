import { TableRowType } from "../types";
import buildIncomeTableHeaderMonthView from "./getHeaderMonthView"
import buildIncomeTableHeaderYearView from "./getHeaderYearView"
import buildIncomeTableHeaderYearAscendentView from "./getHeaderYearAscendentView"

const buildIncomeHeader = (dateRange: Date[], dateView:string):TableRowType => {
	switch(dateView) {
		case 'm6': return buildIncomeTableHeaderMonthView();
		case 'y1': return buildIncomeTableHeaderYearView(dateRange);
		case 'y1-asc': return buildIncomeTableHeaderYearAscendentView(dateRange);
		default: {
			console.log('Unknown header view');
			return buildIncomeTableHeaderMonthView();
		}
	}
}

export default buildIncomeHeader;