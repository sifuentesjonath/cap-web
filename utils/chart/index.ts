// Main chart handling
import getViewType from "./views";
import getTotalAmountOfYAxis from "./getTotalAmountOf_Y_Axis";
import { getInitialHeight, setInitialHeight } from "./handleInitialHeight";
import maintainAscendentHeightOnChart from "./handleGoInAscendentHeightOnly";
import maintainChartHeight from "./handleMaintainHeight";
// Other helpers
import getChartConfiguration from "./getConfiguration";
import removeXAxis from "./handleRemoveXAxis"
// Types
import { ChartDataType, ChartPaymentsType } from "./types";

const getChartData = (view: string, payments: ChartPaymentsType[]):ChartDataType => {
	let chartPayments = getViewType(view, payments);
	const paymentsToDate = getTotalAmountOfYAxis(chartPayments);
	const initialHeight = getInitialHeight(payments, paymentsToDate);

	chartPayments = setInitialHeight(chartPayments, initialHeight);
	chartPayments = maintainAscendentHeightOnChart(chartPayments);
	chartPayments = maintainChartHeight(chartPayments);

	return { chartPayments, paymentsToDate };
}

export {
	getChartConfiguration,
	removeXAxis,
}

export type {
	ChartDataType,
	ChartPaymentsType,
}

export default getChartData;