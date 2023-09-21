import { MarkerContainer, MarkerPopupContainer } from './style';
import { Marker, Popup } from 'react-map-gl';
import { FC, useState } from 'react';
import { PropertyType } from '@/service/apiTypes';

interface IPropertiesMarkersProps {
	property: PropertyType;
	properties: PropertyType[];
	onSelect: (property: PropertyType) => void;
}
const PropertiesMarkers:FC<IPropertiesMarkersProps> = ({ property, properties, onSelect }) => {
	const [showPopup, setShowPopup] = useState(false);

	const dupProperties = properties.filter(
		_property => {
			// NOTE: sometimes something is null and breaks this
			return _property?.Address?.Latitude === property?.Address?.Latitude &&
			_property?.Address?.Longitude === property?.Address?.Longitude
		}
	);

	const onClickMarker = () => {
		if (dupProperties.length > 1) setShowPopup(true);
		onSelect(property);
	};
	
	const propertyMarker = {
		longitude: parseFloat(property?.Address?.Longitude),
		latitude: parseFloat(property?.Address?.Latitude),
		offsetLeft: -80,
		offsetTop: 5,
	}

	return (
		<>
			<Marker key={property.Id} {...propertyMarker}>
				<MarkerContainer onClick={onClickMarker}>
					{/* {properties.length > 1 ? `${properties.length} Condos` : `$ ${property.rent}`} */}
					{dupProperties.length > 1
						? `${dupProperties.length} Condos`
						: `$ ${property?.Rent}`}
				</MarkerContainer>
			</Marker>


			{showPopup && (
			<Popup
				tipSize={10}
				anchor="bottom"
				longitude={parseFloat(property?.Address?.Longitude)}
				latitude={parseFloat(property?.Address?.Latitude)}
				closeOnClick={true}
				onClose={() => setShowPopup(false)}
				closeButton={true}
				dynamicPosition={false}
				className='my-mapbox-popup'
			>
				<MarkerPopupContainer>
					<p className="text-lg font-medium border-b-2 border-gray-800">
					Properties
					</p>
					{dupProperties.map((_property, _i) =>
						<div key={_i} className='flex justify-between items-center'>
							<span className='property-value'>#{_property.Name} - {_property.Address.StreetNumber}.</span>
							<span className='property-value'>${_property.Rent}</span>
						</div>
					)}
				</MarkerPopupContainer>
			</Popup>
			)}
		</>
	);
};

export default PropertiesMarkers;