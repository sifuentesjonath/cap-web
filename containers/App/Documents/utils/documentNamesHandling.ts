import { CondooDocumentsType } from "@/service/apiTypes";

const documentsNames = {
	'management_agreement': 'Management Agreement',
	'monthly_statement': 'Monthly Statement',
	'annual_statement': 'Annual Statement',
	't776': 'T776',
	'authorization': 'Authorization',
	'lease': 'Lease',
	'work_order_reports': 'Work Order Reports',
}

export const getDocumentName = (document: CondooDocumentsType):string => {
	const subCategory = document.FileKey?.split('/')[1];
	const documentName = documentsNames[subCategory?.toLowerCase()];
	return documentName;
}

