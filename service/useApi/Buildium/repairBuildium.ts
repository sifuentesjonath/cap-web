import { 
	CreatedPropertyBuildiumIdsResponse, 
	PropertyAdminType, 
	PropertyType 
} from "@/service/apiTypes";
import {
	createPropertyInBuildium,
	createRentalOwnerInBuildium,
	refreshUnitInBuildium,
} from './createBuildium'
import { ClientBuildiumErrors } from './buildium.errors'

// == Verbose ==
const verboseFlag = false;
const useVerbose = (messageCallBack: () => void) => {
	if(verboseFlag) messageCallBack();
}
 
/** Checks if given `buildiumIds` are complete, otherwise attempts to *repair* the property
 * 
 * A Property is complete when:
 * - Has `Property.BuildiumId`, `TitleHolder.BuildiumId` and `Unit.BuildiumId` as not `null`
 */
const checkOrRepairBuildiumIds = async (buildiumIds: CreatedPropertyBuildiumIdsResponse, propertyResult: PropertyType) => {
	if (areAllBuildiumIdsOk(buildiumIds)) return buildiumIds;

	const { 
		Id: PropertyId, 
		TitleHolder: { Id: TitleHolderId }, 
		// Not necesary to send to backend as a property has it's respective unit, 
		// 	we can grab the unit from its own property in a better way
		// Unit: { Id: UnitId } 
	} = propertyResult;

	let fixedBuildiumIds;
	try {
		fixedBuildiumIds = await attemptToFixIds({PropertyId, TitleHolderId}, buildiumIds);
	} catch(error) {}

	return fixedBuildiumIds;
}

export const areAllBuildiumIdsOk = (buildiumIds: CreatedPropertyBuildiumIdsResponse) => {
	const { Property, TitleHolder, Unit } = buildiumIds;
	const isPropertyUndefined = typeof Property != 'number'; 
	const isTitleholderUndefined = typeof TitleHolder != 'number'; 
	const isUnitUndefined = typeof Unit != 'number'; 

	const errors = [
		isPropertyUndefined, 
		isTitleholderUndefined, 
		isUnitUndefined
	]

	const notAllIds = errors.includes(true);
	if(notAllIds) return false;
	return true;
}

/** Check every given property to be complete and attempt to fix incomplete properties.
 * 
 * `{ Property.BuildiumId, TitleHolder.BuildiumId, Unit.BuildiumId }` 
 * */
export const checkPropertiesBuildiumIds = async (properties: PropertyAdminType[]) => {
	const propertiesToFix = properties.filter((
		{ 
			BuildiumId: Property, 
			TitleHolder: { BuildiumId: TitleHolder },
			Unit: { BuildiumId: Unit }
		}
	) => !areAllBuildiumIdsOk({ Property, TitleHolder, Unit }));


	const needsToFixProperties = propertiesToFix.length != 0;
	if(!needsToFixProperties) return;

	// == Attempt to fix properties == 

	useVerbose(() => console.log('trying to fix properties...', { propertiesToFix }));
	const attemptPropertyFix = async (property: PropertyAdminType) => {
		const {
			Id: PropertyId,
			BuildiumId: Property, 
			TitleHolder: { 
				Id: TitleHolderId, BuildiumId: TitleHolder 
			},
			Unit: { BuildiumId: Unit }
		} = property;

		useVerbose(() => console.log('Fixing...', property));
		const condooIds = { PropertyId, TitleHolderId };
		const buildiumIds = {Property, TitleHolder, Unit };

		return await attemptToFixIds(condooIds, buildiumIds);
	}
	const fixedProperties = propertiesToFix.map(attemptPropertyFix);
	const fixedPropertiesResults = await Promise.all(fixedProperties);

	fixedPropertiesResults.forEach((property) => {
		const isFixedProperty = areAllBuildiumIdsOk(property);
		if(isFixedProperty) useVerbose(() => console.log(`Fixed a property.`, property));
		else useVerbose(() => console.log('Property not fixed yet', property));
	})
}

const attemptToFixIds = async (
	condooIds: { PropertyId: number, TitleHolderId: number},
	buildiumIds: CreatedPropertyBuildiumIdsResponse
) => {
	let buildiumIdsDict = {...buildiumIds};
	let tries = 1;
	try {
		while (!areAllBuildiumIdsOk(buildiumIdsDict) && tries <= 3){
			useVerbose(() => console.log(`Trying to fix property creation, Retry #${tries}...` ));
			buildiumIdsDict = await fixBuildiumIds(condooIds, buildiumIds);
			tries++;
		}
	} catch (error) {
		console.error('Bad retry', { error });
		// throw (err);
	} finally {
		const failedAllTries = tries >= 3 && !areAllBuildiumIdsOk(buildiumIdsDict);
		if(failedAllTries){
			throw (ClientBuildiumErrors.buildiumFixTooManyAttempts);
		}
	}
	return buildiumIdsDict;
}

const fixBuildiumIds = async (
	condooIds: { PropertyId: number, TitleHolderId: number},
	buildiumIds: CreatedPropertyBuildiumIdsResponse
) => {
	const { PropertyId, TitleHolderId } = condooIds;
	let buildiumIdsDict = { ...buildiumIds };
	const { Property, TitleHolder, Unit } = buildiumIdsDict;

	useVerbose(() => console.log({ Property, TitleHolder, Unit }));
	if (Property == undefined) {
		try {
			useVerbose(() => console.log('retrying property creation...'));
			const propertyResult = await createPropertyInBuildium(PropertyId);
			buildiumIdsDict = { ...buildiumIdsDict, Property: propertyResult }
		} catch (error) {}
	} 

	if(TitleHolder == undefined) {	
		try {
			useVerbose(() => console.log('retrying titleholder creation...'));
			const titleHolderResult = await createRentalOwnerInBuildium(TitleHolderId);
			buildiumIdsDict = { ...buildiumIdsDict, TitleHolder: titleHolderResult }
		} catch (error) {}
	} 

	if(Unit == undefined) {	
		try {
			useVerbose(() => console.log('retrying unit refresh...'));
			const unitResult = await refreshUnitInBuildium(PropertyId);
			buildiumIdsDict = { ...buildiumIdsDict, Unit: unitResult }
		} catch (error) {}
	}

	return buildiumIdsDict;
}

export default checkOrRepairBuildiumIds;