import createDynamicHeader from "./createDynamicHeader";
import buildTable from "./handleBuildTable";
import { AllPaymentsType, CondooTableType } from "./types";

const buildFinancialsTable = (
	payments: AllPaymentsType,
	dateView: string,
	dateRange: Date[],
):CondooTableType => {
	if(!payments) return { tableHeader: null, tableBody: null };
	const { tableHeader, tableBody, } = buildTable(payments, dateRange, dateView);
	const dynamicHeader = createDynamicHeader(tableHeader, dateView);
	return {
		tableHeader: dynamicHeader,
		tableBody
	}
}


export default buildFinancialsTable;