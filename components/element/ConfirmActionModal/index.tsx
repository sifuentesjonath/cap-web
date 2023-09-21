// import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { LightColors } from '@/containers/styles/colors';
import { FC } from 'react'
import Button from '@components/block/Button';
import {
	buttonCloseStyle,
	buttonConfirmStyle,
	ConfirmActionModalContainer,
	ModalContent,
} from './style'


interface IConfirmActionProps {
	title: string;
	description: string;
	actionButtonMessage: string;
	onConfirm: () => void;
	toggle: boolean;
	onClose: () => void;
	onCancel?: () => void;
}
const ConfirmActionModal:FC<IConfirmActionProps> = (props) => {
	const { toggle, onClose, title, description, actionButtonMessage, onConfirm, onCancel } = props;

	const cancelAndClose = (closeModal: () => void) => {
		onCancel && onCancel();
		closeModal();
	}

	return (
		<ConfirmActionModalContainer nested modal
			open={toggle}
			onClose={onClose}
		>
		{(close) =>
			<ModalContent>
				<h4>{title}</h4>

				<div>
					<p>{description}</p>
				</div>

				<div className='buttons-container'>
					<Button bgColor='#000000' onClick={() => cancelAndClose(close)} className={buttonCloseStyle}>
						Close
					</Button>

					<Button onClick={onConfirm} className={buttonConfirmStyle} >
						{actionButtonMessage}
					</Button>
				</div>
			</ModalContent>
		}

		</ConfirmActionModalContainer>
	);
}

export default ConfirmActionModal