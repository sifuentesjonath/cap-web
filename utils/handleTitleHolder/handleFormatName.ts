const handleFormatName = (name: string) => {
	const names = name.split(' ');
	const FirstName = names.shift();
	return {
		FirstName,
		LastName: names.join(' ')
	}
}

export default handleFormatName;