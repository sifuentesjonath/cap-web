import React, { FC } from 'react';
import ProfileModal, { IProfileModalProps } from '@components/block/ProfileModal';
import EditTitleHolderStep from '@screens/EditTitleHolderStep';
import { TitleHolderType } from '@/service/apiTypes';

interface ITitleHolderModalProps extends IProfileModalProps {
  onOpenModal: () => void;
  titleHolder: TitleHolderType;
}
const TitleHolderModal:FC<ITitleHolderModalProps> = ({
  openModal,
  onCloseModal,
  titleHolder,
}) => {
  return (
    <ProfileModal
      openModal={openModal}
      onCloseModal={onCloseModal}
    >
      <EditTitleHolderStep 
        titleHolder={titleHolder} 
        onCloseModal={onCloseModal} 
      />

    </ProfileModal>
  )
}

export default TitleHolderModal
