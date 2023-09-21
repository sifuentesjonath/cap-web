import { ChartItem } from "./types";

const getTotalAmountOfYAxis = (chartItems: ChartItem[]):number => {
	if(chartItems.length === 0) return 0;

	const total = chartItems.reduce((total, item) => {
		return {
			x: total.x,
			y: total.y + item.y
		}
	})
	return total.y;
}

export default getTotalAmountOfYAxis;