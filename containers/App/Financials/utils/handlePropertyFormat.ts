import { getPropertyByEmail } from '@/service/api';
import { PropertyType } from '@/service/apiTypes';
import parsePropertyName from '@utils/property/parsePropertyName';
 
/** When Buildium Financials are empty and we need the properties as items */
export const fetchPropertiesAndFormatAsItems =  async (email: string) => {
	const properties: PropertyType[] = await getPropertyByEmail(email);
	const propertiesItems = properties.map(formatPropertyItem);
	return propertiesItems;
}

/** Formats properties as items that will be passed to the property switcher (the property selector of the page)  */
export const formatPropertiesAsItems = (properties: PropertyType[]) => {
	const propertiesItems = properties.map(formatPropertyItem);
	return propertiesItems;
}

const formatPropertyItem = (property: PropertyType) => {
	return {
		title: parsePropertyName(property), 
		value: `${property.Id}`
	};
}