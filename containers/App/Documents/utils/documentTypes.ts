import { CondooDocumentsType } from '@/service/apiTypes'

export interface DocumentInFormat extends CondooDocumentsType {
	Name: string;
	Date: any;
	FileKey:any;
	FileType: string;
}

export interface IDocumentsByMonth {
	Documents: DocumentInFormat[];
	Month: string;
}

export interface IDocumentByYear {
	[year: string]: {
		[month: number]: IDocumentsByMonth;
	}
}

export interface IDocumentValues {
	[monthNumber: number]: IDocumentsByMonth;
}
