import { FC } from 'react'
import paths from '@utils/paths';
// Components
import Image from 'next/image'
import Link from '@components/element/Link';
import {
	QuestionContainerPosition,
	QuestionContainer,
} from './style'
import macbookAndPhone from '@/public/images/macbook-and-phone.png'

interface IAnyQuestionsProps { }
const AnyQuestions: FC<IAnyQuestionsProps> = () => {
	return (
		<QuestionContainerPosition>
			<QuestionContainer>
				<div className='image'>
					<Image
						src={macbookAndPhone}
						layout="intrinsic"
					/>
				</div>

				<div className='content'>
					<div className='content-box'>
						<h2>Have any questions?</h2>
						<Link type='button' to={paths.resourcesSubmitNewRequest}>Contact Support</Link>
					</div>
				</div>
			</QuestionContainer>
		</QuestionContainerPosition>
	)
}

export default AnyQuestions