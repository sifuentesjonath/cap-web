import { FC, useState } from 'react';
// Components
import Input from '@components/block/Input';
// Style
import {
	NumberOfTh,
	TitleHolderLabelContainer,
	TitleHolderContainer,
	EmailContainer,
	TitleHolderLabel,
	ThLabel,
	ThLabel2,
	ThLabelContainer
} from './style'

// interface IEmailFormItemProps {
// 	titleHolder: TitleHolderType;
// 	onChangeEmail: (titleHolder: TitleHolderType) => void;
// 	number: number;
// }
const EmailFormItem = ({ _holder, onChangeEmail, number, isMobile }) => {
	const [email, setEmail] = useState('');
	return (
		<>
			<NumberOfTh>Management Agreement #{number + 1}</NumberOfTh>

			<TitleHolderLabelContainer isMobile={isMobile}>
				<TitleHolderContainer isMobile={isMobile}>
					{!isMobile &&
						<ThLabel>Title holder name</ThLabel>
					}
					<div className='titleholder-name'>
						<TitleHolderLabel className='font-semibold'>
							{_holder.FirstName} {_holder.LastName}
						</TitleHolderLabel>
					</div>
				</TitleHolderContainer>

				<EmailContainer>
					<ThLabel2>Email</ThLabel2>
					<Input
						placeholder="Email"
						className='email-input-style'
						value={email}
						onChange={e => setEmail(e.target.value)}
						onBlurCapture={() => onChangeEmail(_holder, email)}
					/>
				</EmailContainer>
			</TitleHolderLabelContainer>
		</>
	);
};

export default EmailFormItem;
