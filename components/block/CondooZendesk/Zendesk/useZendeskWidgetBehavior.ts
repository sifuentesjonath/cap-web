import { useEffect, useState } from 'react'
import { handleWebWidgetAperture } from '@components/block/CondooZendesk/Zendesk/handleWebWidget';
// redux
import { AppSelectorStates, useAppDispatch, useAppSelector } from '@/redux/hook';
import { resetZendeskState, setZendeskState } from '@/redux/zendesk';
import { isAuthState } from '@redux/auth';

interface IUseZendeskWidgetBehavior {
	onLoaded: () => void | null;
	isLogged: boolean;
}

export type useZendeskBehaviorType = {
	openZendesk: () => void;
	closeZendesk: () => void;
	assignBehaviorOnLoaded: (onLoaded: () => void) => void;
	resetZendeskState: () => void;
}
const useZendeskWidgetBehavior = (args: IUseZendeskWidgetBehavior) => {
	const { onLoaded, isLogged } = args;
	const dispatch = useAppDispatch();
	
	let isOpened = false;
	const userType = isLogged ? 'user' : 'visitor';

	// == Actions ==

	const updateZendeskState = (isOpen: boolean, onLoaded?: () => void) => {
		dispatch(setZendeskState({ isOpen, onLoaded: onLoaded ?? null }));
	}
	const assignBehaviorOnLoaded = (onLoaded: () => void) => {
		dispatch(setZendeskState({ isOpen: isOpened, onLoaded: onLoaded }));
	}

	const openZendesk = (open?:boolean) => {
		updateZendeskState(true, onLoaded);
		if(open){
			setTimeout(() => { // Wait to finish loading zendesk to open it
				handleWebWidgetAperture('open');
			}, 1000);
		}
	}

	const closeZendesk = () => updateZendeskState(false, onLoaded ?? null);
	const resetZendeskReduxState = () => dispatch(resetZendeskState());

	useEffect(() => {
		return () => { 
			// console.log(' useZendeskWidgetBehavior: unMount');
			// If user is not logged always maintain web widget hidden unless it's opened by an event 
			if(userType == 'visitor') resetZendeskReduxState();
		}
	}, []);

	return {
		openZendesk,
		closeZendesk,
		assignBehaviorOnLoaded,
		resetZendeskState,
	}
}

export default useZendeskWidgetBehavior;