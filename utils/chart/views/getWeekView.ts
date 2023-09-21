import moment from "moment";
import { ChartItem, ChartPaymentsType } from "../types";

const getWeekView = (payments:ChartPaymentsType[]):ChartItem[] => {
	// Optimization: better use startOfWeek and increment until reaches endOfWeek
	// 	this way is ordered while it is created
	const startOfWeek = moment().startOf('week');
	const endOfWeek = moment().endOf('week');

	const paymentsInWeek = payments.filter(({date}) => {
		const comparableDate = moment(date);
		return startOfWeek < comparableDate && comparableDate < endOfWeek;
	})

	// get the sum of payments with the same day
	const days = [
		'Monday', 'Tuesday', 'Wednesday',
		'Thursday', 'Friday', 'Saturday', 'Sunday'
	]

	const sortedPayments:ChartPaymentsType[] = [];
	days.forEach(day => {
		const paymentsInDay = paymentsInWeek.filter(payment => {
			const paymentDay = moment(payment.date).format('dddd');
			return day === paymentDay;
		})
		const isEmptyPaymentsInDay = paymentsInDay.length === 0;

		if(isEmptyPaymentsInDay){
			sortedPayments.push({
				amount: 0,
				date: startOfWeek.day(day).format('YYYY-MM-DD')
			})
			return;
		}

		const paymentAmountOnDay = paymentsInDay.reduce((total, current) => {
			const payment:ChartPaymentsType = {
				amount: total.amount + current.amount,
				date: total.date
			}
			return payment;
		})

		sortedPayments.push(paymentAmountOnDay);
	})

	const chartItems:ChartItem[] = sortedPayments.map((payment) => {
		const day = moment(payment.date).format('dddd');
		return {
			x: day,
			y: payment.amount
		}
	})
	return chartItems
}

export default getWeekView;