/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useReducer } from 'react';
import { useQuery, useQueryClient } from 'react-query';
// Property Reducer
import propertyReducer, { getDefaultStatePropertyReducer } from './PropertyStepReducer';
// Map
import PropertiesMapGL from '@components/block/CondooMapGL/PropertiesMapGL'
// Helpers 
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { getLeasedStatusOption } from '@components/block/CondooInputs/SelectLeaseStatus';
import { getUnitBathroomOptionByValue } from '@components/block/CondooInputs/SelectBathrooms/bathOptions';
import { getUnitBedroomOptionByValue } from '@components/block/CondooInputs/SelectBedrooms/bedOptions';
import { formatTitleHoldersAsOptions } from './utils/handleTitleHolderOptions';
import { getPropertiesAdminWithBuildiumChecker } from '@/service/useApi';
// Components
import AddPropertyForm from './AddPropertyForm';
import StyledLoader from '@components/element/StyledLoader';
// Use Property handler
import {
  PropertyFormControlledInputsType,
  getPropertyControlledFormDefaultValues
} from '../../hooks/usePropertyApiHandler';
// Use Api
import { UserProfileType, PropertyType, TitleHolderType } from '@/service/apiTypes';
import usePropertyForm from '@/hooks/usePropertyApiHandler/usePropertyForm';
// Service api
import { getTitleholders, } from '@/service/api';
// Type
import { ViewPortType } from '@components/block/CondooMapGL';
// Style / Icon
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  AddPropertyContainer,
  AddPropertySubContainer,
  ClearButton,
  FormContainer,
  InformationContainer,
  LinkUnderline,
  MapContainer,
  Title
} from './style';

export interface IAddPropertyStepProps {
  profile: UserProfileType;
  onPrev: () => void;
  onNext: () => void;
}

const AddPropertyStep: FC<IAddPropertyStepProps> = ({ profile, onNext }) => {
  // Hooks
  const [
    [propertyApi, setPropertyApi],
    propertyForm,
    onSubmit
  ] = usePropertyForm('create');
  // States
  const [state, dispatch] = useReducer(propertyReducer, getDefaultStatePropertyReducer());
  const queryClient = useQueryClient();
  // Helpers
  const updateViewport = (payload: ViewPortType) => dispatch({ type: 'SET_VIEWPORT', payload });
  const handleLoadTitleHolderOptions = (titleHolders: TitleHolderType[]) => {
    const titleHolderAsSelectOptions = formatTitleHoldersAsOptions(titleHolders);
    dispatch({ type: 'SET_TITLEHOLDER_OPTIONS', payload: titleHolderAsSelectOptions })
    dispatch({ type: 'SET_TITLEHOLDERS', payload: titleHolders });
  }
  // Query hooks
  // const { isLoading: isLoadingTitleHolders } = useQuery<TitleHolderType[]>(
  //   ['getTitleholders'], getTitleholders, {
  //   onSuccess: handleLoadTitleHolderOptions
  // }
  // );
  // const { data: properties, } = useQuery<PropertyType[]>(
  //   ['getProperties'], getPropertiesAdminWithBuildiumChecker,
  // );
  // Use effects
  useEffect(() => { // Continue button
    // if (properties?.length > 0) dispatch({ type: 'ENABLE_NEXT_STEP' })
    dispatch({ type: 'ENABLE_NEXT_STEP' })
  }, [
    // properties
  ])
  // Page Actions
  const onPropertyMarkerSelect = (property: PropertyType) => {
    setPropertyApi('update');
    const { Id: propertyId, Address, UnitNumber, Name, LeaseStatus, Rent, TitleHolder } = property;
    const { State, Country, City, StreetNumber, PostalCode, Latitude, Longitude } = Address;
    const { Id: titleHolderId } = TitleHolder;

    updateViewport({
      ...state.viewport,
      latitude: parseFloat(Latitude),
      longitude: parseFloat(Longitude),
      zoom: 10
    })

    // Special inputs

    const TitleHolderId = titleHolderId.toString();
    const TitleHolderOption = state.titleHolderOptions.find(({ value: Id }) => Id == TitleHolderId);

    const bathroom = property?.Unit?.NumberBathrooms?.toString();
    const BathroomOption = getUnitBathroomOptionByValue(bathroom);

    const bedroom = property?.Unit?.NumberBedrooms?.toString();
    const BedroomOption = getUnitBedroomOptionByValue(bedroom);

    const LeaseStatusOption = getLeasedStatusOption(LeaseStatus);

    // Set state for select input
    dispatch({ type: 'SET_SELECTED_TITLEHOLDER', payload: TitleHolderOption })
    // Set all values to form
    propertyForm.reset({
      Id: propertyId,
      TitleHolderId: TitleHolderOption,
      LeaseStatus: LeaseStatusOption,
      Name: Name ?? '',
      NumberUnits: UnitNumber.toString() ?? '',
      City: City ?? '',
      PostalCode: PostalCode ?? '',
      State: State ?? '',
      StreetNumber: Name ?? '',
      Country: Country ?? '',
      Rent: Rent ?? '',
      Bathrooms: BathroomOption ?? null,
      Bedrooms: BedroomOption ?? null,
      Latitude: parseFloat(Latitude),
      Longitude: parseFloat(Longitude),
    })
  }
  const onChangePlace = (res) => {
    const { lat, lng, state, /** country, address, street, city, zip */ } = res;
    updateViewport({
      ...state.viewport,
      latitude: lat,
      longitude: lng,
      zoom: 10,
    });
  };
  const updateMapLocation = (property: PropertyFormControlledInputsType) => {
    const { Latitude, Longitude } = property;
    updateViewport({
      ...state.viewport,
      latitude: Latitude,
      longitude: Longitude,
    });
    queryClient.invalidateQueries('getProperties');
  }
  const resetFormAndPropertyApi = () => {
    propertyForm.reset(getPropertyControlledFormDefaultValues());
    setPropertyApi('create');
  }
  return (
    <AddPropertyContainer>
      {/* {(isLoadingTitleHolders || state.isLoading) && <StyledLoader />} */}

      <AddPropertySubContainer>
        <InformationContainer>
          <div className='title-container'>
            <Title>Add your rental properties</Title>
            {propertyApi !== 'create' &&
              <ClearButton>
                <LinkUnderline type="button" onClick={resetFormAndPropertyApi}>
                  Clear
                </LinkUnderline>
              </ClearButton>
            }
          </div>

          <FormContainer>
            <AddPropertyForm
              state={state}
              dispatch={dispatch}
              propertyApiActionState={[propertyApi, setPropertyApi]}
              propertyForm={propertyForm}
              onChangePlace={onChangePlace}
              onSubmit={onSubmit}
              onIsSubmitted={updateMapLocation}
              onNext={onNext}
            />
          </FormContainer>
        </InformationContainer>

        <MapContainer>
          <PropertiesMapGL
            viewPort={state.viewport}
            // properties={properties}
            properties={[]}
            onViewPortChange={(viewport) => updateViewport(viewport)}
            onMarkerSelect={(property) => onPropertyMarkerSelect(property)}
          />
        </MapContainer>
      </AddPropertySubContainer>

    </AddPropertyContainer>
  );
};

export default AddPropertyStep;
