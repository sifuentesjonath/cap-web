import { ApexOptions } from "apexcharts";
import { ChartPaymentsType } from "./types";
import useAmountFormatter from "@/hooks/useAmountFormatter";

const getChartConfiguration = (payments: ChartPaymentsType[]):ApexOptions => {
	return {
		chart: {
			id: 'area-datetime',
			zoom: { autoScaleYaxis: true },
			toolbar: { show: false },
			animations: {
				enabled: true,
				easing: 'easeinout',
				speed: 800,
				animateGradually: {
					enabled: true,
					delay: 1500,
				},
				dynamicAnimation: {
					enabled: true,
					speed: 350,
				},
			},
		},
		colors: ['#00C092'],
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 1,
				opacityTo: 0.9,
				stops: [0, 100],
			},
		},
		stroke: { curve: 'stepline' },
		dataLabels: { enabled: false },
		xaxis: {
			// type: 'datetime', // TODO-FIXME: Somehow this ruins the view
			// tickAmount: 6,
			// min: new Date('01 Jan 2020').getTime(),
			labels: {
				style: {
					colors: '#C1C1C1',
					fontSize: '12px',
				},
			},
			axisBorder: { show: false },
			axisTicks: { show: false },
			tooltip: { enabled: false },
		},
		yaxis: {
			labels: {
				style: {
					// colors: payments.length != 0 ? '#C1C1C1' : '#F9F9F9',
					colors: '#C1C1C1',
					fontSize: '12px',
				},
				formatter: function(val, index) {
					return val != 0 ? `$${useAmountFormatter(val)}` : `$${val}`
				}
			},
			min: 0,
			tickAmount: 3,
			forceNiceScale: true,
		},
		grid: { show: true },
		markers: { size: 0 },
		tooltip: {
			followCursor: true,
			fillSeriesColor: true,
			x: { show: true },
			fixed: { enabled: false },
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				const pointedDate = series[seriesIndex][dataPointIndex] != 0 
					? `${w.config.series[seriesIndex].data[dataPointIndex].date}` : '';

				const previousPointedPayment = series[seriesIndex][dataPointIndex-1];
				const pointedPayment = series[seriesIndex][dataPointIndex];

				if(previousPointedPayment == pointedPayment) return ``;
				if(pointedPayment === 0) return ``;

				const date = !pointedDate.includes('undefined') ? pointedDate : '';
				const previousPayment = previousPointedPayment ? previousPointedPayment : 0;
				const payment = `$${pointedPayment - previousPayment}`;

				return `
					<div class="font-primary flex flex-col m-2 items-center justify-center">
						<p>Cash Flow As Of</p>
						<p class="font-semibold text-black text-base">
							${date}
						</p>
						<span class="text-base font-bold text-[#00C092]">
							${payment}
						</span>
					</div>
				`;
			},
		},
	}
}

export default getChartConfiguration;