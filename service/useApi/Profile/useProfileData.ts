import { useQuery, useMutation, UseQueryOptions, useQueryClient } from 'react-query';
import getProfile from './getProfile';
import updateProfile, { updateStep } from './updateProfile';
import { UserProfileType } from '@/service/apiTypes';
import { AxiosResponse } from 'axios';

export const QUERY_KEY_NAME = 'getCurrentProfile';

const useProfileData = (options?:UseQueryOptions<UserProfileType>) => {
	return useQuery<UserProfileType> (
		[QUERY_KEY_NAME], getProfile, options
	);
}

export const useUpdateProfileData = (
	onSuccess?: (queryData:AxiosResponse<UserProfileType>) => void, 
	onError?: (error:unknown) => void
) => {
	const queryClient = useQueryClient();
	return useMutation(updateProfile, {
		onSuccess: (queryData) => {
			// Invalidate query to re-fetch again
			// await queryClient.invalidateQueries(QUERY_KEY_NAME); 

			// Update old query data, more like a local refresh once mutation succeed
			queryClient.setQueryData<UserProfileType>(QUERY_KEY_NAME, (oldQueryData) => {
				return queryData.data;
			})
			onSuccess && onSuccess(queryData);
		},
		onError,
	})
}

/** Experimental, but we should end up using it */
export const useUpdateProfileStep = (
	onSuccess?: (queryData:AxiosResponse<UserProfileType>) => void, 
	onError?: (error:unknown) => void
) => {
	const queryClient = useQueryClient();
	return useMutation(updateStep, {
		onSuccess: (queryData) => {
			queryClient.setQueryData<UserProfileType>(QUERY_KEY_NAME, (oldQueryData) => {
				return queryData.data;
			})
			onSuccess && onSuccess(queryData);
		},
		onError: (error) => {
			onError && onError(error);
		}
	})
}

export default useProfileData;