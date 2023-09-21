// import Input from '@components/block/Input';
import Input from '@components/block/PropertyCardModalInput';
import Geocode from 'react-geocode';
import { usePlacesWidget } from 'react-google-autocomplete';
import getLocationInfo from '@components/element/utils/getLocationInfo';
import { StyledAutoAddressContainer } from './style';
import { useEffect, useState } from 'react';

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API);

export interface IAutoAddress {
  address: any;
  city: any;
  state: any;
  country: any;
  zip: any;
  street: any;
  lat?: number;
  lng?: number;
}

const StyledAutoAddress = ({
  onSelect = (address: IAutoAddress) => { },
  height = 42,
  defaultValue = '',
  ...rest
}) => {

  const [value, setValue] = useState('');

  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
    onPlaceSelected: place => {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      Geocode.fromLatLng(lat, lng).then(
        response => {
          const res = getLocationInfo(response);
          res.lat = lat;
          res.lng = lng;
          setValue(`${res.street} ${res.address}`);
          onSelect(res);
        },
        error => {
          console.error(error);
        }
      );
    },
    options: {
      componentRestrictions: {
        country: ['ca'],
      },
      types: ['address'],
    },
  });

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <StyledAutoAddressContainer>
      <Input
        // style={{width: '100%'}}
        ref={ref}
        defaultValue={defaultValue}
        placeholder="Address"
        height={height}
        showErrorMsg={false}
      />
    </StyledAutoAddressContainer>
  );
};

export default StyledAutoAddress;
