import Link from 'next/link';
import LoginForm from './LoginForm'
import { WelcomeContainer, FormPosition, AccountQuestionContainer } from '../style'

const CondooLogin = () => {
	return (
		<>
			<WelcomeContainer>
				<h1>Welcome back</h1>
				<span>Sign in to your Condoo account</span>
			</WelcomeContainer>

			<FormPosition>
				<LoginForm />
			</FormPosition>

			<AccountQuestionContainer>
				<div className='inline-sign-up'>
					<span>{`Don't have an account?`}</span>
					<Link href="/signup">
						<a>Sign Up</a>
					</Link>
				</div>

				<Link href="/resetPassword" >
					<a>Forgot Password?</a>
				</Link>
			</AccountQuestionContainer>
		</>
	)
}

export default CondooLogin