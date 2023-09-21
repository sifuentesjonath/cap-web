/**
 * Filters naming and Filter Criterium logic goes here.
 */

export type FiltersType = 'Statements' | 'Agreements' | 'Taxes' | 'Other';

export const documentTypes = {
	statements: 'statements',
	taxes: 'taxes',
	agreements: 'agreements',
}

export const getFilterCriterium = (buttonTitle:FiltersType):string[] => {
	// array items belong to respective filter name.
	const filter = {
		'statements': [documentTypes.statements],
		'taxes': [documentTypes.taxes],
		'agreements': [documentTypes.agreements],
		'other': ['other'] // interpret empty array as other documents not in any filter
	}
	return filter[buttonTitle.toLowerCase()];
}