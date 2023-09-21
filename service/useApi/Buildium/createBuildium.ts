import { createDocumentinBuildium } from '@/service/api'

export const createPropertyInBuildium = async (PropertyId: number) => {
	try{
		const buildiumPropertyParams = { type: 'property', id: PropertyId };

		const { data } = await createDocumentinBuildium(buildiumPropertyParams); 
		// const data = retryRequest(createDocumentinBuildium, buildiumPropertyParams, 3);

		return data;
	} catch (error) {
		throw error;
	}
}

export const refreshUnitInBuildium = async (propertyId: number) => {
	try{
		const buildiumPropertyParams = { type: 'unit', id: propertyId };

		const { data } = await createDocumentinBuildium(buildiumPropertyParams); 
		// const data = retryRequest(createDocumentinBuildium, buildiumPropertyParams, 3);

		return data;
	} catch (error) {
		throw error;
	}
}

export const createRentalOwnerInBuildium = async (titleHolderId: number) => {
	try{
		const buildiumPropertyParams = { type: 'rental-owner', id: titleHolderId };

		const { data } = await createDocumentinBuildium(buildiumPropertyParams); 
		// const data = retryRequest(createDocumentinBuildium, buildiumPropertyParams, 3);

		return data;
	} catch (error) {
		throw error;
	}
}