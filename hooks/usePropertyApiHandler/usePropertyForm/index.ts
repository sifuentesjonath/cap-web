import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import openAdviseToast from '@components/element/StyledToastAdvise';
import useErrorMessage from '@/hooks/useErrorMessage';
import useValidateEmail from '@/hooks/useValidateEmail';
import {
	PropertyFormControlledInputsType,
	PropertyFormType,
	PropertyHandlerType,
	toPropertyApiType,
	usePropertyApiHandler,
	usePropertyForm as usePropertyFormulary
} from ".."

export type SubmitedPropertyStatusType = {
	status: 'success'|'failed'
	message: string;
	data: any|null;
}
/** A centralized custom hook that handles API actions for a property for using it on all property forms 
 * ```
 * returns: [ [formAction, setFormAction], propertyForm, onSubmit ]
 * ```
*/
const usePropertyForm = (apiAction: PropertyHandlerType, isCreationInApp=false):[
	setFormAction: [PropertyHandlerType,Dispatch<SetStateAction<PropertyHandlerType>>],
	propertyForm: UseFormReturn<PropertyFormControlledInputsType>, 
	onSubmit: SubmitHandler<PropertyFormControlledInputsType>,
] => {
	const propertyForm = usePropertyFormulary();
	const [formAction, setFormAction] = useState<PropertyHandlerType>(apiAction);
	const getApiActionToastMessage = (action:PropertyHandlerType) => {
		const actions = {
			'create': 'created',
			'update': 'updated',
			'delete': 'deleted'
		}
		return actions[action];
	}
	const getSubmitedPropertyStatus = (status:'success'|'failed', message, data):SubmitedPropertyStatusType => {
		return { status, message, data }
	}
	const onSubmit: SubmitHandler<PropertyFormControlledInputsType> = async (property):Promise<SubmitedPropertyStatusType> => {
		try {
			const { LoggedUser, TitleHolderId: { email } } = property;
			checkEmailIsValid(email);

			// == Begin onSubmit action ==
			const propertyInAppParams: PropertyFormControlledInputsType = {
				...property,
				isCreationInApp,
				LoggedUser
			};

			// == Format query data and (create / update / delete) property == {
			// 	Any useApi throws will be catched
			const formatedProperty = toPropertyApiType(propertyInAppParams);
			checkPropertyValuesAreValid(formatedProperty)
			const propertyResult = await usePropertyApiHandler(formAction, formatedProperty);
			// }

			const isApiActionSuccess = 
				propertyResult?.propertycreated 	 			// create response
					|| propertyResult?.Id						// update response
					|| propertyResult?.affected != 0;		// delete response			

			if (isApiActionSuccess){
				return getSubmitedPropertyStatus(
					'success', 
					`Property ${getApiActionToastMessage(formAction)} successfully.`, 
					propertyResult.PropertyCreated
				)
			}
		} catch (error) {
			return checkErrorsAndGetStatus(error);
		}
	}

	const checkPropertyValuesAreValid = (property: PropertyFormType) => {
		const { 
			Name, AddressLine1, // Ensure these are valid for buildium
			TitleHolderId, Bathrooms, Bedrooms
		} = property;

		const checkForValidStringFields = () => { 
			const mustBeValidStringFields  = [ Name, AddressLine1 ];
			mustBeValidStringFields.forEach((field) => {
				const isFalseString = !Boolean(field);
				const isUndefined = field.search('undefined') != -1; 

				const isNotValid = isFalseString || isUndefined;
				if(isNotValid) throw ('Please type again your property name');
			})
		}

		const checkForNullFields = () => {
			const mustNotBeNullFields = {
				'Title holder' : TitleHolderId, 
				'Bathrooms': Bathrooms,
				'Bedrooms': Bedrooms,
			};

			const nullFields:string[] = [];
			const fieldKeys = Object.keys(mustNotBeNullFields);
			fieldKeys.forEach(fieldKey => {
				const field = mustNotBeNullFields[fieldKey];
				if(!field) nullFields.push(fieldKey);
			});

			const nullFieldsLength = nullFields.length;
			const areNullFields = nullFieldsLength != 0;
			if(areNullFields) {
				const joinedNullFields = nullFields.join(',');
				const cannotBeNullMessage = `You must fill the following field(s): ${joinedNullFields}`;
				throw(cannotBeNullMessage);
			}
		}

		checkForValidStringFields();
		checkForNullFields();
	}

	const checkEmailIsValid = (email: string) => {
		if(email && !useValidateEmail(email))
			throw (
				'The title holder you selected does not have a valid email, Condoo needs a valid email in order to send a Management Agreement.' 
			)
	}

	/** Any error should be thrown so this function returns a readable status for the user */
	const checkErrorsAndGetStatus = (error) => {
		const errorMessage = useErrorMessage(error);

		// == handle error message of units being undefined == {
		if(errorMessage.search('undefined') != -1) {
			console.error(errorMessage);
			return getSubmitedPropertyStatus('success', `Property ${getApiActionToastMessage(formAction)} sucessfully`, null);
		}
		// }

		return getSubmitedPropertyStatus('failed', errorMessage, null);
	}

	return [
		[formAction, setFormAction], 
		propertyForm, 
		onSubmit
	]
}


export default usePropertyForm;