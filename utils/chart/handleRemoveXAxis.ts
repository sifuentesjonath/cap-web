import { ChartItem } from "./types";

const removeXAxis = (payments: ChartItem[]) => {
	return payments.map((payment) => {
		return {...payment, x: ''}
	})
}

export default removeXAxis;