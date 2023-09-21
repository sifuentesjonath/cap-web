import { FC, useEffect, useState } from 'react';
// components
import Input from '@components/block/PropertyCardModalInput';
import Geocode from 'react-geocode';
import { usePlacesWidget } from 'react-google-autocomplete';
import getLocationInfo from '@components/element/utils/getLocationInfo';
// style
import { StyledAutoPlacesContainer } from './style';

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API);

export interface locationInfo {
  address: any;
  city: any;
  state: any;
  country: any;
  zip: any;
  street: any;
  lat: any;
  lng: any;
}
interface IStyledAutoPlacesProps {
  onSelect: (location: locationInfo) => void;
  placeHolder: string;
  height?: number;
  defaultValue?: string;
  isWrapper?: boolean;
  fontSize?: string;
  className?: string;
  isDisabled?: boolean;
}
const StyledAutoPlaces: FC<IStyledAutoPlacesProps> = (props) => {
  const {
    onSelect,
    height = 42,
    defaultValue = '',
    isWrapper = false,
    fontSize = '0.875rem',
    isDisabled = false,
    className,
    placeHolder,
  } = props;
  // const ref = useRef(null);
  const [value, setValue] = useState('');
  const { ref: usePlaces } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
    onPlaceSelected: place => {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      Geocode.fromLatLng(lat, lng).then(
        response => {
          const res = getLocationInfo(response);
          res.lat = lat;
          res.lng = lng;
          setValue(isWrapper ? res.address : `${res.street} ${res.address}`);
          //@ts-ignore
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
    setValue(defaultValue);
  }, [defaultValue]);

  // const onPlaceSelected = place => {
  //   const lat = place.geometry.location.lat();
  //   const lng = place.geometry.location.lng();
  //   Geocode.fromLatLng(lat, lng).then(
  //     response => {
  //       const res = getLocationInfo(response);
  //       res.lat = lat;
  //       res.lng = lng;
  //       onSelect(res);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // };
  return (
    <StyledAutoPlacesContainer fontSize={fontSize}>
      <Input
        className={className.length != 0 && className}
        ref={usePlaces}
        placeholder={placeHolder}
        height={height}
        showErrorMsg={false}
        defaultValue={defaultValue}
        onChange={e => setValue(e.target.value)}
        disabled={isDisabled}
      // onFocusCapture={() => {
      //   console.log(">>>>>", ref.current)
      //   ref.current.value = 'e'
      //   ref.current.focus()
      // }}
      />
      {/* <Autocomplete
        ref={ref}
        style={{ width: '250px' }}
        id="countryAnother"
        placeholder="countryAnother"
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}
        onPlaceSelected={onPlaceSelected}
        options={{
          componentRestrictions: {
            country: ['ca'],
          },
          types: ['address'],
        }}
        // onChange={formik.handleChange}
      /> */}
    </StyledAutoPlacesContainer>
  );
};

export default StyledAutoPlaces;
