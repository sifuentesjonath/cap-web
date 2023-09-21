// import { ZendeskAPI } from "react-zendesk";
import { ZendeskAPI } from "./Zendesk"
// API
import { authenticateUserInZendeskWebWidget } from "@/service/useApi";
import { ReduxAuthState } from "@redux/auth";

// == Handle Web Widget - Initialize & LogIn Web Widget == 

export const getZendeskJWT = async (email:string) => {
	let zendeskJWT:string = getZendeskJWTFromSessionStorage();
	if(zendeskJWT) return zendeskJWT;
	return await getZendeskAuthentication(email);
}

/** Gets the JWT for the given email to authenticate in Zendesk Web Widget */
export const getZendeskAuthentication = async (email:string) => {
	const zendeskSign = 'kVGUyjRjL16rsTgSEBx-qAvo9QZUnUDBaz94jFHHLqlfU9mUBwcwOb_uDYryI00TwMPsvi129oRriXAnh2fy-A';

   try {
		const zendeskJWTResponse = await authenticateUserInZendeskWebWidget(
			{ sign: zendeskSign, email, username: email }
		);
		const { data: jwt } = zendeskJWTResponse;
		saveWebWidgetJWTToSessionStorage(jwt);
		return jwt;
   } catch (err) {
		// console.info('Zendesk authentication warning:', err);
		throw (err);
	}
}

// == Zendesk JWT == 
const getZendeskJWTFromSessionStorage = () => sessionStorage.getItem('zendeskjwt');
const saveWebWidgetJWTToSessionStorage = (jwt:string) => sessionStorage.setItem('zendeskjwt', jwt);

export const logInWebWidget = (zendeskJWT: string) => {
	try {
		ZendeskAPI('messenger', 'loginUser', function (callback) {
			callback(zendeskJWT);
			// console.info('Zendesk Authenticated');
		});
	} catch (err) {
		throw (err);
	}
}

export const logOutWebWidget = () => {
	try {
		ZendeskAPI('messenger', 'logoutUser');
	} catch(err){
		throw(err);
	}
}

export const reAuthenticateWebWidget = () => {
	try {
		ZendeskAPI('webWidget', 'helpCenter:reauthenticate');
	} catch(err) {
		throw(err);
	}
}

// == Handle Web Widget - Actions == 

export const handleWebWidgetAperture = (aperture:'open'|'close') => {
	// console.log('handle widget aperture: ', aperture);
	try {
		ZendeskAPI('messenger', aperture);
	} catch (err){
		// console.info('Zendesk handle error', err);
		// throw(err);
	}
}