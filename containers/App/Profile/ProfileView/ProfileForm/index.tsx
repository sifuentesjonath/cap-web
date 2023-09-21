import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@redux/hook';
import { useMediaQuery } from '@react-hook/media-query';
import { useForm } from 'react-hook-form';
// Components
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
import EditProfileModal from '@components/block/EditProfileModal';
import CountryFlag from '@components/element/CountryFlag';
// Icons // Images
import { PencilIcon } from '@heroicons/react/outline';
import profile_picture_example from '@/public/images/emoji-waving-hand.png';

import {
  ContactDetailsAndAddressContainer,
  ContactDetailsFormContainer,
  InputStyle,
  NamesAndPassWordContainer,
  ProfilePictureContainer,
  Divider,
  TwoInputContainer,
  ProfileFormContainer,
} from './style'
import { UserProfileType } from '@/service/apiTypes';
import { dimensions } from '@/scss/media';
import usePhoneNumberFormat from '@/hooks/usePhoneNumberFormat';
import SelectCountryInput from '@components/element/SelectCountryInput';
import PhoneNumberInput from '@components/element/PhoneNumberInput';
import useProfileForm from '@/hooks/form/useProfileForm';
import ProfileFormType from '@/hooks/form/useProfileForm/type';

interface ProfileProps {
  userProfile: UserProfileType;
}
export const ProfileForm: React.FC<ProfileProps> = ({ userProfile }) => {
  const { FirstName, LastName } = userProfile;
  const LoggedUser = useAppSelector((state: any) => state.auth.Email);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const closeModal = () => setOpenModal(false);

  const profileForm = useProfileForm({ ...userProfile, Email: LoggedUser })

  const profileName = `${FirstName} ${LastName}`;
  const isMobile = useMediaQuery(`(${dimensions.mobile})`);
  const imageSize = {
    width: isMobile ? 60 : 70,
    height: isMobile ? 60 : 70,
  }

  useEffect(() => {
    profileForm.reset(profileForm.toForm({ ...userProfile, Email: LoggedUser }));
  }, [userProfile])

  return (
    <>
      <EditProfileModal
        openModal={openModal}
        onCloseModal={closeModal}
        userProfile={userProfile}
      />

      <ProfilePictureContainer>
        <Image
          src={profile_picture_example}
          alt={'Profile picture'}
          objectFit="contain"
          className=""
          {...imageSize}
        />

        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <span>{profileName}</span>

            <button onClick={() => setOpenModal(true)}>
              <PencilIcon className='pencil-icon' />
            </button>
          </div>
        </div>
      </ProfilePictureContainer>

      <Divider />

      <ProfileFormContainer>
        <NamesAndPassWordContainer>
          <InputStyle>
            <label>First Name</label>
            <Input disabled
              placeholderStyle='input-style'
              {...profileForm.register('FirstName')}
            />
          </InputStyle>

          <InputStyle>
            <label>Last Name</label>
            <Input disabled
              placeholderStyle='input-style'
              {...profileForm.register('LastName')}
            />
          </InputStyle>
        </NamesAndPassWordContainer>

        <Divider />

        <ContactDetailsAndAddressContainer>
          <span>Contact Details & Address</span>
          <ContactDetailsFormContainer>
            <TwoInputContainer>
              <InputStyle>
                <label>Email</label>
                <Input disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('Email')}
                />
              </InputStyle>

              <InputStyle>
                <label>Phone Number</label>
                <PhoneNumberInput
                  name='PhoneNumber'
                  control={profileForm.control}
                  disabled={true}
                  rules={{}}
                />
              </InputStyle>
            </TwoInputContainer>

            <TwoInputContainer className='mt-10'>
              <InputStyle>
                <label>Street Address</label>
                <Input disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('AddressLine1')}
                />
              </InputStyle>

              {/* <InputStyle>
                <label>Unit</label>
                <Input disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('Unit')}
                />
              </InputStyle> */}
            </TwoInputContainer>

            <TwoInputContainer>
              <InputStyle>
                <label>City</label>
                <Input
                  disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('City')}
                />
              </InputStyle>

              <InputStyle>
                <label>Province</label>
                <Input disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('State')}
                />
              </InputStyle>
            </TwoInputContainer>

            <TwoInputContainer>
              <InputStyle>
                <label>Country</label>
                <SelectCountryInput
                  defaultCountry={userProfile.Address?.Country}
                  isDisabled={true}
                  onChange={(option) => { }}
                />
              </InputStyle>

              <InputStyle>
                <label>Postal Code</label>
                <Input disabled
                  placeholderStyle='input-style'
                  {...profileForm.register('PostalCode')}
                />
              </InputStyle>
            </TwoInputContainer>
          </ContactDetailsFormContainer>
        </ContactDetailsAndAddressContainer>

        <Divider />
      </ProfileFormContainer>
    </>
  )
}

export default ProfileForm;
