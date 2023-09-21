import { YearPaymentsType } from "../types";
import createTableItemsByMonth from "./createItemsByMonth";
import createTableItemsByYear from "./createItemsByYear";

const getTableView = (
	dateView: string,
	paymentData: {name: string, payment: YearPaymentsType }[],
	tableHeaderValues: number[],
	totalRowName: string
) => {
	switch(dateView){
		case 'm6': return createTableItemsByMonth(paymentData, tableHeaderValues, totalRowName);
		case 'y1': return createTableItemsByYear(paymentData, tableHeaderValues, totalRowName);
		case 'y1-asc': return createTableItemsByYear(paymentData, tableHeaderValues, totalRowName);
		default: {
			console.error('Unknown Table view');
			return createTableItemsByMonth(paymentData, tableHeaderValues, totalRowName);
		}
	}
}

export default getTableView;