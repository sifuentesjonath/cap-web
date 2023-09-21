import { FC, useEffect, useRef } from 'react'
// Main component
import CondooMapGL, { ViewPortType } from '..'
// Helpers
import { PropertyType } from '@/service/apiTypes';
import PropertiesMarker from './PropertiesMarker'
import { isPropertyMarker } from './markers';
import openAdviseToast from '@components/element/StyledToastAdvise';

interface IPropertiesMapGLProps {
	properties?: PropertyType[];
	viewPort: ViewPortType;
	onViewPortChange: (viewPort) => void;
	onMarkerSelect: (property:PropertyType) => void;
}
const PropertiesMapGL:FC<IPropertiesMapGLProps> = props => {
	const { properties, viewPort, onViewPortChange, onMarkerSelect } = props;
	const isProperties = Array.isArray(properties) && properties.length != 0;

	const advise = useRef(false);

	const isMarker = (property: PropertyType) => {
		const markerStatus = isPropertyMarker(property);
		if(markerStatus) return markerStatus;
		if(property.IsActive == 0) return false;
		
		const isAdvisable = advise.current == false;
		if(isAdvisable){
			advise.current = true;
			openAdviseToast(
				'advise', 
				`Some properties don't have a specified location and will not be displayed on map`, 
			);
		}
		
		return markerStatus;
	}

	useEffect(() => {
		return () => {
			advise.current = false;
		}
	},[])

	return (
		<CondooMapGL viewPort={viewPort} onViewPortChange={(viewport) => onViewPortChange(viewport)}>
			{isProperties &&
				properties?.map((property, i) => {
					if(!isMarker(property)) return;

					const key = `marker-${i}`;
					return (
						<PropertiesMarker 
							key={key} 
							properties={properties} 
							property={property} 
							onSelect={onMarkerSelect}
						/> 
					)
				}
				)
			}
		</CondooMapGL>
	)
}

export default PropertiesMapGL