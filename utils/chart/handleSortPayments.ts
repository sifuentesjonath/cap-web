import moment from "moment";
import { ChartPaymentsType } from "./types";

const sortPayments = (payments: ChartPaymentsType[]) => {
	return payments.sort((paymentA, paymentB) => {
		const firstDate = moment(paymentA.date).valueOf();
		const secondDate = moment(paymentB.date).valueOf();
		return firstDate - secondDate;
	})
}

export default sortPayments;