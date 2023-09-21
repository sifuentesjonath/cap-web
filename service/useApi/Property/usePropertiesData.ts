// Hook
import { useQuery, UseQueryOptions } from 'react-query';
// Service
import getProperties  from './getProperties';
// Types
import { PropertyType } from '@/service/apiTypes';

export const QUERY_KEY_NAME = 'getPropertiesToFilter';

const usePropertiesData = (userId:string,options?:UseQueryOptions<PropertyType[]>) => {
	return useQuery<PropertyType[]> (
		[QUERY_KEY_NAME], () => getProperties(userId), options
	);
}


export default usePropertiesData;