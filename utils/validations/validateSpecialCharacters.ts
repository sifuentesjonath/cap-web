const validateSpecialCharacters = (phrase: string) => {
	const format = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
	const words = phrase.split(' ');

	const validations = words.map(word => format.test(word));
	return validations.includes(true);
}

export default validateSpecialCharacters;