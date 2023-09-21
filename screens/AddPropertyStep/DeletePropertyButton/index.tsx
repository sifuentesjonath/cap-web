import { FC, useState } from 'react'
import {
  LinkUnderline
} from '../style';
import { TrashIcon } from '@heroicons/react/solid';
import ConfirmActionModal from '@components/element/ConfirmActionModal';

interface IAddPropertyFormButtonProps {
  onClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}
const AddPropertyFormButton:FC<IAddPropertyFormButtonProps> = ({
  onClick,
  onConfirm,
  onCancel,
}) => {
  const [isOpen, setIsOpen] = useState(false)
	const closeModal = () => setIsOpen(false);

  const titleMessage = `
    Delete this property?
  `

  const descriptionMessage = `
    Deleting this property is a permanent action.
  `

  const buttonConfirmMessage = `
    Yes, delete this property
  `

  const onButtonClick = () => {
    onClick();
    setIsOpen(true);
  }

  return (
    <>
      <ConfirmActionModal toggle={isOpen} onClose={closeModal}
        title={titleMessage}
        description={descriptionMessage}
        actionButtonMessage={buttonConfirmMessage}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <LinkUnderline icon type="button" onClick={onButtonClick}>
        <TrashIcon/>
      </LinkUnderline>
    </>
  )
}

export default AddPropertyFormButton