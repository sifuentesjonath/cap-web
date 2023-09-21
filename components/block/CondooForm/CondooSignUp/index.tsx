import SignUpForm from './SignUpForm'
import Link from 'next/link';
import { WelcomeContainer, FormPosition, AccountQuestionContainer} from '../style'

const CondooSignUp = () => {
	return (
		<>
			<WelcomeContainer>
				<h1>Get Started With Condoo</h1>
			</WelcomeContainer>

			<FormPosition>
				<SignUpForm />
			</FormPosition>

			<AccountQuestionContainer>
				<div className='inline-sign-up'>
					<span> Already have an account? </span>
					<Link href="/login">
						<a>Sign in</a>
					</Link>
				</div>
			</AccountQuestionContainer>
		</>
	)
}

export default CondooSignUp