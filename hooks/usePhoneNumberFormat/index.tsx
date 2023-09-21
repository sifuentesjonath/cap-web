/** Can be used to format a phone number
 * ```
 * Format:
 * (123) 123-3221
 * Parse: 
 * 1231233221
 * ```
*/
const usePhoneNumberFormat = () => {
	const formatPhoneNumber = (phoneNumber: string) => {
		const cleaned = ('' + phoneNumber).replace(/\D/g, '');
		const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

		if (match) {
			return '(' + match[1] + ') ' + match[2] + '-' + match[3];
		}
		return phoneNumber;
	}
	const parsePhoneNumber = (formattedPhoneNumber: string) => {
		const parsedNumber = formattedPhoneNumber.replaceAll(/[^\d]/g, '');
		return parsedNumber;
	}

	return {
		format: formatPhoneNumber,
		parse: parsePhoneNumber,
	}
}

export default usePhoneNumberFormat;