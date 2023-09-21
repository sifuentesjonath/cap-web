import { ChartItem, ChartPaymentsType } from "./types";

export const getInitialHeight = (payments: ChartPaymentsType[], paymentsToDate:number):number => {
	if(payments.length === 0) return 0;

	const total = payments.reduce((total, payment) => {
		return {
			amount: total.amount + payment.amount,
			date: ''
		}
	})
	return total.amount - paymentsToDate;
}

export const setInitialHeight = (payments: ChartItem[], initialHeight: number):ChartItem[] => {
	let paymentsToChart = [...payments];
	let firstPayment = paymentsToChart[0];
	firstPayment.y += initialHeight;
	paymentsToChart[0] = firstPayment;
	return paymentsToChart;
}