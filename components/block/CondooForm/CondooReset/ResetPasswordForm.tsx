import { useState } from 'react'
import { useForm } from 'react-hook-form';
import router from 'next/router';
// Component
import Alert from '@components/block/Alert';
import Input from '@components/block/PropertyCardModalInput';
import Button from '@components/block/Button';
// Helpers
import { toast } from 'react-toastify';
import { validateEmail } from '@utils/index';
// Api
import { resetPassword } from 'service/api';
// Style
import styled from 'styled-components';
import openAdviseToast from '@components/element/StyledToastAdvise';
import { AuthInputStyle } from '../AuthformStyle';

const ResetForm = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [error, setError] = useState('');

	const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();

	const onValid = async (data: any) => {
		try {
			setIsFetching(true);
			await resetPassword(data.email);
			toast.success('Password reset link sent to your email', {
				position: toast.POSITION.BOTTOM_CENTER,
				onClose: () => router.replace('/login')
			});
		}
		catch (error) {
			const notFound = error.code.includes('user-not-found');
			if (notFound) {
				const errorMessage = `
					Please make sure that the email you entered is a valid Condoo user.
				`
				openAdviseToast('failed', errorMessage);
				return;
			}
		}
		finally {
			setIsFetching(false);
		}
	};

	return (
		<FormContainer>
			<Input
				autoFocus
				error={errors.email}
				className='input-style'
				placeholder="Email"
				placeholderStyle='placeholder-style'
				{...register('email', {
					validate: value =>
						validateEmail(value)
							? true
							: 'Please enter a valid email address',
					required: { value: true, message: 'Email is required' },
				})}
			/>

			<Button
				onClick={handleSubmit(onValid)}
				type='submit'
				isLoading={isFetching}
			>
				Send Email
			</Button>

			{showAlert && (
				<Alert
					isOpen={showAlert}
					variant='danger'
					title='Uh Oh!'
					description={error}
					onClose={() => {
						setShowAlert(false);
						setError('');
					}}
				/>
			)}
		</FormContainer>
	)
}

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
	button {
		margin-bottom: 35px;
	}
	${AuthInputStyle};
	@media (max-height: 450px){
		button {
			width: 240px;
			margin: 0 auto;
		}
	}
`;

export default ResetForm