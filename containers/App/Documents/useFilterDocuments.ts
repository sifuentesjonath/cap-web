import { CondooDocumentsType } from '@/service/apiTypes';
import { documentTypes } from './utils/documentFilteringHandling';

export interface IFilterDocuments {
	documents: CondooDocumentsType[];
	buttonFilter: string[];
	property: string;
}

const useFilterDocuments = (filterArgs:IFilterDocuments) => {
	const { documents, buttonFilter, property } = filterArgs;
	const documentsByProperty = filterByProperty(documents, property);
	const buttonFilteredDocuments = filterByButtonFilters(documentsByProperty, buttonFilter);
	return buttonFilteredDocuments;
}

const filterByProperty = (documents:CondooDocumentsType[], property: string) => {
	if(!property) return documents;

	const propertyDocuments = documents.filter(({ Property }) => {
		if(!Property) return false;
		return Property.Name == property;
	});
	return propertyDocuments;
}

const filterByButtonFilters = (documents:CondooDocumentsType[], filters:string[]) => {
	if(filters.length == 0) return documents;

	const allExceptOther = (filter) => filter != 'other';
	const buttonFilters = filters.filter(allExceptOther);

	const isFilterItem = ({ DocType }: CondooDocumentsType) => buttonFilters.includes(DocType);
	const filteredDocumentsByButtonFilters:CondooDocumentsType[] = documents.filter(isFilterItem);
	const otherDocuments = filterOtherDocuments(documents, filters);

	return [
		...filteredDocumentsByButtonFilters,
		...otherDocuments
	];
}

const filterOtherDocuments = (documents:CondooDocumentsType[], filters:string[]) => {
	if(!filters.includes('other')) return [];

	const allDocumentTypes = Object.values(documentTypes);
	const isNotInDocumentType = ({ DocType }: CondooDocumentsType) => !allDocumentTypes.includes(DocType);
	const otherDocuments:CondooDocumentsType[] = documents.filter(isNotInDocumentType);

	return otherDocuments;
}


export default useFilterDocuments;