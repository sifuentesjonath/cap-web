import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ReduxAuthState } from '@redux/auth';
import { ReduxZendeskState } from '@redux/zendesk';

export interface AppSelectorStates {
	auth: ReduxAuthState,
	zendesk: ReduxZendeskState,
}
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
