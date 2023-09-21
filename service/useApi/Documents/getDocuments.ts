import customAxios from "@/service/customAxios";

export const getAllDocuments = user => {
  return customAxios.get(`/documents/all?user=${user}`)
  	.then(res => res.data);
};

export const getDocumentsCompletedFromDB = (user : string) => {
	return customAxios.get(`/documents/getAllCompletedDocs`, {
		params: {
			user
		}
	}).then(res => res.data)
};

export const getDocuSignDocumentEnvelopesByUserEmail = (user:string) => {
  return customAxios.get(`/ds-send/getInformationAboutDocument`, {
    params: {
      user
    }}).then(res => res.data)
};

export const getDocumentsFromDocusign = (envelopeIds : Array<any>, userId: any ) => {
  return customAxios.get(`/ds-send/refreshDocuments`, {
    params: {
      envelopes: envelopeIds,
      userId
    }})
};