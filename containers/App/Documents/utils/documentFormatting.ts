import { CondooDocumentsType } from '@/service/apiTypes'
import { IDocumentByYear, DocumentInFormat } from './documentTypes'
import useMonthByNumber from '@/hooks/useMonthByNumber';
// import useDateString from '@/hooks/useDateString';
// import useDateValues from '@/hooks/useDateValues';
import getDocumentDateFromObject from './getDocumentDateFromObject';

/** returns all documents grouped by year and month but unordered */
export const formatDocuments = (completedDocuments: CondooDocumentsType[] = [] ) => {
	let formatedDocuments: IDocumentByYear = {};

	completedDocuments.forEach(document => {
		const { day, month, year } = getDocumentDateFromObject(document);

		/** This is the main Object key */
		const yearKey = `d${year}`;
		const monthName = useMonthByNumber(month);

		// handle object keys as dates that are not in formatedDocuments {
		// If yearKey is not in formated documents create it
		const isYearInFormatedDocuments = formatedDocuments[yearKey];
		if (!isYearInFormatedDocuments) formatedDocuments[yearKey] = {};
		// If monthNumber is not within yearKey assign it
		const isMonthInYear = formatedDocuments[yearKey][month];
		if (!isMonthInYear) {
			formatedDocuments[yearKey][month] = {
				Month: monthName,
				Documents: [],
			};
		}
		// }

		// format document and add it to formatedDocuments {
		const newFormatedDocument = formatDocument(document, { year, month, day });
		formatedDocuments[yearKey][month].Month = monthName;
		formatedDocuments[yearKey][month].Documents.push(newFormatedDocument);
		// }

	});

	const 
		sortedDateKeysByYear = sortKeysByYear(Object.keys(formatedDocuments)),
		dateValuesByYear = Object.values(formatedDocuments);

	return { 
		dateKeysByYear: sortedDateKeysByYear, 
		dateValuesByYear,
	};
};

const sortKeysByYear = (documentObjectsKeys: string[]) => {
	const byYearKeys = (aKey: string, bKey: string) => {
		const
			aKeyDate = parseInt(aKey.replace('d', '')),
			bKeyDate = parseInt(bKey.replace('d', ''));
		return bKeyDate - aKeyDate;
	}
	return documentObjectsKeys.sort(byYearKeys);
}

const formatDocument = (document: CondooDocumentsType, dateToFormat: { year: number, month: number, day: number }) => {
	const { year, month, day } = dateToFormat;

	const Name = document.DocType.toLocaleLowerCase();
	const FileType = document.FileKey?.split('.')[1];
	const Date = `${day}-${month}-${year}`;

	const newFormatedDocument:DocumentInFormat = {
		Name, FileType, Date,
		...document,
	};
	return newFormatedDocument;
}