// import useDateString from '@/hooks/useDateString';
// import useMomentDate from '@/hooks/useMomentDate';
import { CondooDocumentsType } from '@/service/apiTypes'
import moment from 'moment';
import { IFilterDocuments } from '../useFilterDocuments';

// == Load Documents == 
export const loadCondooDocuments = (documents: CondooDocumentsType[]):IFilterDocuments => {
	const areDocumentsEmptyOrNull = documents.length == 0 || !documents || !documents[0];
	if(areDocumentsEmptyOrNull){
		return {
			documents: [],
			buttonFilter: [],
			property: ''
		}
	}

	const documentsCondooArgs:IFilterDocuments = {
		documents: documents,
		buttonFilter: [],
		property: ''
	}

	return documentsCondooArgs;
}

// == Other helpers == 

/** returns all documents of a year sent by `Object.values` as argument */
export const getAllDocumentsByYear = (
	documentsValuesByYear//:IDocumentValues
	) => {
	// debugger
	const documents = []
	documentsValuesByYear.forEach(({ Documents, Month }) => {
		documents.push(...Documents);
	})

	return documents;
}