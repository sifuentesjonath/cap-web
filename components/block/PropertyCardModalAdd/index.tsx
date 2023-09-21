import { useState, useCallback, useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from 'react-query';
// Validations
import { validateBathroom, validateUnit } from './forms';
// Component
import Alert from '@components/block/Alert';
import AddProppertyForm from './AddProppertyForm';
import Image from 'next/image';
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { IAutoAddress } from '@components/element/StyledAutoAddress';
// Helper
import { ThumbNailType,getRandomThumbnail } from '@/components/block/PropertyDisplay/properties'
import { getTitleHoldersOptions } from './forms'
import { PropertyFormType, usePropertyApiHandler } from '@/hooks/usePropertyApiHandler'
// Icon
import { XIcon } from '@heroicons/react/solid';
// api
import {
  getTitleholders,
} from '@/service/api';

import {
  Container,
  ModalContainer,
  Title,
  PropertyAddress,
  ImageContainer,
  ContentPosition,
  PropertyDetailsForm,
  FormLabelGroup,
  Separator,
  SelectOnlyStyle
} from './style'

// interface Location {
//   address: any;
//   longitude: any;
//   latitude: any;
// }

export type SpecialInputsType = {
  titleHolder: {title: string, value: number};
  leaseStatus: IOptionsProps;
  address: IAutoAddress;
}

type PropertyDetailsInputs = {
  address: string; // Location
  unit: string;
  city: string;
  postalcode: string;
  providence: string;
  bedrooms: number;
  bathrooms: number;
  currentLeased: string;
  currentEstimatedRent: number;
  // titleHolder: SelectObj;
}
interface ICardModalProps {
  toggle: boolean;
  onClose: () => void;
}
type CardModalComponent = React.FC<ICardModalProps>
const PropertyCardModal: CardModalComponent = props => {
  // Props
  const { toggle, onClose } = props;
  const [showAlert, setShowAlert] = useState(false);
  const [specialInputsData, setSpecialInputsData] = useState<SpecialInputsType>(null);
  const [titleholders, setTitleholders] = useState([]);
  const [titleHolderOptions, setTitleHolderOptions] = useState<IOptionsProps[]>();
  const [address, setAddress] = useState('');
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const thumbNail = useRef<ThumbNailType>(getRandomThumbnail())

  useEffect(() => { thumbNail.current = getRandomThumbnail(); } ,[])

  return(
    <Container
      open={toggle}
      onClose={onClose}
      modal
      nested
    >
      {close => (
        <ModalContainer className="modal">
          <ImageContainer backgroundColor={thumbNail.current.background}>
            <div className='image-container'>
              <div className='image'>
                <Image
                  className={`absolute left-0 right-0 rounded-t-2xl`}
                  layout={`fill`}
                  src={thumbNail.current.icon}
                  alt={`house`}
                />
              </div>
            </div>

            <button className='absolute top-4 right-4 z-2 w-12 h-12 bg-black rounded-full'
              onClick={() => close()}
            >
              <XIcon className='text-white w-8 h-full m-auto'/>
            </button>
            <div className='absolute bottom-0'>
              <Title>Add Property</Title>
            </div>
          </ImageContainer>

          <ContentPosition className='px-6'>
            <Separator className='rounded-sm'></Separator>

            <div className='pt-3'>
              <div className='flex'>
                <PropertyAddress>Property Details</PropertyAddress>
              </div>

              <div>
                <AddProppertyForm onCloseModal={close}/>
              </div>
            </div>
          </ContentPosition>

          <Alert
            isOpen={showAlert}
            variant="danger"
            title="Uh Oh!"
            description="Some values may not be setted correctly"
            onClose={() => {
              setShowAlert(false);
            }}
          />
        </ModalContainer>
      )}
    </Container>
  )
}

export default PropertyCardModal;
