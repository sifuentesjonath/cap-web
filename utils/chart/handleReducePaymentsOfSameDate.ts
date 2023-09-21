import sortPayments from "./handleSortPayments";
import { ChartPaymentsType } from "./types";

/** Reduce multiple payments from a same date to only one object */
const reducePaymentsOfSameDate = (payments:ChartPaymentsType[]) => {
	let newPayments:ChartPaymentsType[] = [];
	const notFound = -1;
	
	payments.forEach(payment => {
		const foundPaymentIndex = newPayments.findIndex(item => item.date === payment.date);
		if(foundPaymentIndex === notFound) {
			newPayments.push(payment);
			return;
		}

		const { amount, date } = newPayments[foundPaymentIndex];
		const newPayment:ChartPaymentsType = {
			amount: payment.amount + amount,
			date: date
		}
		newPayments[foundPaymentIndex] = newPayment;
	})

	return sortPayments(newPayments);
}

export default reducePaymentsOfSameDate;