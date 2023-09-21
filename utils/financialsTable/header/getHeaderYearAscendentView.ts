import moment from "moment";
import { createTableRow } from "@utils/financialsTable/createTableItems";

const buildIncomeTableHeaderYearView = (dateRange: Date[]) => {
	const [from, to] = [...dateRange];
	const years = [];

	const currentYear = moment().year();
	const yearLimit = currentYear+5;

	for(let year = currentYear; year <= yearLimit; year++){
		years.push(year);
	}

	// Ensure there's at least 12 years in years array
	const yearsLength = years.length;
	const limit = 12;
	if(yearsLength <= limit){
		for(let i = yearsLength-1; years.length < limit; i++){
			years.push(years[i]+1);
		}
	}

	return createTableRow(['Incomes', ''], [...years], 0);
}

export default buildIncomeTableHeaderYearView;