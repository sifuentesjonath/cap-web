import useDateString from "@/hooks/useDateString";
import useDateValues from "@/hooks/useDateValues";
import { CondooDocumentsType } from "@/service/apiTypes";

/** Attempts in many ways to obtain the date provided for the document as it is not centralized in our DB */
export default function getDocumentDateFromObject(document: CondooDocumentsType){
	/** 
	 * This API response has up to 4 properties to use to get the date
	 * the object properties priority should be used in the order of:
	 * 	- Date - either '02-04-23' or '020423' format
	 * 	- Year, Month - being numbers
	 * 	- Created At - being common date format
	 */
	const { Year, Month, CreatedAt, Date } = document;

	// Use Date as first priority if exists
	if(Date) { 
		const dateWithScoreFormat = Date.split('-');
		if(dateWithScoreFormat.length == 3){ // e.g: 02-04-23
			const convertToInteger = (element) => parseInt(element)
			const [day, month, year] = dateWithScoreFormat.map(convertToInteger);
			const yearAsThousand = parseInt(`20${year}`); // e.g. 23 -> 2023
			return { year: yearAsThousand, month: month - 1, day };
		}
		else { // e.g: 020423
			const 
				day = parseInt(`${Date[0]}${Date[1]}`),
				month = parseInt(`${Date[2]}${Date[3]}`),
				year = parseInt(`20${Date[4]}${Date[5]}`);
			return { year, month: month-1, day }
		}
	}

	// Use Year & Month is provided
	if(Year && Month){
		const date = useDateString(document.CreatedAt);
		return {
			year: parseInt(Year),
			month: parseInt(Month),
			day: date.getDate(),
		}
	}

	// Use CreatedAt property as last option
	return useDateValues(useDateString(CreatedAt));
}