import { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';

const chartViewsDesktop:IToggleGroupActiveOption[] = [
	// { title: 'Day', value: 'day' },
	// { title: 'Week', value: 'week' },
	// { title: 'Month', value: 'm6' },
	{ title: '1 Year', value: 'y1' },
	{ title: '5 Year', value: 'y5' },
	// { title: 'All', value: 'all' },
]

const chartViewsMobile:IToggleGroupActiveOption[] = [
	// { title: '1W', value: 'week' },
	// { title: '1M', value: 'm6' },
	{ title: '1Y', value: 'y1' },
	{ title: '5Y', value: 'y5' },
	// { title: 'All', value: 'all' },
]

const getChartView = (device:string):IToggleGroupActiveOption[] => {
	const chartViews = {
		'desktop': chartViewsDesktop,
		'mobile': chartViewsMobile,
	}
	return chartViews[device];
}

export type ChartStyleType = {
	toggleItem: string;
	toggleItemActive: string;
}
const getChartViewSelectorStyles = (device:string):ChartStyleType => {
	const chartStyles = {
		'desktop': {
			toggleItem: 'toggle-item',
			toggleItemActive: 'toggle-item-active'
		},
		'mobile': {
			toggleItem: 'mobile-toggle-item',
			toggleItemActive: 'mobile-toggle-item-active'
		},
	}
	return chartStyles[device];
}

const useChartViewsAndStyles = (isDesktop:boolean):[IToggleGroupActiveOption[], ChartStyleType] => {
	const device = isDesktop ? 'desktop' : 'mobile';
	const chartView = getChartView(device);
	const chartStyle = getChartViewSelectorStyles(device);

	return [chartView, chartStyle];
}

export default useChartViewsAndStyles;