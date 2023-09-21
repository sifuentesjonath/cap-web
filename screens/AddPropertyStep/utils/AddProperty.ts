
export const inputContainerStyle = `flex items-center w-full justify-between  mb-3 mr-auto`;
export const inputContainerStyleDouble = `h-10 lg:h-10 xl:h-10 w-full mb-3 `;
export const InputStyle = {
	height: 30,
}

// Type
export type MarkersByStreet = { [key: string]: IProperty[] };
export type AddPropertyInputs = {
	name: string;
	unit: string;
	city: string;
	postalcode: string;
	state: string;
	bedrooms: string;
	bathrooms: string;
	leaseStatus: string
	rent: string;
	streetNumber: string;
	longitude: number;
	latitude: number;
	titleHolder: string;
	country: string;
};
export type MarkersType = {
	[propertyId: string]: IProperty[]
}
// Interface
export interface ISelectObj {
value: string;
label: string;
}

export interface IPostData {
titleHolder: ISelectObj;
leaseStatus: ISelectObj; 
bathrooms: ISelectObj;
bedrooms: ISelectObj;
}

export interface ILocation {
address: any;
longitude: any;
latitude: any;
streetNumber?: any;
country?: any,
}

export interface IProperty {
address: ILocation;
unit: string;
city: string;
postalcode: string;
state: string;
bedrooms: string;
bathrooms: string;
leaseStatus: string
rent: string;
streetNumber: string;
longitude: number;
latitude: number;
titleHolder: string;
country: string;
}

// Methods

export const toMarkers = (properties, currentMarkers):MarkersType => {
	const newMarkers = { ...currentMarkers }

	properties.forEach(_property => {
	if(!_property.Address.Latitude || !_property.Address.Longitude) return;

	const propertyAddressID = _property.Address.Id;
	const isAddressInNewMarkers = newMarkers[propertyAddressID];

	const newMarker = isAddressInNewMarkers 
		? [...newMarkers[propertyAddressID]]
		: [];

	newMarker.push(_property);
	newMarkers[propertyAddressID] = newMarker;
	});
	
	return newMarkers;
}
