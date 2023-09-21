import router, { NextRouter } from 'next/router';
import { logoutUser } from '@/service/api';
// Component
import openAdviseToast from '@components/element/StyledToastAdvise';
// Redux
import { useAppDispatch } from '@redux/hook';
import { resetAuthState } from '@redux/auth';
import { resetZendeskState } from '@redux/zendesk';
import { logOutWebWidget } from '@components/block/CondooZendesk/Zendesk/handleWebWidget';

/** Removes redux-store user data and redirects to landing page */
const useLogout = () => {
	const resetReduxStates = () => {
		dispatch(resetAuthState());
		dispatch(resetZendeskState());
	}
	const dispatch = useAppDispatch();
	const logOutOfCondoo = async (router: NextRouter) => {
		try {
			sessionStorage.clear();
			localStorage.clear();

			await router.push('/');
			resetReduxStates();

			// console.log('Logging out of zendesk');
			logOutWebWidget();

			await logoutUser();
			window.location.reload();
		} catch (e) {
			openAdviseToast('failed', 'Something went wrong while trying to logout, try again later.');
		}
	}

	return logOutOfCondoo;
}

export default useLogout;