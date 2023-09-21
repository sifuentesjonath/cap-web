import { ChartItem, ChartPaymentsType } from "../types";
// Views
import getDayView from "./getDayView";
import getWeekView from "./getWeekView";
import getMonthView from "./getMonthView";
import getYearView from "./getYearView";
import getYearViewAscendent from "./getYearViewAscendent";
import getFiveYearsView from "./getFiveYearsView";
import getAllView from "./getAllView";

const getViewType = (view:string, payments:ChartPaymentsType[]):ChartItem[] => {
	switch(view) {
		case 'day':  return getDayView(payments);
		case 'week': return getWeekView(payments);
		case 'm6': 	 return getMonthView(payments);
		case 'y1': 	 return getYearView(payments);
		case 'y1-asc': return getYearViewAscendent(payments);
		case 'y5':   return getFiveYearsView(payments);
		case 'all':  return getAllView(payments);
		default: return getMonthView(payments);
	}
}

export default getViewType;