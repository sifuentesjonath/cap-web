import { MarkerContainer, MarkerPopupContainer } from './style';
import { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';

const Markers = ({ property, properties }) => {
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
  };
  return (
    <>
      <Marker
        key={property.Id}
        longitude={parseFloat(property?.Address?.Longitude)}
        latitude={parseFloat(property?.Address?.Latitude)}
        offsetLeft={-80}
        offsetTop={5}
      >
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
            {/* {popupInfo.map((info, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProperty(info)}
              className="mt-4 border-b-2 border-transparent hover:border-gray-300 box-border cursor-pointer transition-all"
            >
              {`# ${info.unit} - ${info.address}`}
            </div>
          ))} */}
          </MarkerPopupContainer>
        </Popup>
      )}
    </>
  );
};

export default Markers;
