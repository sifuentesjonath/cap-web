export default class CurrencyFormatter {
	private formatter = new Intl.NumberFormat('en-IN', {
		style: 'currency',
		currency: 'USD',
		maximumSignificantDigits: 3
	});

	public format(value: number) {
		return isNaN(value) 
			? value 
			: this.formatter.format(value);
	}
}