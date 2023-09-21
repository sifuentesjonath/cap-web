const defaultErrorMessage = 'Something went wrong, try again later.';
/** Handles returning the error message that backend sends */
const useErrorMessage = (error: any, customErrorMessage: string = defaultErrorMessage): string => {
	const responseErrorMessage: string = error?.data?.message || error?.message || '';
	const isErrorAString: boolean = typeof (error) === 'string';

	const errorMessage = responseErrorMessage ? responseErrorMessage
		: isErrorAString ? error
			: customErrorMessage;

	return errorMessage;
}

export default useErrorMessage;