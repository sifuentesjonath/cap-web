// Service api
import {
	createTitleholder,
	patchProfile,
	createBank,
	updateProperty,
	updateTitleholder,
	setBillingAddress,
	deleteProperty,
	updatePlaidDetails,
	getTitleHolderEmailAndName,
	createZendeskJWT,
	docusignTitleHolders,
	getPropertiesAdmin,
	updateStep
} from '@/service/api';
// Types
import { 
	CreatePropertyParamsType,
	CreatePlaidDetailsParamsType, 
	UpdateUserProfileParamsType,
	DocumentSignParamsType,
	CreateTitleHolderParamsType,
	UpdateTitleHoldersEmailsParamsType,
	UpdatePropertyParamsType,
	UpdateTitleHolderParamsType,
	TitleHolderType,
	SetBillingAddressToTitleHolderParamsType,
	CreatePlaidParamsType,
	PropertyType,
	CreateTitleHolderBuildiumType,
	UserProfileType,
	CreateZendeskUserParamsType,
	CreatedPropertyBuildiumIdsResponse,
	PropertyAdminType
} from './apiTypes'
// hooks
import usePropertyFee from '@/hooks/usePropertyFee';
// Functions
import { retryRequest } from './retry-requests';
import { checkPropertiesBuildiumIds } from './useApi/Buildium/repairBuildium';
import { createPropertyInBuildium, createRentalOwnerInBuildium, refreshUnitInBuildium } from './useApi/Buildium/createBuildium';

// == User == 

// == Profile == 

export const updateProfileStep = async (step: number) => {
	const { data } = await updateStep({ step });
	return data;
}

//@ts-ignore
export const updateUserProfile = async (profileParams: UpdateUserProfileParamsType):Promise<UserProfileType> => {
	const { data: updateProfileResult } = await patchProfile(profileParams);
	if (!updateProfileResult?.Id) throw (updateProfileResult);
	return updateProfileResult;
}

// == Plaid == 

export const createPlaidDetails = async (plaidParams: CreatePlaidDetailsParamsType) => {
	const plaidResult = await createBank(plaidParams);
	return plaidResult;
}

export const createPlaidDetailsForTitleHolder = async (TitleHolderId:string, plaidParams:CreatePlaidParamsType) => {
	try {
		const { public_token: PublicToken } = plaidParams;

		if(!PublicToken || PublicToken.length == 0) 
			throw('Something went wrong while getting public plaid token');

		const plaidResult = await createPlaidDetails({
			TitleHolderId, 
			PublicToken, // This token is exchanged in backend
		})
		return plaidResult;
	} catch(error) {
		console.error('Error:', error);
	}

}

export const updatePlaidDetailsForTitleHolder = async (TitleHolderId:string, plaidParams:CreatePlaidParamsType) => {
	try {
		const { public_token: PublicToken } = plaidParams;

		if(!PublicToken || PublicToken.length == 0) 
			throw('Something went wrong while getting public plaid token');

		const plaidResult = await updatePlaidDetails({
			TitleHolderId, 
			PublicToken, // This token is exchanged in backend
		})
		return plaidResult;
	} catch(error) {
		console.error('Error:', error);
	}

}

// == Property ==> admin ==

export const getPropertiesAdminWithBuildiumChecker = async () => {
	try {
		const propertiesAdmin:PropertyAdminType[] = await getPropertiesAdmin();

		try { // Fixing properties if there are any not complete
			await checkPropertiesBuildiumIds(propertiesAdmin);
		} catch (err) { }

		return propertiesAdmin;
	} catch (err) {
		throw (err)
	}
}

// == TitleHolder ==

/** Creates a titleHolder with the given firstName, lastName and IsCompany. */
export const createATitleHolder = async (titleHolderParams: CreateTitleHolderParamsType)
	//@ts-ignore
	:Promise<TitleHolderType> => {
	const { FirstName, LastName, IsCompany = 0, isCreationInSetup = false } = titleHolderParams;

	const createParams:CreateTitleHolderParamsType = { 
		...titleHolderParams,
		isCreationInSetup,
		IsCompany: IsCompany ?? 0,
	};
	const titleHolderResult = await createTitleholder(createParams);
	if (!titleHolderResult?.Id) throw (titleHolderResult);

	return { 
		//@ts-ignore
		...titleHolderResult 
	};
}

export const updateATitleHolder = async (id,titleHolderParams: UpdateTitleHolderParamsType) => {
	const titleHolderResult:TitleHolderType = await updateTitleholder(id, titleHolderParams)
   if (!titleHolderResult?.Id) throw (titleHolderResult);
	return titleHolderResult;
}

//export const updateTitleHoldersEmails = async (updateTitleHoldersParams: UpdateTitleHoldersEmailsParamsType[]) => { }

// == Docusign ==

export const sendDocumentSignToTitleHolders = async (docusignParams: DocumentSignParamsType) => {
   // @ts-ignore
	const { ok, data } = await docusignTitleHolders(docusignParams);
	return { ok, data }
}

export const sendManagementAgreementToTitleHolder = async (titleHolderId: string, loggedUser: string) => {
	try {
		const obtainedTitleHolder:TitleHolderType = await getTitleHolderEmailAndName(titleHolderId);

		const { Id, Email, FirstName, LastName, PropertiesOwned } = obtainedTitleHolder;
		const titleHolderPropertyFee = `${usePropertyFee(PropertiesOwned)}%`;

		const titleHolderDocuSignParams: DocumentSignParamsType = {
			LoggedUser: loggedUser,
			TitleHolders: [
				{
					Id: Id.toString(),
					Email,
					Name: `${FirstName} ${LastName}`,
					PropertyFee: titleHolderPropertyFee,
				}
			]
		};
		
		const docuSignResponse = await sendDocumentSignToTitleHolders(titleHolderDocuSignParams);
		return docuSignResponse;
	} catch {
		throw new Error('Error while sending email to titleholder');
	}
}

// New endpoint for createController
// export const sendDocumentSign = async (docusignParams: DocumentSignParamsType) => {
//    // @ts-ignore
// 	const { ok, data } = await docusign(docusignParams);
// 	return { ok, data }
// }

// == Buildium ==

export const setABillingAddressToTitleHolder = async (titleHolderParams: SetBillingAddressToTitleHolderParamsType) => {
	const billingAddressResult = await setBillingAddress(titleHolderParams)
	return billingAddressResult;
}

// == Zendesk ==

export const authenticateUserInZendeskWebWidget = async (zendeskParams: CreateZendeskUserParamsType) => {
	try {
		const {email, sign, username} = zendeskParams;
		const data = createZendeskJWT({sign,email,username});
		return data;
	} catch (error) {
		console.error( error);
		throw (error);
	}
}
