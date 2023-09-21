import { PropertyType } from "@/service/apiTypes";

/** Use this to validate if a Marker can be sent to map without breaking execution */
export const isPropertyMarker = (property: PropertyType):boolean => {
	if(property.IsActive === 0) return false;

	const { Address } = property;
	if(!Address) return false;

	const { Latitude, Longitude } = Address;
	return Latitude && Longitude ? true : false;
}