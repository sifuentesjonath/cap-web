import moment from 'moment';
// Helper
import useGLPaymentsCategorizer from '@/hooks/useGLPaymentsCategorizer';
import { getPropertyByEmail } from '../../../service/api';
// Format
import { formatPropertiesAsItems } from './utils/handlePropertyFormat';
// Types
import { ChartPaymentsType } from '@components/block/CondooCharts/chart';
import { PropertyType as PropertyApiType } from '@/service/apiTypes';
import { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';
import { AllPaymentsType } from '@utils/financialsTable/types';

export type YearPaymentsType = {
	[yearKey: string]: {
		months: number[];
		total: number;
	}
}
export type AccountingEntityType = {
	AccountingEntityType: string;
	Href: string
	Id: number; 
}
export type GLAccountType = {
	AccountNumber: string;
	CashFlowClassification: string;
	Description: string;
	ExcludeFromCashBalances: boolean;
	Id: number;
	IsActive: boolean;
	IsBankAccount: boolean;
	IsContraAccount: boolean;
	IsDefaultGLAccount: boolean;
	Name: string;
	SubAccounts: any;
	SubType: string;
	Type: string;
}
export type PaymentsType = {
	AccountingEntity: AccountingEntityType;
	Amount: number;
	// Date: string|moment.Moment;
	Date: string;
	GLAccount: GLAccountType;
	IsCashPosting: boolean; 
	Memo: string;
	ReferenceNumber: string;
	transactionID: number;
}
export type PropertyType = {
	id: number;
	name: string;
	payments: PaymentsType[];
}

// == Properties ==

export const getPropertiesIds = (propertykeys:string[]) => {
	const propertyIds = propertykeys.map(id => {
		let Id = id.split(" ");
		let buildiumId =  Number.parseInt(Id[0]);
		return buildiumId;
	})
	return propertyIds;
}

export const sortProperties = (properties: PropertyType[]):PropertyType[] => {
	const _properties = [...properties];
	return _properties.map((property) => {
		const { payments } = property;
		const sortedPayments = payments.sort((a,b) => {
			const [aDate, bDate] = [new Date(a.Date), new Date(b.Date)];
			return aDate.valueOf() - bDate.valueOf(); // oldest to latest
			// return bDate.valueOf() - aDate.valueOf(); // latest to oldest 
		})
		return {...property, payments: sortedPayments}
	})
}

const convertToDate = (propertyDate:string):Date => {
	
	const [year, month, day] = propertyDate.split('-') // e.g. 2022-01-24
	return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

export const formatTransactions = (transactions) => {
	const propertyKeys = Object.keys(transactions);
	const isTransactionsEmpty = propertyKeys.length === 0;
	if(isTransactionsEmpty) return [];

	// const propertyIds = getPropertiesIds(propertyKeys);

	const _allProperties:PropertyType[] = propertyKeys.map((propertyKey, index) => {
		// const id = propertyIds[index];
		const [ propertyId, unit, propertyName ] = propertyKey.split('_');
		const name = `#${unit} - ${propertyName}`;
		const payments = transactions[propertyKey];

		// NOTE: might categorize all transactions directly to avoid categorizing before formatting on each change
		const property:PropertyType = { id: parseInt(propertyId), name, payments }; 
		return property;
	})
	
	// console.log('all properties', _allProperties);
	const sortedProperties = sortProperties(_allProperties);
	// console.log('sorted properties', sortedProperties);
	return sortedProperties;
}

/** returns an array with the oldest and latest date of the given properties */
export const getPropertyDateRange = (properties:PropertyType[]):Date[] => {
	if(properties.length === 0) return [new Date(), new Date()];
	
	let oldestDate = convertToDate(properties[0].payments[0].Date);
	let latestDate = new Date();

	properties.forEach((property) => {
		const { payments } = property;
		// since payments are ordered from oldest to latest:
		const firstPaymentDate = convertToDate(payments[0].Date); // oldest
		const lastPaymentDate = convertToDate(payments[payments.length - 1].Date); // latest

		if(firstPaymentDate.valueOf() < oldestDate.valueOf()) oldestDate = firstPaymentDate;
		if(lastPaymentDate.valueOf() > latestDate.valueOf()) latestDate = lastPaymentDate;
	});

	return [oldestDate, latestDate];
}

// == Properties as memo items ==

const formatPaymentToMemo = (property:PropertyType):any => {
	//@ts-ignore
	const propertyName = formatPropertiesAsItems(property);
	let propertyMemoItem = {
		title: propertyName, 
		value: property.id.toString()
	}

	return propertyMemoItem;
}

export const formatPropertiesMemo = (properties:PropertyType[]):IToggleGroupActiveOption[] => {
	if(properties.length === 0) return [];
	const propertyMemoItems = properties.map(formatPaymentToMemo);
	return propertyMemoItems;
}

// == Categorizing properties == 

const categorizePayments = (payments: PaymentsType[]) => {
	const categorizedPayments = {
		"Rent": [],
		"Parking": [],
		"Other": [],

		"Ptaxes": [],
		"Maintenance": [],
		"CondooFees": [],
		"CondooFee": [],

		"Management_Fees": [],
		"Utilities": [],
		"Leasing_Fees": [],
		"Insurance": []
	}

	if(payments.length === 0) return categorizedPayments;

	const categories = Object.keys(categorizedPayments);
	payments.forEach((payment) => {
		const { Type, Name } = payment.GLAccount;
		const paymentCategory = useGLPaymentsCategorizer(Type, Name);

		if(categories.includes(paymentCategory))
			categorizedPayments[paymentCategory].push(payment);
	})
	return categorizedPayments;
}

export const getCategorizedPayments = (payments: PaymentsType[]) => {
	const { 
		/* Income */ Parking, Rent, Other, 
		/* Expense */ 
		Ptaxes, Maintenance, CondooFees, CondooFee, 
		Management_Fees, Utilities, Leasing_Fees, Insurance
	} = categorizePayments(payments);

	const allPayments = {
		incomes: {
			Parking,
			Rental: Rent,
			Other
		},
		expenses: {
			CondooFees,
			Maintenance,
			PropertyTax: Ptaxes,
			Management_Fees,
			Utilities, 
			Leasing_Fees, 
			Insurance
			// CondoFee: CondooFee
		}
	}
	console.log({ allPayments })
	return allPayments
}

// == YearPaymentsType manipulation == 

/** Returns array in a given size filled with 0s */
export const getBaseArray = (size:number) => {
	const baseArray = new Array(size).fill(0);
	return [...baseArray]
}
/** Must receive arrays of same length */
export const sumValuesAndGetTotal = (monthPayments:number[], newMonthPayments:number[]) => {
	const isNotSameLength = monthPayments.length != newMonthPayments.length;
	let total = 0;

	const _monthPayments = [...monthPayments];
	const _newMonthPayments = isNotSameLength ? getBaseArray(_monthPayments.length) : [...newMonthPayments];
	
	const mergedPayments = _monthPayments.map((paymentAmount, index) => {
		const newValueOnThisMonth = paymentAmount + _newMonthPayments[index];
		total += newValueOnThisMonth;
		return newValueOnThisMonth;
	})

	return {
		values: mergedPayments,
		total: total,
	}
}
/** Returns specified months. Month range is 0-11 */
export const getMonthPaymentsInRange = (months:number[], range:number[]) => {
	const [from, to] = range;
	return months.slice(from, to+1);
}
export const getMonthPaymentsAndTotalByIndex = (months:number[], indexes:number[]) => {
	const grabbedMonths = indexes.map((index) => months[index]);
	const total = grabbedMonths.reduce((total, payment) => total + payment);
	return {
		months: grabbedMonths,
		total: total
	}
}
export const getAllYearTotalsOfPayments = (payments: YearPaymentsType[]) => {
	let paymentsByYear = {}

	payments.forEach((payment) => {
		const yearKeys = Object.keys(payment);
		yearKeys.forEach((yearKey) => {
			if(!paymentsByYear.hasOwnProperty(yearKey)) paymentsByYear[yearKey] = 0;
			
			paymentsByYear[yearKey] += payment[yearKey].total;
		})
	})
	return paymentsByYear;
}
export const getAllYearTotalsAndSumPayments = (payments: YearPaymentsType) => {
	let paymentsByYear = {};
	let total = 0;

	const yearKeys = Object.keys(payments);
	yearKeys.forEach((yearKey) => {
		if(!paymentsByYear.hasOwnProperty(yearKey)) paymentsByYear[yearKey] = 0;
		
		const newTotal = payments[yearKey].total;
		paymentsByYear[yearKey] += newTotal;
		total += newTotal;
	})
	return {
		years: paymentsByYear,
		total
	}
}

// == Chart ==

const toChartMonthView = (groupedPayments):ChartPaymentsType[] => {
	const chartItems:ChartPaymentsType[] = [];
	groupedPayments.forEach((payments) => {
		if(payments.length == 0) return;

		payments.forEach((payment) => {
			const chartItem:ChartPaymentsType = {
				amount: payment.Amount,
				date: payment.Date
			}
			chartItems.push(chartItem);
		})
	})
	return chartItems;
}

const toChartYearView = (groupedPayments):ChartPaymentsType[] => {
	let yearAmountAdder = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0}
	const currentYear = moment().year();
	
	groupedPayments.forEach((payments) => {
		if(payments.length == 0) return;

		payments.forEach((payment) => {
			const paymentDate = moment(payment.Date, 'YYYY-MM-DD');
			if(currentYear != paymentDate.year()) return;
			
			const month = paymentDate.month().toString();
			const amount = payment.Amount;
			
			yearAmountAdder[month] += amount;
		})
	})

	const chartItems:ChartPaymentsType[] = [];
	for(let month = 0; month <= 11; month++){
		const monthAmount = yearAmountAdder[month];
		if(monthAmount != 0){
			const chartItem:ChartPaymentsType = {
				amount: monthAmount,
				date: moment(`${currentYear}-${month+1}`, 'YYYY-MM').format('YYYY-MM')
			}
			chartItems.push(chartItem);
		}
	}
	return chartItems;
}

export const toChart = (payments:YearPaymentsType[], dateView):ChartPaymentsType[] => {
	switch(dateView){
		case 'm6': return toChartMonthView(payments);
		case 'y1': return toChartYearView(payments);
	}
}

// == Date filtering == 

const getPaymentsInDateRange = (payments:PaymentsType[], dateRange:Date[]) => {
	const [fromDate, toDate] = [dateRange[0].valueOf(), dateRange[1].valueOf()];
	const paymentsInDateRange:PaymentsType[] = []

	payments.forEach(payment => {
		const { Date } = payment;
		const paymentDate = convertToDate(Date).valueOf();
		const isInDateRange = fromDate <= paymentDate && paymentDate <= toDate;
		if(isInDateRange) paymentsInDateRange.push(payment);
	})

	return paymentsInDateRange;
}

export const filterPropertyByDate = (property:PropertyType, dateRange: Date[]):PropertyType => {
	const { payments } = property 
	const filteredPayments = getPaymentsInDateRange(payments, dateRange);
	const filteredProperty = {...property, payments: filteredPayments}
	return filteredProperty;
}

export const filterPropertiesByDate = (properties:PropertyType[], dateRange:Date[]) => {
	const propertiesInDateRange:PropertyType[] = []

	properties.forEach(property => {
		const { payments } = property;

		const filteredPayments = getPaymentsInDateRange(payments, dateRange);
		if(filteredPayments.length == 0) return;

		const filteredProperty = {...property, payments: filteredPayments}
		propertiesInDateRange.push(filteredProperty)
	})

	return propertiesInDateRange;
}