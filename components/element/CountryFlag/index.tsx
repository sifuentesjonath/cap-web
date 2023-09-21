import * as React from 'react';
import { getFlagUrl } from './handleCountryFlag';
import { ReactCountryFlagProps } from './interface';

const DEFAULT_CDN_URL =
	'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/';
const DEFAULT_CDN_SUFFIX = 'svg';

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397;

export const CountryFlag = ({
	cdnSuffix = DEFAULT_CDN_SUFFIX,
	cdnUrl = DEFAULT_CDN_URL,
	countryCode,
	style,
	svg = true,
	...props
}: ReactCountryFlagProps) => {

	if (typeof countryCode !== 'string') return null;

	if (svg) {
		const flagUrl = getFlagUrl(cdnUrl, countryCode, cdnSuffix);

		return (
			<img
				{...props}
				src={flagUrl}
				style={{
					display: 'inline-block',
					width: '1em',
					height: '1em',
					verticalAlign: 'middle',
					...style,
				}}
			/>
		);
	}

	const emoji = countryCode
		.toUpperCase()
		.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + OFFSET));

	return (
		<span
			role="img"
			{...props}
		// style={{
		// 	display: 'inline-block',
		// 	fontSize: '1em',
		// 	lineHeight: '1em',
		// 	verticalAlign: 'middle',
		// 	...style,
		// }}
		>
			{emoji}
		</span>
	);
};

export default CountryFlag;