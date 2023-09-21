import { ChartItem } from "./types";

// export const createChartItem = (x, y, date?):ChartItem => {
// 	return { x, y, date }
// }

export const createEmptyChartItems = (nameTags: string[]):ChartItem[] => {
	const emptyChart:ChartItem[] = nameTags.map(nameTag => {
		return {
			x: nameTag,
			y: 0,
		}
	})
	return emptyChart;
}