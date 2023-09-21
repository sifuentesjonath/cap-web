import { PropertyType } from "@/service/apiTypes";
import { IProperty } from '@/containers/App/Properties/utils/types';

export const parseDetailedAddressPropertyName = (property: PropertyType | IProperty) => {
	// Get address
	const { City, State } = property.Address;
	const address = [City, State].join(', ');
	// Join address with property name and return
	const parsedName = parsePropertyName(property) + ',';
	const propertyWithAddress = [parsedName, address].join(' ');
	return propertyWithAddress;
}

export const parsePropertyName = (property: PropertyType | IProperty) => {
	const Name = applyNumberSignToPropertyName(getPropertyName(property));
	const unitNumber = property?.UnitNumber ?? undefined;
	const unitName = isNaN(unitNumber) ? '' : `#${unitNumber} -`;
	return unitName 
		? [ unitName, Name ].join(' ') // "PropertyName Unit unitNumber"
		: Name; // "PropertyName"
}

const applyNumberSignToPropertyName = (name: string) => {
	const firstWord = name.split(' ')[0];
	const firstWordAsNumber = parseInt(firstWord);
	if(isNaN(firstWordAsNumber)) return name;
	else return name;
}

// TODO-Solve-Workaround: Solve this inconsistency 
// due to financials page API response this is with lowercase
const getPropertyName = (property):string => {
	return property.name ?? property.Name;
}

export default parsePropertyName;