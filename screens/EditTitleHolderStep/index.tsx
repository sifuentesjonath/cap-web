import { FC, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import StyledAutoAddress, { IAutoAddress } from '@components/element/StyledAutoAddress';
// Components
import Button from '@components/block/Button';
import Input from '@components/block/PropertyCardModalInput'
import StyledLoader from '@components/element/StyledLoader';
// Image and Icons
import Image from 'next/image';
import { XIcon } from '@heroicons/react/solid';
// helpers
import { getRandomThumbnail, ThumbNailType } from '@components/block/PropertyDisplay/properties';
// useApi 
import { updateATitleHolder } from '@/service/useApi';
import { TitleHolderType, UpdateTitleHolderParamsType } from '@/service/apiTypes';
// Style
import {
  Separator,
  Container,
  ImagePosition,
  Content,
  TitleHolderInformation,
  FormContent,
  StyledInputs,
  ImageContainer,
} from './style'
import { getEmptyAddress } from '@components/block/TitleHolderLabel/TitleHolderLabel';
import openAdviseToast from '@components/element/StyledToastAdvise';
import useErrorMessage from '@/hooks/useErrorMessage';
import useValidateEmail from '@/hooks/useValidateEmail';
import { useQueryClient } from 'react-query';
import validateSpecialCharacters from '@utils/validations/validateSpecialCharacters';

export type EditTitleHolderInputs = {
  titleHolderName: string;
  // firstName:string;
  // lastName:string;
  streetNumber: string;
  unit: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  email: string;
}

interface IEditTitleHolderStepProps {
  onCloseModal: () => void;
  titleHolder: TitleHolderType;
}
const EditTitleHolderStep: FC<IEditTitleHolderStepProps> = ({ onCloseModal, titleHolder, titleHolder: { Address } }) => {
  const { Id, FirstName, LastName, Email } = titleHolder;
  const { City, Country, NumberUnits, PostalCode, State, StreetNumber } = Address ?? getEmptyAddress();
  const titleHolderName = FirstName ? `${FirstName} ${LastName ?? ''}` : '';
  const queryClient = useQueryClient();

  const { handleSubmit, register, formState: { errors }, setValue: setTitleHolder } = useForm<EditTitleHolderInputs>({
    defaultValues: {
      titleHolderName: titleHolderName,
      country: Country,
      state: State,
      city: City,
      streetNumber: StreetNumber,
      postalCode: PostalCode.toString(),
      unit: NumberUnits ? NumberUnits.toString() : null,
      email: Email,
    }
  });

  console.log({ errors })

  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const thumbNail = useRef<ThumbNailType>(getRandomThumbnail())

  const onSubmitEditTitleHolder: SubmitHandler<EditTitleHolderInputs> = async (values) => {
    const formatName = (companyName): string[] => {
      const fullName = companyName.split(' ')
      if (fullName.length > 1) {
        return [fullName[0], fullName[1]]
      }
      return [companyName];
    }

    setIsSubmiting(true);
    const { city, country, postalCode, state, streetNumber, titleHolderName, unit, email } = values;

    const nameOfTitleHolder = formatName(titleHolderName);
    const firstName = nameOfTitleHolder[0];
    const lastName = nameOfTitleHolder.length > 1 ? nameOfTitleHolder[1] : '';

    const params: UpdateTitleHolderParamsType = {
      City: city,
      Country: country,
      FirstName: firstName,
      LastName: lastName,
      PostalCode: postalCode,
      State: state,
      StreetNumber: streetNumber,
      Email: email,
    }
    try {
      const titleHolderResult = await updateATitleHolder(Id, params)

      onCloseModal();
      openAdviseToast('success', 'Title holder updated correctly.');
    } catch (error) {
      const errorMessage = useErrorMessage(error);
      openAdviseToast('failed', errorMessage);
    } finally {
      queryClient.invalidateQueries('getTitleholders');
      setIsSubmiting(false);
    }
  }

  return (
    <>
      {isSubmiting && <StyledLoader />}

      <Container>
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

          <button className='absolute top-4 right-4 w-10 h-10 bg-black rounded-full'
            onClick={() => onCloseModal()}
          >
            <XIcon className='text-white w-8 h-full m-auto' />
          </button>
          <span className='title'>
            Edit Titleholder
          </span>
        </ImageContainer>

        <Content>
          <Separator />

          <TitleHolderInformation>
            <span>Titleholder information</span>
          </TitleHolderInformation>

          <FormContent onSubmit={handleSubmit(d => onSubmitEditTitleHolder(d))}>
            <StyledInputs>
              <Input
                className='input'
                placeholder='Name / Company Title'
                error={errors.titleHolderName}
                {...register('titleHolderName', {
                  required: { value: true, message: 'This space is required' },
                  validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null
                })}
              />

              <StyledAutoAddress defaultValue={StreetNumber ?? null} onSelect={
                (address) => {
                  setTitleHolder('streetNumber', `${address.street} ${address.address}`);
                  setTitleHolder('city', address.city);
                  setTitleHolder('state', address.state);
                  setTitleHolder('country', address.country)
                  setTitleHolder('postalCode', address.zip);
                }}
              />

              <div className='block'>
                <Input
                  className='input'
                  placeholder='Unit'
                  {...register('unit')}
                />

                <Input
                  className='input'
                  placeholder='City'
                  {...register('city')}
                />
              </div>

              <div className='block'>
                <Input
                  className='input'
                  placeholder='Province'
                  {...register('state')}
                />

                <Input
                  className='input'
                  placeholder='Country'
                  {...register('country')}
                />
              </div>

              <div className='block'>
                <Input
                  className='input'
                  placeholder='Postal Code'
                  {...register('postalCode')}
                />

                <Input
                  className='input'
                  placeholder='Email'
                  {...register('email', {
                    validate: (email) => useValidateEmail(email) ? true : 'Email address is not valid'
                  })}
                />
              </div>
            </StyledInputs>
            <Button
              className='absolute right-0 bottom-0 button-next'
              bgColor='#000000'
              type='submit'
            >
              Save
            </Button>
          </FormContent>

        </Content>
      </Container>
    </>

  )
}

export default EditTitleHolderStep
