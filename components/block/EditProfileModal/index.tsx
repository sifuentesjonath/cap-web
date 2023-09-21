import React, { FC, useState, useRef, useEffect } from 'react'
import { ProfileInformationType } from '@types';
import { UserProfileType } from '@/service/apiTypes';
// Components
import ProfileModal, { IProfileModalProps } from '@components/block/ProfileModal';
import EditProfileForm from './EditProfileForm';
// Images
import Image from 'next/image';
import { XIcon } from '@heroicons/react/solid';
// Styles
import {
  Content,
  Separator,
  InformationLabel,
  ImageContainer
} from './style'
import { getRandomThumbnail, ThumbNailType } from '../PropertyDisplay/properties';

interface IEditProfileModalProps extends IProfileModalProps {
  userProfile: UserProfileType;
}
const EditProfileModal: FC<IEditProfileModalProps> = props => {
  const { openModal, onCloseModal, userProfile } = props
  const thumbNail = useRef<ThumbNailType>(getRandomThumbnail())

  return (
    <ProfileModal
      openModal={openModal}
      onCloseModal={onCloseModal}
    >
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
          Profile Information
        </span>

      </ImageContainer>

      <Content>
        <Separator />

        <InformationLabel>
          <span>Profile information</span>
        </InformationLabel>

        <EditProfileForm userProfile={userProfile} onExit={onCloseModal} />
      </Content>
    </ProfileModal>
  )
}

export default EditProfileModal
