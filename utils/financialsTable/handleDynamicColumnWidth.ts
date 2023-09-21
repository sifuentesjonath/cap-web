const createColumnWidth = (dateView: string) => {
	const columnWidthHandler = {
		income: dateView == 'm6' ? 220 : 220,
		category: dateView == 'm6' ? 80 : 80,
		dynamic: dateView == 'm6' ? 100 : 100,
		total: dateView == 'm6' ? 100 : 100,
	}
	return columnWidthHandler;
}

export default createColumnWidth;