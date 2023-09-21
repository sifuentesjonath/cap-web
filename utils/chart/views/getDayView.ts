import moment from "moment";
import { createEmptyChartItems } from "../createChartItem";
import { ChartItem, ChartPaymentsType } from "../types";

const getDayView = (payments: ChartPaymentsType[]):ChartItem[] => {
	const currentDate = moment().format('YYYY-MM-DD');
	const currentDatePayments = payments.filter(({date}) => currentDate == date)
	const isEmptyPayments = currentDatePayments.length === 0;

	if(isEmptyPayments) return createEmptyChartItems(['','','']);

	const chartItems:ChartItem[] = currentDatePayments.map((payment) => {
		return {
			x: '',
			y: payment.amount
		}
	})
	return chartItems
}

export default getDayView;