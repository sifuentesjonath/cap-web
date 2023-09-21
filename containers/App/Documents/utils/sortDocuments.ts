import useMomentDate from "@/hooks/useMomentDate";
import { CondooDocumentsType } from "@/service/apiTypes";
import { DialogTrigger } from "@radix-ui/react-dialog";
import moment from "moment";
import getDocumentDateFromObject from "./getDocumentDateFromObject";

export default function sortDocuments(documents: CondooDocumentsType[]) {
	const sortedDocuments = documents.sort((aDocument, bDocument) => {
		const 
			aDate = getDocumentDateAsMoment(aDocument),
			bDate = getDocumentDateAsMoment(bDocument)

		return moment(bDate).diff(aDate); // e.g: Dec, Nov, Oct... 
	})
	return sortedDocuments;
}

const getDocumentDateAsMoment = (document: CondooDocumentsType) => {
	const { year, month, day } = getDocumentDateFromObject(document);
	return useMomentDate(new Date(year, month, day));
}