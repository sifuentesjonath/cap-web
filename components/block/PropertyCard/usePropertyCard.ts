import { IProperty } from '@/containers/App/Properties/utils/types';
import parsePropertyName from '@utils/property/parsePropertyName';

export const usePropertyCard = (property:IProperty):IProperty => {
	const { Name } = property;
	const isBadName = (Name == null || Name.length == 0);
	//@ts-ignore
	const propertyName = isBadName ? 'Unknown property name' : parsePropertyName(property);

	return { ...property, Name: propertyName };
}