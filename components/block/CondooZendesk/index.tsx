import { FC, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import { AppSelectorStates, useAppSelector } from '@redux/hook';
// Redux
import { useAppDispatch } from '@redux/hook';
import { setZendeskState } from '@/redux/zendesk';

import Zendesk, { ZendeskAPI } from "./Zendesk/Zendesk";
import { handleWebWidgetAperture, logInWebWidget, logOutWebWidget, getZendeskAuthentication, getZendeskJWT } from './Zendesk/handleWebWidget';
import { isAuthState, ReduxAuthState } from '@redux/auth';
const ZENDESK_KEY = "ecc48ebb-4bb6-458d-a2cb-d557d18b10f4"

const CondooZendesk: FC = () => {
	const user = useAppSelector((state: AppSelectorStates) => state.auth);
	const { isOpen, onLoaded } = useAppSelector((state: AppSelectorStates) => state.zendesk);
	const { pathname } = useRouter();

	const onZendeskScriptLoad = () => {
		/** 
		 * Handle how zendesk API (zE) will behave every time it loads on page 
		 * onLoaded executes each time the page finishes loading and 
		 * zendesk 'zE' is available for use;
		 */

		// == user authentication ==
		if (isAuthState(user)) {
			getZendeskJWT(user.Email)
				.then((jwtResult) => {
					// console.log('[ Zendesk Auth & LogIn Web Widget ]', { jwt: jwtResult });
					logInWebWidget(jwtResult);
				});
		}

		// == customizable global  behavior ==
		// console.log('Zendesk onLoaded ->', onLoaded)
		onLoaded && onLoaded();
	};

	const webWidgetSettings = {
		webWidget: {
			authenticate: {
				chat: {
					jwtFn: function (callback) {
						getZendeskJWT(user.Email)
							.then((jwt) => {
								// console.log('[ Zendesk Auth ]', { jwt });
								callback(jwt)
							});
					}
				}
			}
		}
	}

	useEffect(() => { }, [user, isOpen, onLoaded, pathname]);

	if (!isOpen) return null;

	return (
		<Zendesk
			defer
			zendeskKey={ZENDESK_KEY}
			zESettings={webWidgetSettings}
			onLoaded={() => {
				//@ts-ignore
				// console.log('[ Zendesk is loaded, execute on loaded ]', window.zE);
				onZendeskScriptLoad();
			}}
		/>
	)
}

export default CondooZendesk