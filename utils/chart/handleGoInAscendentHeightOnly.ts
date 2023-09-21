import { ChartItem } from "./types";

const maintainAscendentHeightOnChart = (payments: ChartItem[]):ChartItem[] => {
	const _payments = [...payments];
	const firstPayment = _payments.shift();
	let pickedAmount = firstPayment ? firstPayment.y : 0;
	
	const incrementedPayments:ChartItem[] = _payments.map((payment, index) => {
		const amount = payment.y;
		if(amount === 0) return payment;

		pickedAmount += amount;
		return {
			...payment,
			y: pickedAmount,
		}
	})
	
	incrementedPayments.unshift(firstPayment);
	return incrementedPayments;
}

export default maintainAscendentHeightOnChart;