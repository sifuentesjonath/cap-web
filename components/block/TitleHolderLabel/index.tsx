import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getEmptyAddress } from './TitleHolderLabel'
// Type
import { TitleHolderType } from '@/service/apiTypes';
// Components
import EditTitleHolderModal from '@components/block/EditTitleHolderModal';
import PlaidDetails from './PlaidDetails';
import TitleHolderDetails from './TitleHolderDetails';
// Icons
import { XIcon } from '@heroicons/react/outline';
// Style
import {
  LabelContainer,
  LabelContainerOpened,
  Separator,
  TitleHolderFormContainer,
} from './style';

export interface TitleHolderLabelProps {
  titleHolder: TitleHolderType
}
const TitleHolderLabel: FC<TitleHolderLabelProps> = ({ titleHolder }) => {
  const { FirstName, LastName, Address } = titleHolder;
  const name = `${FirstName} ${LastName ?? ''}`;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const closeModal = () => setOpenModal(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpenModal(true);
  }

  const handleViewMore = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <>

      {isOpen != true ? (
        <LabelContainer>
          <span className='title'>{name}</span>
          <button
            onClick={handleViewMore}
          >
            View More
          </button>
        </LabelContainer>
      ) : (
        <>
          <EditTitleHolderModal
            openModal={openModal}
            onCloseModal={closeModal}
            onOpenModal={() => setOpenModal(false)}
            titleHolder={titleHolder}
          />

          <LabelContainerOpened>
            <span>{name}</span>
            <button className='buttonTop rounded-full bg-black'>
              <XIcon onClick={handleViewMore}
                className='h-8 w-8'
              />
            </button>

            <TitleHolderFormContainer>
              <TitleHolderDetails titleHolder={titleHolder} handleOpen={handleOpen} />

              <Separator width={'70%'} />

              <PlaidDetails titleHolder={titleHolder} />
            </TitleHolderFormContainer>
          </LabelContainerOpened>
        </>
      )
      }
    </>
  )
}

export default TitleHolderLabel;