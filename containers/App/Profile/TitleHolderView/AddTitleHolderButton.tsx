import { FC, useState } from 'react'
import { UserProfileType } from '@/service/apiTypes';
// Modals
import AddTitleHolderModal from '@components/block/AddTitleHolderModal';
import Button from '@components/block/Button';

interface ITitleHolderButtonProps {
	profile: UserProfileType;
}
const AddTitleHolderButton: FC<ITitleHolderButtonProps> = props => {
	const { profile } = props;

	const [openModal, setOpenModal] = useState<boolean>(false);
	const closeModal = () => setOpenModal(false);

	return (
		<>
			<AddTitleHolderModal onOpenModal={() => setOpenModal(true)}
				userProfile={profile}
				openModal={openModal}
				onCloseModal={closeModal}
			/>
			<Button
				className='button add-button'
				onClick={() => { setOpenModal(true) }}
			>
				+ Add Title Holder
			</Button>
		</>
	)
}

export default AddTitleHolderButton