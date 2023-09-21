import CurrencyFormatter from "@utils/CurrencyFormatter";

const formatContribution = (contributions:number[]) => {
	const formatter = new CurrencyFormatter();
	return contributions.map(contribution => formatter.format(contribution));
}

export default formatContribution;