import { IProperty } from '@/containers/App/Properties/utils/types'
import propertyThumbnailIconGray from '@/public/images/property_thumbnail_icon_gray.png'
import propertyThumbnailIconGreen from '@/public/images/property_thumbnail_icon_green.png'
import propertyThumbnailIconWhite from '@/public/images/property_thumbnail_icon_white.png'

// property thumbnails

export type ThumbNailType = {
	icon: StaticImageData;
	background: string;
}
const thumbNails = [
	{
		icon: propertyThumbnailIconGreen,
		background: '#C6FFD6'
	},
	{
		icon: propertyThumbnailIconGray,
		background: '#EDEDED'
	},
	{
		icon: propertyThumbnailIconGreen,
		background: '#E1F3DB'
	},
	{
		icon: propertyThumbnailIconWhite,
		background: '#C1DBD4'
	},
	{
		icon: propertyThumbnailIconWhite,
		background: '#C1C1C1'
	},
]

export const getThumbNail = (index:number) => {
	const thumbNailPosition =  index % 5;
	return thumbNails[thumbNailPosition];
}

export const getRandomThumbnail = ():ThumbNailType => {
	return thumbNails[Math.floor(Math.random() * thumbNails.length)];
}

// Cities 

const getCities = (properties:IProperty[]): string[] => {
	const cities: string[] = [];
	properties.forEach(({ Address }) => {
		const { City } = Address;
		if (!City) return;
		if (!cities.includes(City)) cities.push(City);
	});
	return cities;
};

export const formatPropertiesByCity = (properties:IProperty[]) => {
	const cities = getCities(properties);
	const propertiesByCity = {};

	cities.forEach(city => {
		const foundProperties = properties.filter(({ Address }) => Address.City === city );
		propertiesByCity[city] = foundProperties;
	});

	return propertiesByCity;
};
