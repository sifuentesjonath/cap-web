import moment from "moment";
import { ChartItem, ChartPaymentsType } from "../types";

const getMonthView = (payments:ChartPaymentsType[]):ChartItem[] => {
	const currentYear = moment().format('YYYY');

	const paymentsByMonth:ChartPaymentsType[] = [];

	for(let i = 1; i <= 12; i++){
		const month = moment(`${currentYear}-${i}`, 'YYYY-MM').format('YYYY-MM');
		const paymentsInMonth = payments.filter(payment => {
			const paymentMonth = moment(payment.date, 'YYYY-MM').format('YYYY-MM');
			return month === paymentMonth;
		})
		const isEmptyMonth = paymentsInMonth.length === 0;
		const date = `${month}`

		if(isEmptyMonth){
			paymentsByMonth.push({
				amount: 0,
				date: month
			})
		}
		else {
			const paymentsReducedMonth = paymentsInMonth.reduce((total, payment) => {
				return {
					amount: total.amount + payment.amount,
					date: month
				}
			})
			paymentsByMonth.push(paymentsReducedMonth);
		}
	}

	const chartItems:ChartItem[] = paymentsByMonth.map(payments => {
		return {
			x: moment(payments.date,'YYYY-MM').format('MM-YYYY'),
			y: payments.amount,
			date: payments.date
		}
	})
	return chartItems;
}

export default getMonthView;