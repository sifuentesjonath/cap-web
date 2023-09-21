import React, { FC, useState, useEffect, useRef } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import StyledAutoAddress, { IAutoAddress } from '@components/element/StyledAutoAddress';
// Validation
import validateSpecialCharacters from '@utils/validations/validateSpecialCharacters';
// Components
import Button from '@components/block/Button';
import Input from '@components/block/PropertyCardModalInput'
// styles
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
// Image and Icons
import Image from 'next/image';
import { XIcon } from '@heroicons/react/solid';
import { createATitleHolder, setABillingAddressToTitleHolder } from '@/service/useApi';
import { CreateTitleHolderParamsType, SetBillingAddressParamsType } from '@/service/apiTypes';
import { getRandomThumbnail, ThumbNailType } from '@/components/block/PropertyDisplay/properties';
import openToast from '@components/element/StyledToast';
import StyledLoader from '@components/element/StyledLoader';
import useErrorMessage from '@/hooks/useErrorMessage';
import openAdviseToast from '@components/element/StyledToastAdvise';

export type AddTitleHolderInputs = {
  // firstName: string;
  // lastName: string;
  companyName: string;
  streetNumber: string;
  unit: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  email: string;
}

const AddInformationStep = (
  { setState: setTitleHolder, onCloseModal, onNext }
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const thumbNail = useRef<ThumbNailType>(getRandomThumbnail())

  // form handling
  const { watch, register, handleSubmit, setValue: setTitleHolderForm, formState: { errors } } = useForm<AddTitleHolderInputs>();
  // const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const onSubmitTitleHolder: SubmitHandler<AddTitleHolderInputs> = async values => {
    const formatName = (companyName) => {
      let fullName = companyName.split(' ')
      return fullName.length == 1 ? [companyName, ''] : fullName;
    }

    const {
      companyName, email, unit,
      streetNumber, city, country, latitude, longitude, state, postalCode } = values;

    try {
      setIsSubmitting(true);

      const [firstName, lastName] = formatName(companyName);
      const params: CreateTitleHolderParamsType = {
        FirstName: firstName,
        LastName: lastName,
        City: city,
        Country: country,
        State: state,
        StreetNumber: streetNumber,
        PostalCode: postalCode,
        Email: email
      }
      const titleHolderResult = await createATitleHolder(params);

      setTitleHolder(titleHolderResult);
      const buildiumParams: SetBillingAddressParamsType = {
        Id: titleHolderResult.Id.toString(),
        City: city,
        Country: country,
        IsCompany: 0,
        Latitude: latitude.toString(),
        Longitude: longitude.toString(),
        PostalCode: postalCode,
        StreetNumber: streetNumber,
        State: state,
      }
      const addressResponse = await setABillingAddressToTitleHolder(buildiumParams)

      openAdviseToast('success', 'Title holder created sucessfully');

      onNext();
    } catch (error) {
      const errorMessage = useErrorMessage(
        error,
        'Something went wrong while trying to update your title holder. Try again later'
      );
      openAdviseToast('failed', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      {isSubmitting && <StyledLoader />}

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
          Add Titleholder
        </span>
      </ImageContainer>

      <Content>
        <Separator />

        <TitleHolderInformation>
          <span>Titleholder information</span>
        </TitleHolderInformation>

        <FormContent
          onSubmit={handleSubmit(d => onSubmitTitleHolder(d))}
        >
          <StyledInputs>
            <Input
              className='input'
              placeholder='Name / Company Title'
              error={errors.companyName}
              {...register('companyName', {
                required: { value: true, message: 'This space is required' },
                validate: (text) => validateSpecialCharacters(text) ? 'Special characters are not valid' : null
              })}
            />

            <StyledAutoAddress onSelect={
              (address) => {
                setTitleHolderForm('streetNumber', `${address.street} ${address.address}`);
                setTitleHolderForm('city', address.city);
                setTitleHolderForm('country', address.country)
                setTitleHolderForm('postalCode', address.zip);
                setTitleHolderForm('latitude', address.lat);
                setTitleHolderForm('longitude', address.lng);
                setTitleHolderForm('state', address.state);
              }}
            />

            <div className='block'>
              <Input
                className='input'
                placeholder='Unit (optional)'
                {...register('unit', {})}
              />

              <Input
                className='input'
                placeholder='City'
                {...register('city', {
                  required: { value: true, message: 'This space is required' },
                })}
              />
            </div>

            <div className='block'>
              <Input
                className='input'
                placeholder='Province'
                {...register('state', {
                  required: { value: true, message: 'This space is required' },
                })}
              />

              <Input
                className='input'
                placeholder='Country'
                {...register('country', {
                  required: { value: true, message: 'This space is required' },
                })}
              />
            </div>

            <div className='block'>
              <Input
                className='input'
                placeholder='Postal Code'
                {...register('postalCode', {
                  required: { value: true, message: 'This space is required' },
                })}
              />

              <Input
                className='input'
                placeholder='Email'
                {...register('email', {
                  required: { value: true, message: 'This space is required' },
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
  )
}

export default AddInformationStep
