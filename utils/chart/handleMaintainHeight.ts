import { ChartItem } from "./types";

const maintainChartHeight = (payments: ChartItem[]):ChartItem[] => {
	let previousPayment = payments[0].y;
	const items:ChartItem[] = payments.map(item => {
		let newItem = item;

		if(newItem.y === 0) newItem.y = previousPayment;
		else previousPayment = newItem.y;
		
		return newItem;
	})

	return items;
}

export default maintainChartHeight;