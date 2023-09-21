import moment from "moment";
import reducePaymentsOfSameDate from "../handleReducePaymentsOfSameDate";
import { createEmptyChartItems } from "../createChartItem";
import { ChartItem, ChartPaymentsType } from "../types";

const getAllView = (payments:ChartPaymentsType[]):ChartItem[] => {
	const isEmptyPayments = payments.length === 0;

	if(isEmptyPayments) return createEmptyChartItems(['','',''])

	const reducedPayments = reducePaymentsOfSameDate([...payments]);
	const chartPayments:ChartItem[] = reducedPayments.map(payment => {
		return {
			x: payment.date,
			y: payment.amount,
			date: moment(payment.date).format('MMMM D YYYY')
		}
	})
	return chartPayments;
}

export default getAllView;