import { FC } from 'react'
import {
	TermsOfUseContainer,
	ContactInfoContainer,
	ContentBlock
} from './style'

interface ITermsOfUseProps { }
const TermsOfUse: FC<ITermsOfUseProps> = () => {
	return (
		<div className='flex justify-center'>
			<TermsOfUseContainer>
				<div className='terms-header'>
					<h1>Terms of Use</h1>
				</div>

				<ContentBlock> {/* Disclaimer block */}
					<p>
						These terms and conditions (the "Terms and Conditions") govern the use of www.condoo.io (the "Site").
						This Site is owned and operated by Condoo Technologies Inc. This Site is an property management website.
					</p>

					<p>
						By using this Site, you indicate that you have read and understand these Terms and Conditions and
						agree to abide by them at all times.
					</p>

					<p>
						THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION
						CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES.
						PLEASE READ IT CAREFULLY.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Intellectual property */}
					<h4>Intellectual Property</h4>
					<p>
						All content published and made available on our Site is the property of Jacob Welsh and the Site's creators.
						This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes
						to the composition of our Site.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Accounts */}
					<h4>Accounts</h4>
					<p>When you create an account on our Site, you agree to the following:</p>

					<ol className='advanced-ol'>
						<li>
							You are solely responsible for your account and the security and privacy of your account,
							including passwords or sensitive information attached to that account; and
						</li>
						<li>
							All personal information you provide to us through your account is up to date, accurate,
							and truthful and that you will update your personal information if it changes.
						</li>
					</ol>

					<p>
						We reserve the right to suspend or terminate your account if you are using our
						Site illegally or if you violate these Terms and Conditions.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Limitation of Liability */}
					<h4>Limitation of Liability</h4>

					<p>
						Jacob Welsh and our directors, officers, agents, employees, subsidiaries,
						and affiliates will not be liable for any actions, claims, losses, damages,
						liabilities and expenses including legal fees from your use of the Site.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Indemnity */}
					<h4>Indemnity</h4>

					<p>
						Except where prohibited by law, by using this Site you indemnify and hold
						harmless Jacob Welsh and our directors, officers, agents, employees, subsidiaries,
						and affiliates from any actions, claims, losses, damages, liabilities and expenses
						including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Applicable law */}
					<h4>Applicable Law</h4>

					<p>These Terms and Conditions are governed by the laws of the Province of Alberta.</p>
				</ContentBlock>

				<ContentBlock> {/* Dispute resolution */}
					<h4>Dispute Resolution</h4>

					<p>
						Subject to any exceptions specified in these Terms and Conditions,
						if you and Jacob Welsh are unable to resolve any dispute through informal discussion,
						then you and Jacob Welsh agree to submit the issue first before a non-binding mediator
						and to an arbitrator in the event that mediation fails.
						The decision of the arbitrator will be final and binding.
						Any mediator or arbitrator must be a neutral party acceptable to both you and Jacob Welsh.
					</p>

					<p>
						Notwithstanding any other provision in these Terms and Conditions,
						you and Jacob Welsh agree that you both retain the right to bring an
						action in small claims court and to bring an action for injunctive
						relief or intellectual property infringement.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Severability */}
					<h4>Severability</h4>

					<p>
						If at any time any of the provisions set forth in these Terms and Conditions
						are found to be inconsistent or invalid under applicable laws, those provisions
						will be deemed void and will be removed from these Terms and Conditions.
						All other provisions will not be affected by the removal and the rest of these
						Terms and Conditions will still be considered valid.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Changes */}
					<h4>Changes</h4>

					<p>
						These Terms and Conditions may be amended from time to time in order to maintain
						compliance with the law and to reflect any changes to the way we operate our Site
						and the way we expect users to behave on our Site.
						We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Contact Details */}
					<h4>Contact Details</h4>

					<p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>

					<ContactInfo />
				</ContentBlock>
			</TermsOfUseContainer>
		</div>
	)
}

const ContactInfo = ({ showNameAbove = false }) => {
	return (
		<ContactInfoContainer>
			{showNameAbove && <span>Jacob Welsh</span>}
			<span className='italic'>jacob.welsh@condoo.io</span>
			<span className='italic'>(780) 263-6495</span>
			<span>2500-10220 103 Ave NW Edmonton AB T5J 0K4</span>
		</ContactInfoContainer>
	)
}

export default TermsOfUse