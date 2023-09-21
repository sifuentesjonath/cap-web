export const getFlagUrl = (cdnUrl, countryCode, cdnSuffix) => {
	const flagUrl = `${cdnUrl}${countryCode.toLowerCase()}.${cdnSuffix}`;
	return flagUrl;
}

export const getFlagUrlDefaultSvg = (countryCode) => {
	const DEFAULT_CDN_URL =
		'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/';
	const DEFAULT_CDN_SUFFIX = 'svg';

	const flagUrl = `${DEFAULT_CDN_URL}${countryCode.toLowerCase()}.${DEFAULT_CDN_SUFFIX}`;
	return flagUrl;
}