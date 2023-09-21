import { AllPaymentsType, TableRowType } from './types';

const createEmptyTable = ():AllPaymentsType => {
	const currentYear = new Date().getFullYear();
	const monthsOfAYear = 12;

	const emptyInfo = {
		[`d${currentYear}`]: {
			months: new Array(monthsOfAYear).fill(0,0,monthsOfAYear),
			total: 0
		}
	}

	return {
		expenses: { 
			CondooFees: emptyInfo, 
			Maintenance: emptyInfo, 
			PropertyTax: emptyInfo, 
			Insurance: emptyInfo,
			Leasing_Fees: emptyInfo,
			Management_Fees: emptyInfo,
			Utilities: emptyInfo,
		},
		incomes: { 
			Other: emptyInfo, 
			Parking: emptyInfo, 
			Rental: emptyInfo 
		}
	}
}

export default createEmptyTable;