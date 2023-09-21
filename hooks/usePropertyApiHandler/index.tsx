import { useForm } from 'react-hook-form';
import { updateAProperty, createAProperty, deleteAProperty } from '@/service/useApi/Property'
import { UpdatePropertyParamsType, CreatePropertyParamsType } from '@/service/apiTypes'
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import replaceSpecialCharacters from 'replace-special-characters';
import { ITitleHolderOption } from '../useTitleHoldersAsOptions';

export type PropertyHandlerType = 'create' | 'update' | 'delete';

/** Use this type for useForm() */
export type PropertyFormControlledInputsType = {
	Id?: number;
	Name: string;
	NumberUnits: string;
	City: string;
	PostalCode: string;
	State: string;
	Rent: string;
	StreetNumber: string;
	Longitude: number;
	Latitude: number;
	Country: string;
	Bedrooms: IOptionsProps;
	Bathrooms: IOptionsProps;
	LeaseStatus: IOptionsProps
	TitleHolderId: ITitleHolderOption;
	isCreationInApp?: boolean;
	LoggedUser?: string; // user email
}

// This type is for the property handler
export type PropertyFormType = {
	Id?: number;
	Name: string;
	NumberUnits: string;
	City: string;
	PostalCode: string;
	State: string;
	Bedrooms: string;
	Bathrooms: string;
	LeaseStatus: string
	Rent: string;
	StreetNumber: string;
	AddressLine1?: string;
	Longitude: number;
	Latitude: number;
	TitleHolderId: string;
	Country: string;
	isCreationInApp?: boolean;
	LoggedUser?: string;
};

// Type handler
export const toPropertyApiType = (property: PropertyFormControlledInputsType) => {
	const {
		Id,
		Name, PostalCode, Bathrooms,
		Bedrooms, City, Country, Latitude,
		LeaseStatus, Longitude, Rent,
		State, StreetNumber, TitleHolderId, NumberUnits, isCreationInApp,
		LoggedUser } = property;

	const convertedProperty: PropertyFormType = {
		Id, Name, Rent,
		Country, State, City, PostalCode, StreetNumber,
		Latitude, Longitude,
		NumberUnits,
		AddressLine1: StreetNumber,
		TitleHolderId: TitleHolderId?.value,
		Bedrooms: Bedrooms?.value,
		Bathrooms: Bathrooms?.value,
		LeaseStatus: LeaseStatus?.value,
		isCreationInApp,
		LoggedUser
	}

	return convertedProperty
}

export const getPropertyControlledFormDefaultValues = (): PropertyFormControlledInputsType => {
	return {
		Id: null,
		Name: '',
		NumberUnits: '',
		Rent: '',
		Country: '',
		State: '',
		City: '',
		StreetNumber: '',
		PostalCode: '',
		Latitude: null,
		Longitude: null,
		LeaseStatus: null,
		TitleHolderId: null,
		Bathrooms: null,
		Bedrooms: null,
	}
}

// API handler

const getCreatePropertyParams = (property: PropertyFormType): CreatePropertyParamsType => {
	const {
		Name, PostalCode, Bathrooms,
		Bedrooms, City, Country, Latitude,
		LeaseStatus, Longitude, Rent,
		State, AddressLine1, TitleHolderId, NumberUnits, isCreationInApp,
		LoggedUser } = property;

	const PropertyParams: CreatePropertyParamsType = {
		Name, Rent, Bedrooms, Bathrooms,
		Country, State, City, PostalCode,
		AddressLine1, Latitude, Longitude, LeaseStatus, NumberUnits,
		TitleHolderId, isCreationInApp,
		LoggedUser
	}

	return PropertyParams
}

const getUpdatePropertyParams = (property: PropertyFormType) => {
	const {
		Id, Name, PostalCode, Bathrooms,
		Bedrooms, City, Country, Latitude,
		LeaseStatus, Longitude, Rent,
		State, StreetNumber, NumberUnits } = property;

	const PropertyParams: UpdatePropertyParamsType = {
		Id, Name, Rent,
		Province: '', Country, State, City, PostalCode,
		Latitude, Longitude, LeaseStatus, NumberUnits,
		AddressLine1: StreetNumber,
		Bedrooms: parseInt(Bedrooms),
		Bathrooms: parseInt(Bathrooms),
	}

	return PropertyParams;
}

const getDeletePropertyParams = (property: PropertyFormType) => property.Id;

const propertyHandles = {
	'create': createAProperty,
	'update': updateAProperty,
	'delete': deleteAProperty,
}
const propertyGetter = {
	'create': getCreatePropertyParams,
	'update': getUpdatePropertyParams,
	'delete': getDeletePropertyParams,
}

export const usePropertyApiHandler = async (action: PropertyHandlerType, property: PropertyFormType) => {
	const cleanedProperty = cleanPropertyFieldsFromSpecialCharacters(property);

	const handler = propertyHandles[action];
	const propertyParams = propertyGetter[action](cleanedProperty);

	// @ts-ignore
	return await handler(propertyParams);
}

/** */
const cleanPropertyFieldsFromSpecialCharacters = (property: PropertyFormType) => {
	const { NumberUnits, City, Country, State, StreetNumber } = property;

	const numberUnitsDefaultValue = '1';
	const cleanedProperty: typeof property = {
		...property,
		NumberUnits: NumberUnits !== '' ? NumberUnits : numberUnitsDefaultValue,
		City: replaceSpecialCharacters(City).toString(), // replaceSpecialCharacters returns the String class, needs to be converted to a primitive string.
		Country: replaceSpecialCharacters(Country).toString(),
		State: replaceSpecialCharacters(State).toString(),
		AddressLine1: replaceSpecialCharacters(StreetNumber).toString()
	}

	return cleanedProperty;
}

/** Returns a specific useForm hook of `PropertyFormControlledInputsType` with empty default values */
export const usePropertyForm = () => {
	const propertyForm = useForm<PropertyFormControlledInputsType>({
		defaultValues: getPropertyControlledFormDefaultValues()
	})

	return propertyForm
}
