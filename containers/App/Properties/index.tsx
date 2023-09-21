import React, { useState, useEffect, useRef } from 'react'
import { useQuery, useQueryClient } from 'react-query';
// Helpers
import { getYouHaveActivePropertiesMessage } from '@utils/handleUserMessages/propertyMessages';
// Components
import AddPropertyModal from '@components/block/CondooModal/Property/AddPropertyModal';
import PropertyCardModalAdd from '@components/block/PropertyCardModalAdd';
import PropertyDisplay from '@components/block/PropertyDisplay';
import AppLayout from '@components/layout/AppLayout';
import StyledLoader from '@components/element/StyledLoader';
import Button from '@components/block/Button'
// service api
import { getPropertiesAdmin } from '@/service/api';
// types
import { IProperty } from './utils/types'
import { AddressType, PropertyAdminType } from '@/service/apiTypes';
// Style
import {
  PropertyCardsContainer,
  Title,
  TitleAndButtonContainer,
} from './style'
import parsePropertiesForDisplay from './utils/parsePropertiesForDisplay';

export interface IPropertiesProps { }
type PropertiesWithLayout = React.FC<IPropertiesProps> & { layout: typeof AppLayout };
const Properties: PropertiesWithLayout = props => {
  // states
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  // Modal
  const closeModal = () => setOpenModal(false);
  // Fetch
  const loadProperties = (properties: PropertyAdminType[]) => {
    if (!Array.isArray(properties)) return;
    const displayableProperties = parsePropertiesForDisplay(properties);
    setProperties(displayableProperties);
  }
  const { isLoading } = useQuery<PropertyAdminType[]>(
    ['getPropertiesAdmin'], getPropertiesAdmin,
    { onSuccess: loadProperties }
  );
  // Page
  const activePropertiesMessage = getYouHaveActivePropertiesMessage(properties.length);
  return (
    <div className='h-full w-full'>
      {isLoading && <StyledLoader />}

      <TitleAndButtonContainer>
        <AddPropertyModal
          onClose={closeModal}
          toggle={openModal}
        />

        <Title>{activePropertiesMessage}</Title>

        <Button width={182} height={45} onClick={() => setOpenModal(open => !open)}>
          + Add Property
        </Button>
      </TitleAndButtonContainer>

      <PropertyCardsContainer>
        <PropertyDisplay properties={properties} />
      </PropertyCardsContainer>
    </div>
  )
}



Properties.layout = AppLayout;

export default Properties
