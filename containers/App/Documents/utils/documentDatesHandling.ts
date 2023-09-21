import moment from 'moment';
import { CondooDocumentsType } from '@/service/apiTypes';
import useMomentDate from '@/hooks/useMomentDate';
import getDocumentDateFromObject from './getDocumentDateFromObject';
import useMonthByNumber from '@/hooks/useMonthByNumber';

export const getDocumentDateAsString = (document: CondooDocumentsType):string => {
	const { day, month } = getDocumentDateFromObject(document);
	const monthName = useMonthByNumber(month).slice(0,3) // e.g. Jan / Feb / Mar / ...
	return [monthName, day].join(' ');

}
export const getDefaultDatesOfDocuments = (documents: CondooDocumentsType[]) => {
	const getDocumentDateAsDate = (document: CondooDocumentsType) => {
		const CreatedAt = document.CreatedAt; // e.g. 2022-11-06T01:03:19.000Z
		const [year, month, day] = CreatedAt.split('T')[0].split('-'); // e.g. 2022,11,06

		return new Date(parseInt(year), parseInt(month), parseInt(day));
	}
	const getDocumentComparableDate = (document: CondooDocumentsType) => {
		const documentDate = getDocumentDateAsDate(document);
		return useMomentDate(documentDate);
	}

	if(documents.length == 1) {
		const documentAsDate = getDocumentDateAsDate(documents[0])

		// console.log('Oldest: ', documentAsDate);
		// console.log('Latest: ', documentAsDate);

		return [documentAsDate, documentAsDate]
	}

	const orderedDocuments = documents.sort((documentPrev, documentNext) => {
		const documentPrevDate = getDocumentComparableDate(documentPrev);
		const documentNextDate = getDocumentComparableDate(documentNext);

		return moment(documentPrevDate).diff(documentNextDate);
	})

	const oldestDocument = orderedDocuments[0];
	const latestDocument = orderedDocuments[orderedDocuments.length -1]

	const oldestDocumentDate = getDocumentDateAsDate(oldestDocument);
	const latestDocumentDate = getDocumentDateAsDate(latestDocument);

	// console.log({ orderedDocuments });
	// console.log('Oldest: ', oldestDocumentDate);
	// console.log('Latest: ', latestDocumentDate);

	return [
		oldestDocumentDate, 
		latestDocumentDate
	];
}

export const getCurrentYear = ():number => {
	return moment().year();
}