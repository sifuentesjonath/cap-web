import moment from "moment";
import { ChartItem, ChartPaymentsType } from "../types";

const getYearViewAscendent = (payments:ChartPaymentsType[]):ChartItem[] => {
	let startYear = moment().year();
	const times = 5;

	const chartPayments:ChartPaymentsType[] = [];
	for(let i = 0; i < times; i++){
		const currentYear = startYear;

		const yearPayments = payments.filter(payment => {
			const paymentYear = moment(payment.date).year();
			return currentYear === paymentYear;
		});
		const isEmptyYearPayments = yearPayments.length === 0;

		if(isEmptyYearPayments) {
			chartPayments.push({
				amount: 0,
				date: currentYear.toString()
			})
		}
		else {
			const paymentsInAYear = yearPayments.reduce((total, payment) => {
				return {
					amount: total.amount + payment.amount,
					date: currentYear.toString()
				}
			});
			chartPayments.push(paymentsInAYear);
		}

		startYear += 1;
	}

	const chartItems:ChartItem[] = chartPayments.map(payment => {
		return {
			y: payment.amount,
			x: payment.date,
			date: payment.date,
		}
	})
	return chartItems;
}

export default getYearViewAscendent;