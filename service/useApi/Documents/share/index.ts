import customAxios from "@/service/customAxios";

/** 
 * Uploads to:
 * - AWS
 * - Database
 */
export const uploadDocuments = (documents : Array<any> ) => {
  	return customAxios.post(`/document-share/uploadNewCompleteDocuments`, {
		data: documents
	});
};