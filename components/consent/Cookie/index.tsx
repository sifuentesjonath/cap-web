import { FC } from 'react'
import CookieConsentAdvisor, { OPTIONS, Cookies, getCookieConsentValue, } from "react-cookie-consent";
import Link from '@components/element/Link';
import paths from '@utils/paths';
// Style
import { cookieConsentContentStyle, cookieConsentButtonStyle, cookieConsentStyle } from './style'

interface ICookieConsentProps { }
const CookieConsent: FC<ICookieConsentProps> = () => {
	const onAcceptCookieConsent = (acceptedOnScrolling: boolean) => {
		// if (acceptedOnScrolling) {
		// 	console.log('COOKIE CONSENT - accepted by scrolling')
		// }
		// else {
		// 	console.log('COOKIE CONSENT - accepted by button')
		// }
	}
	const onDeclineCookieConsent = () => { }
	return (
		<CookieConsentAdvisor hideOnAccept
			location={OPTIONS.BOTTOM}
			cookieName='consentCookie'
			onAccept={onAcceptCookieConsent}
			onDecline={onDeclineCookieConsent}
			buttonText='I agree'
			buttonStyle={cookieConsentButtonStyle}
			contentStyle={cookieConsentContentStyle}
			style={cookieConsentStyle}
		>
			This website uses cookies to store information on your computer.
			Some cookies are essential to make the website work properly.
			Other cookies help Condoo enhance the website experience. By using this website,
			you consent to the placement of these cookies. For more information,
			please review our <Link style={{ textDecorationLine: 'underline' }} to={paths.privacyPolicy}>privacy notice</Link>.
		</CookieConsentAdvisor>
	)
}

export default CookieConsent