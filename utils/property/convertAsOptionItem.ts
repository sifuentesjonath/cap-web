import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { PropertyType } from '@/service/apiTypes';

export default function convertPropertyAsOptionItem(properties: PropertyType[]): IOptionsProps[] {
	return properties.map(({ Name, Id }) => ({ label: Name, value: Id.toString() }));
}