import { FC, useState } from 'react'

// Map
import ReactMapGL from 'react-map-gl';

export type ViewPortType = {
	latitude: number,
	longitude: number; 
	zoom: number,
}
interface ICondooMapGLProps {
	viewPort: ViewPortType
	onViewPortChange: (viewPort:ViewPortType) => void;
}

const CondooMapGL:FC<ICondooMapGLProps> = props => {
	const { viewPort, onViewPortChange, children } = props;
	// const {latitude, longitude, zoom} = viewPort;

	const [popupInfo, setPopupInfo] = useState(null);
	// const [viewport, setViewPort] = useState<ViewPortType>(viewPort)

	return (
		<ReactMapGL {...viewPort} 
			width="100%"
			height="100%"
			style={{borderRadius: '21px'}}
			onViewportChange={viewport => onViewPortChange(viewport)}
			// process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN
			mapboxApiAccessToken="pk.eyJ1IjoiYWNjb3VudHMtY29uZG9vIiwiYSI6ImNrcTVpNTZvZzBhM28ycXFiN25yZmE0aTQifQ.4Pa3OeV0keSJgqa0i5UzLw"
			mapStyle="mapbox://styles/accounts-condoo/ckq5ib1rg3x0z17k5y21t9679"
			onClick={() => setPopupInfo(null)}
		>
			{children} {/* Children must be React MapGL Markers */}
		</ReactMapGL>
	)
}

export default CondooMapGL