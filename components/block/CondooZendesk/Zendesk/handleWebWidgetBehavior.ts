import { ZendeskAPI } from '@components/block/CondooZendesk/Zendesk/Zendesk';
// import { handleWebWidgetAperture } from '@components/block/CondooZendesk/Zendesk/handleWebWidget';
import { useZendeskBehaviorType } from './useZendeskWidgetBehavior';

export const getVisitorWidgetBehavior = (isLogged: boolean, useZendeskHook:useZendeskBehaviorType) => {
	const visitorBehavior = () => {
		ZendeskAPI('messenger:on', 'close', function () {
			if (!isLogged) useZendeskHook.resetZendeskState();
		});
	}
	return visitorBehavior;
}