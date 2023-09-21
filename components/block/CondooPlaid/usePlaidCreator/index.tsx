import { createPlaidDetailsForTitleHolder, updatePlaidDetailsForTitleHolder } from '@/service/useApi';
import { CreatePlaidParamsType } from '@/service/apiTypes';

export type PlaidCreatorType = {
	// Function reference of createPlaidFor...
	plaidCreator: (Id: string, plaidParams: CreatePlaidParamsType) => void,
	Id: string, // Id that will be used for
}

const plaidCreators = {
	'titleholder': createPlaidDetailsForTitleHolder,
	'titleholder-update': updatePlaidDetailsForTitleHolder,
}

type CreatorTypes = 'titleholder' | 'titleholder-update';
export function usePlaidCreator(action: CreatorTypes, Id: string): PlaidCreatorType {
	const newPlaidCreator: PlaidCreatorType = {
		Id,
		plaidCreator: plaidCreators[action]
	}
	return newPlaidCreator;
}