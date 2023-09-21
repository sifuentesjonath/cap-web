import { ApexOptions } from 'apexcharts';
import useAmountFormatter from '@/hooks/useAmountFormatter';
import moment from 'moment';

// Types

export type ChartItem = {
	x: string;
	y: number;
	date?: string;
}

export type ChartPaymentsType = {
	amount: number;
	date: string;
}

type ChartDataType = {
	chartPayments: ChartItem[];
	paymentsToDate: number;
}

// == Chart helpers ==

const getNumbersWithinRange = (start, end) => {
	return Array.from(Array(end - start + 1).keys()).map(x => x + start);
}

const orderPayments = (payments: ChartPaymentsType[]) => {
	return payments.sort((paymentA, paymentB) => {
		const firstDate = moment(paymentA.date).valueOf();
		const secondDate = moment(paymentB.date).valueOf();
		return firstDate - secondDate;
	})
}

/* If are multiple payments in a certain date reduces them to only one object */
const reducePayments = (payments:ChartPaymentsType[]) => {
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

	return orderPayments(newPayments);
}

// == Chart views ==
const getEmptyChartData = (nameTags: string[]):ChartItem[] => {
	const emptyChart:ChartItem[] = nameTags.map(nameTag => {
		return {
			x: nameTag,
			y: 0,
		}
	})
	return emptyChart;
}

const getDay = (payments: ChartPaymentsType[]):ChartItem[] => {
	const currentDate = moment().format('YYYY-MM-DD');
	const currentDatePayments = payments.filter(({date}) => currentDate == date)
	const isEmptyPayments = currentDatePayments.length === 0;

	if(isEmptyPayments) return getEmptyChartData(['','','']);

	const chartItems:ChartItem[] = currentDatePayments.map((payment) => {
		return {
			x: '',
			y: payment.amount
		}
	})
	return chartItems
}

const getWeek = (payments:ChartPaymentsType[]):ChartItem[] => {
	// Optimization: better use startOfWeek and increment until reaches endOfWeek
	// 	this way is ordered while it is created
	const startOfWeek = moment().startOf('week');
	const endOfWeek = moment().endOf('week');

	const paymentsInWeek = payments.filter(({date}) => {
		const comparableDate = moment(date);
		return startOfWeek < comparableDate && comparableDate < endOfWeek;
	})

	// get the sum of payments with the same day
	const days = [
		'Monday', 'Tuesday', 'Wednesday',
		'Thursday', 'Friday', 'Saturday', 'Sunday'
	]

	const sortedPayments:ChartPaymentsType[] = [];
	days.forEach(day => {
		const paymentsInDay = paymentsInWeek.filter(payment => {
			const paymentDay = moment(payment.date).format('dddd');
			return day === paymentDay;
		})
		const isEmptyPaymentsInDay = paymentsInDay.length === 0;

		if(isEmptyPaymentsInDay){
			sortedPayments.push({
				amount: 0,
				date: startOfWeek.day(day).format('YYYY-MM-DD')
			})
			return;
		}

		const paymentAmountOnDay = paymentsInDay.reduce((total, current) => {
			const payment:ChartPaymentsType = {
				amount: total.amount + current.amount,
				date: total.date
			}
			return payment;
		})

		sortedPayments.push(paymentAmountOnDay);
	})

	const chartItems:ChartItem[] = sortedPayments.map((payment) => {
		const day = moment(payment.date).format('dddd');
		return {
			x: day,
			y: payment.amount
		}
	})
	return chartItems
}

const getMonth = (payments:ChartPaymentsType[]):ChartItem[] => {
	const currentMonth = moment().format('YYYY-MM');
	const lastDayOfMonth = moment().endOf('month').format('DD');

	const paymentsInMonth = payments.filter(payment => {
		const month = moment(payment.date).format('YYYY-MM');
		return currentMonth == month;
	})
	const isEmptyMonth = paymentsInMonth.length === 0;

	if(isEmptyMonth) return getEmptyChartData(['1','15', lastDayOfMonth]);

	const paymentsToChart = reducePayments([...paymentsInMonth]);
	const chartItems:ChartItem[] = paymentsToChart.map(payment => {
		const day = moment(payment.date).format('dddd D');
		return {
			x: day,
			y: payment.amount,
			date: day
		}
	})

	return chartItems;
}

const getYear = (payments:ChartPaymentsType[]):ChartItem[] => {
	const currentYear = moment().format('YYYY');

	const paymentsByMonth:ChartPaymentsType[] = [];

	for(let i = 1; i <= 12; i++){
		const month = moment(`${currentYear}-${i}`, 'YYYY-MM').format('YYYY-MM');
		const paymentsInMonth = payments.filter(payment => {
			const paymentMonth = moment(payment.date, 'YYYY-MM').format('YYYY-MM');
			return month === paymentMonth;
		})
		const isEmptyMonth = paymentsInMonth.length === 0;

		if(isEmptyMonth){
			paymentsByMonth.push({
				amount: 0,
				date: month
			})
		}
		else {
			const paymentsReducedMonth = paymentsInMonth.reduce((total, payment) => {
				return {
					amount: total.amount + payment.amount,
					date: month
				}
			})
			paymentsByMonth.push(paymentsReducedMonth);
		}
	}

	const chartItems:ChartItem[] = paymentsByMonth.map(payments => {
		return {
			x: moment(payments.date,'YYYY-MM').format('MMMM'),
			y: payments.amount,
			date: payments.date
		}
	})
	return chartItems;
}

const getYearsFiveByFive = (payments:ChartPaymentsType[]):ChartItem[] => {
	let startYear = moment().year();
	const times = 4;

	const chartPayments:ChartPaymentsType[] = [];
	for(let i = 0; i < times; i++){
		const currentYear = startYear;

		const yearPayments = payments.filter(payment => {
			const paymentYear = moment(payment.date).year();
			return currentYear === paymentYear;
		});
		const isEmptyYearPayments = yearPayments.length === 0;

		if(isEmptyYearPayments) {
			chartPayments.push({
				amount: 0,
				date: currentYear.toString()
			})
		}
		else {
			const paymentsInAYear = yearPayments.reduce((total, payment) => {
				return {
					amount: total.amount + payment.amount,
					date: currentYear.toString()
				}
			});
			chartPayments.push(paymentsInAYear);
		}

		startYear -= 5;
	}

	const chartItems:ChartItem[] = chartPayments.map(payment => {
		return {
			y: payment.amount,
			x: payment.date,
		}
	})
	return chartItems.reverse();
}

const getAll = (payments:ChartPaymentsType[]):ChartItem[] => {
	const isEmptyPayments = payments.length === 0;

	if(isEmptyPayments) return getEmptyChartData(['','',''])

	const reducedPayments = reducePayments([...payments]);
	const chartPayments:ChartItem[] = reducedPayments.map(payment => {
		return {
			x: payment.date,
			y: payment.amount,
			date: moment(payment.date).format('MMMM D YYYY')
		}
	})
	return chartPayments;
}

// == Chart handling == 

export const getChartOptions = (payments: ChartPaymentsType[]):ApexOptions => {
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
			// type: 'datetime', //FIXME: Somehow this ruins the view
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

const getInitialHeight = (payments: ChartPaymentsType[], paymentsToDate:number):number => {
	if(payments.length === 0) return 0;

	const total = payments.reduce((total, payment) => {
		return {
			amount: total.amount + payment.amount,
			date: ''
		}
	})
	return total.amount - paymentsToDate;
}

const setInitialHeight = (payments: ChartItem[], initialHeight: number):ChartItem[] => {
	let paymentsToChart = [...payments];
	let firstPayment = paymentsToChart[0];
	firstPayment.y += initialHeight;
	paymentsToChart[0] = firstPayment;

	return paymentsToChart;
}

const getDatesByViewType = (view:string, payments:ChartPaymentsType[]):ChartItem[] => {
	switch(view){
		case 'day':  return getDay(payments);
		case 'week': return getWeek(payments);
		case 'm6': 	 return getMonth(payments);
		case 'y1': 	 return getYear(payments);
		case 'y5':   return getYearsFiveByFive(payments);
		case 'all':  return getAll(payments);
		default: throw('Incorrect or no date view option was provided');
	}
}

const makePaymentsGoInIncrement = (payments: ChartItem[]):ChartItem[] => {
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

const makePaymentsKeepHeight = (payments: ChartItem[]):ChartItem[] => {
	let previousPayment = payments[0].y;
	const items:ChartItem[] = payments.map(item => {
		let newItem = item;

		if(newItem.y === 0) newItem.y = previousPayment;
		else previousPayment = newItem.y;
		
		return newItem;
	})

	return items;
}

const doAutoFill = (payments:ChartPaymentsType[], dateLength:number):ChartPaymentsType[] => {
	while(payments.length < dateLength){
		payments.push(
			{amount: 0, date: ''}
		);
	}
	return payments;
}

const getPaymentsToDate = (chartItems: ChartItem[]):number => {
	if(chartItems.length === 0) return 0;

	const total = chartItems.reduce((total, item) => {
		return {
			x: total.x,
			y: total.y + item.y
		}
	})
	return total.y;
}

export const getChartData = (
	view:string, 
	payments:ChartPaymentsType[], 
):ChartDataType => {

	let chartPayments = getDatesByViewType(view, payments);
	const paymentsToDate = getPaymentsToDate(chartPayments);
	const initialHeight = getInitialHeight(payments, paymentsToDate);

	chartPayments = setInitialHeight(chartPayments, initialHeight);
	chartPayments = makePaymentsGoInIncrement(chartPayments);
	chartPayments = makePaymentsKeepHeight(chartPayments);

	return { chartPayments, paymentsToDate };
}

export const removeXAxis = (payments:ChartItem[]) => {
	return payments.map((payment) => {
		return {...payment, x: ''}
	})
}