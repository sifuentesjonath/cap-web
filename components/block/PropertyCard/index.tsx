import React, { FC, useEffect, useState } from 'react'
import { IProperty } from '@/containers/App/Properties/utils/types';
// Custom hook
import { usePropertyCard } from './usePropertyCard';
// Helper
import { ThumbNailType } from '@components/block/PropertyDisplay/properties'
import parsePropertyName from '@utils/property/parsePropertyName';
// Components
import UpdatePropertyModal from '@components/block/CondooModal/Property/UpdatePropertyModal';
// icons
import { LocationMarkerIcon } from '@heroicons/react/solid';
// Image
import Image from 'next/image';
// Styles
import {
  Card,
  // CardButton,
  CardDivision,
  ImageAndIconsContainer,
  ImagePosition,
  CardTextLabel,
  IconsContainer,
  IconsLabel,
  IconLabelText,
  IconPosition,
  CardTittle,
  TextContainer,
  TextLabel,
} from './style'

export interface IPropertyCardProps {
  property: IProperty;
  thumbNail: ThumbNailType;
}
const PropertyCard: FC<IPropertyCardProps> = ({ property, thumbNail }) => {
  const { Name, TitleHolder, Address, Id } = usePropertyCard(property);
  const { City } = Address;

  const CurrentTenant = property?.CurrentTenant.length != 0 ? property.CurrentTenant : 'No current tenant';
  const Contract = property?.Contract.length != 0 ? property.Contract : 'No contract';

  const [openModal, setOpenModal] = useState<boolean>(false);
  const closeModal = () => setOpenModal(false);

  return (
    <Card onClick={() => setOpenModal(true)}>
      <UpdatePropertyModal toggle={openModal} onClose={closeModal} property={property} />

      <ImageAndIconsContainer backgroundColor={thumbNail.background} className=' py-3 px-3'>
        <div className='h-full w-full relative'>
          {thumbNail &&
            <ImagePosition >
              <div className='image'>
                <Image
                  className={`rounded-t-2xl absolute left-0 right-0`}
                  layout={`fill`}
                  src={thumbNail.icon}
                  alt={`house`}
                />
              </div>
            </ImagePosition>
          }

          <IconsContainer>
            <IconsLabel>
              <IconPosition>
                <LocationMarkerIcon className={`text-black w-4 h-6`} />
                <IconLabelText>{City}</IconLabelText>
              </IconPosition>
            </IconsLabel>
          </IconsContainer>
        </div>
      </ImageAndIconsContainer>

      <CardDivision>
        <CardTextLabel>
          <CardTittle onClick={() => setOpenModal(true)} className='px-4'>
            {parsePropertyName(property)}
          </CardTittle>
          <TextContainer className='px-4'>
            <TextLabel>
              <span>Current Tenant:</span>
              <span>{CurrentTenant}</span>
            </TextLabel>
            <TextLabel>
              <span>Contract:</span>
              <span>{Contract}</span>
            </TextLabel>
            <TextLabel>
              <span>Title holder:</span>
              <span>{TitleHolder}</span>
            </TextLabel>
          </TextContainer>
        </CardTextLabel>
      </CardDivision>
    </Card>
    // </CardButton>
  )
}

export default PropertyCard
