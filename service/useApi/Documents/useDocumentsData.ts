// Hook
import { useQuery, UseQueryOptions } from 'react-query';
// Service
import { 
	getDocumentsCompletedFromDB, 
	getDocuSignDocumentEnvelopesByUserEmail, 
	getDocumentsFromDocusign 
} from './getDocuments';
import { uploadDocuments } from './share';
// Types
import { CondooDocumentsType } from '@/service/apiTypes';

export const QUERY_KEY_NAME = 'getCurrentDocuments';

const useDocumentsData = (email:string,options?:UseQueryOptions<CondooDocumentsType[]>) => {
	return useQuery<CondooDocumentsType[]> (
		[QUERY_KEY_NAME], () => getDocumentsCompletedFromDB(email), options
	);
}

export const checkIfDocumentsNeedUpload = async (email: string) => {
	/** 
	 * As documents are not uploaded constantly use this function
	 * in a useEffect to be triggered only on page load. 
	*/
	try {
		const envelopes = await getDocuSignDocumentEnvelopesByUserEmail(email);
		const { data: docuSignDocuments } = await getDocumentsFromDocusign(envelopes, email);
		if(docuSignDocuments === 'No Update is Needed' || !docuSignDocuments) return null;
		await uploadDocuments(docuSignDocuments);
		return await getDocumentsCompletedFromDB(email);
	} catch (err) { }
}

export default useDocumentsData;