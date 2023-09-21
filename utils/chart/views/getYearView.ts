import moment from "moment";
import { ChartItem, ChartPaymentsType } from "../types";

const getYearView = (payments:ChartPaymentsType[]):ChartItem[] => {
	const currentYear = moment().format('YYYY');
	const paymentsByMonth:ChartPaymentsType[] = [];

	for(let i = 1; i <= 12; i++){
		const month = moment(`${currentYear}-${i}`, 'YYYY-MM').format('YYYY-MM');
		// Grab all the payments of the month
		const paymentsInMonth = payments.filter(payment => {
			const paymentMonth = moment(payment.date, 'YYYY-MM').format('YYYY-MM');
			return month === paymentMonth;
		})
		// Reduce them in a single object and push it 
		const monthPayments = paymentsInMonth.reduce((total, { amount }) => ( total + amount ), 0);
		paymentsByMonth.push({
			amount: monthPayments,
			date: month,
		});
	}
	// Convert to chart Items
	const chartItems:ChartItem[] = paymentsByMonth.map(payments => {
		return {
			x: moment(payments.date,'YYYY-MM').format('MM-YYYY'),
			y: payments.amount,
			date: payments.date
		}
	})
	return chartItems;
}

export default getYearView;