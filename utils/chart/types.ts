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

export type ChartDataType = {
	chartPayments: ChartItem[];
	paymentsToDate: number;
}
