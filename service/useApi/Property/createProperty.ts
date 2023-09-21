// API
import { createProperty, deleteProperty } from "@/service/api";
import { sendManagementAgreementToTitleHolder } from "@/service/useApi";
import { CreatedPropertyBuildiumIdsResponse, CreatePropertyParamsType, PropertyType } from "@/service/apiTypes";
import { 
	createPropertyInBuildium, 
	checkOrRepairBuildiumIds, 
} from "../Buildium";

/** Creates a property, registers it in buildium and links the buildium id to the property*/
export const createAProperty = async (propertyParams: CreatePropertyParamsType) => {
	const { TitleHolderId, isCreationInApp, LoggedUser } = propertyParams;

	try {
		// == Property creation ==

		const propertyResponse:PropertyType = await createProperty(propertyParams);
		checkPropertyCreation(propertyResponse);
		
		const { Id: PropertyId } = propertyResponse;

		const buildiumPropertyResult = await createPropertyInBuildium(PropertyId);

		// -- Check for errors in buildium and try to solve them --
		const buildiumPropertyResponse = await checkBuildiumErrorsInPropertyCreation(
			propertyResponse,
			buildiumPropertyResult,
		)

		// == Management Agreement

		const canSendManagementAgreement = isCreationInApp && Boolean(LoggedUser);
		if(canSendManagementAgreement) await sendManagementAgreementToTitleHolder(TitleHolderId, LoggedUser);

		return { 
			PropertyCreated: propertyResponse, 
			BuildiumProperty: buildiumPropertyResponse 
		};
	} catch(err){
		// console.log('something happened', err)
		throw(err)
	}
}

const checkPropertyCreation = (propertyResponse: any) => {
	if(!propertyResponse?.Id) throw(propertyResponse);
}

/** Ensures buildium third party API service is behaving consistently, or at least tries to */
const checkBuildiumErrorsInPropertyCreation = async (
	propertyCreationResult: PropertyType,
	buildiumCreationResult: any
) => {
	const { Id: propertyId } = propertyCreationResult;

	const isNotOk = buildiumCreationResult?.ok == false;
	// console.log({ buildiumCreationResult })
	if(isNotOk) {
		// console.error('checkBuildiumErrorInPropertyCreation;', { isNotOk });

		const isAlreadyExistsMessage = buildiumCreationResult?.message?.search('exist') != -1 ? true : false;
		// console.log({ isAlreadyExistsMessage });
		if (isAlreadyExistsMessage) {
			// console.log('Already exists this property in buildium');
			/** This is Error 422:
				* UserMessage might be: 
				* 	'There was an error creating the Rental Property: 
				* 	A property or an association with that name already exists.'
				* status: 422
			*/
			throw('This property already exists.'); 
		}
		// const buildiumIdsAttributeIsMissing = !buildiumCreationResult.BuildiumIds;
		// console.error({ buildiumIdsAttributeIsMissing });
		// if(buildiumIdsAttributeIsMissing) throw(buildiumCreationResult);
		// if(buildiumIdsAttributeIsMissing) throw('Something happened, try again');
	}

	// == Check creation in buildium => check if property is complete == 

	let buildiumIds: CreatedPropertyBuildiumIdsResponse = buildiumCreationResult.BuildiumIds;
	try { // User must not notice this errors due to this being a background process to fix buildium requests
		buildiumIds = await checkOrRepairBuildiumIds(buildiumIds, propertyCreationResult);
	} catch (err) { }

	const buildiumPropertyResponse = { ...buildiumCreationResult, BuildiumIds: buildiumIds };

	return buildiumPropertyResponse;
}

export default createAProperty;