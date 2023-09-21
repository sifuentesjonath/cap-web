import { AllPaymentsType, YearPaymentsType } from '../types'

const formatPaymentsToTable = (payments: any) => {
	const paymentsCategory = Object.keys(payments); // Incomes, Expenses
	let formattedPayments = {};

	paymentsCategory.forEach(category => {
		const subCategories = Object.keys(payments[category]);
		formattedPayments[category] = {};

		subCategories.forEach(subCategory => {
			const paymentData = payments[category][subCategory]
			const formattedPayment = formatPaymentAsMonthOrYearKey(paymentData);
			formattedPayments[category][subCategory] = formattedPayment;
		});
	});

	return formattedPayments;
}

/** Returns payments in a concrete type for using, gets total of each year on the run */
const formatPaymentAsMonthOrYearKey = (payments:any):YearPaymentsType => {
	if(payments.length === 0) return {};

	let paymentsByDate:YearPaymentsType = {};
	payments.forEach((payment) => {
		const [year, month] = payment.Date.split("-");
		const yearKey  = `d${year}`;
		const yearMonthKey = (parseInt(month)-1).toString();

		// If year key is not on object create it
		if(!paymentsByDate.hasOwnProperty(yearKey)){
			paymentsByDate[yearKey] = {months: new Array(12).fill(0), total: 0}
		}

		paymentsByDate[yearKey]['months'][yearMonthKey] += payment.Amount;    
		paymentsByDate[yearKey]['total'] += payment.Amount;    
	});

	return paymentsByDate;
}

export default formatPaymentsToTable;