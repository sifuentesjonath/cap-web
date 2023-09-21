import { FC } from 'react'
import {
	PrivacyTermsModalContainer,
	ModalContainer,
	ContentBlock,
	ContactInfoContainer,
} from './style'

interface IPrivacyTermsModalProps {
	toggle: boolean;
	onClose: () => void;
}
const PrivacyTermsModal: FC<IPrivacyTermsModalProps> = ({ toggle, onClose }) => {
	return (
		<PrivacyTermsModalContainer modal nested open={toggle} onClose={onClose}>
			<ModalContainer>
				<div className='terms-header'>
					<span>Website Privacy Policy of</span>
					<span>Page of</span>

					<div className='terms-header-centered'>
						<span className='url terms-spaced-span'>www.condoo.io Privacy Policy</span>
						<span>Type of website: Property Management</span>
						<span className='terms-spaced-span'>Effective date: 30th day of August, 2022</span>
					</div>

					<span className='terms-spaced-span'>
						www.condoo.io (the "Site") is owned and operated by Condoo Technologies Inc..
						Condoo Technologies Inc. can be contacted at:
					</span>

					<ContactInfo />
				</div>

				<ContentBlock> {/* Purpose */}
					<h4>Purpose</h4>
					<p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:</p>
					<ol>
						<li>
							The personal data we will collect;
						</li>
						<li>
							<span>Use of collected data;</span>
						</li>
						<li>
							<span>Who has access to the data collected;</span>
							<span><br /></span>
						</li>
						<li>
							<span>The rights of Site users; and</span>
							<span><br /></span>
						</li>
						<li>
							<span>The Site's cookie policy.</span>
							<span><br /></span>
						</li>
					</ol>
					<p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>
				</ContentBlock>

				<ContentBlock> {/* Consent */}
					<h4>Consent</h4>
					<p>By using our Site users agree that they consent to:</p>

					<ol start={1}>
						<li value="1">
							<span>The conditions set out in this Privacy Policy; and</span>
							<span><br /></span>
						</li>
						<li value="2">
							<span >The collection, use, and retention of the data listed in this Privacy Policy.</span>
							<span><br /></span>
						</li>
					</ol>
				</ContentBlock>

				<ContentBlock> {/* Personal Data we collect */}
					<h4>Personal Data We Collect</h4>
					<p>
						We only collect data that helps us achieve the purpose set out in this Privacy Policy.
						We will not collect any additional data beyond the data listed below without notifying you first.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Data Collected Automatically */}
					<h5>Data Collected Automatically</h5>
					<p>When you visit and use our Site, we may automatically collect and store the following information:</p>

					<ol start={1} >
						<li value="1">
							<span>IP address;</span>
							<span><br /></span>
						</li>
						<li value="2">
							<span>Location;</span>
							<span><br /></span>
						</li>
						<li value="3">
							<span>Hardware and software details;</span>
							<span><br /></span>
						</li>
						<li value="4">
							<span>Clicked links; and</span>
							<span><br /></span>
						</li>
						<li value="5">
							<span>Content viewed.</span>
							<span><br /></span>
						</li>
					</ol>
				</ContentBlock>

				<ContentBlock> {/* Data Collected in a Non-Automatic Way */}
					<h5>Data Collected in a Non-Automatic Way</h5>
					<p>We may also collect the following data when you perform certain functions on our Site:</p>

					<ol start={1}>
						<li value="1">
							<span>First and last name;</span >
							<span><br /></span>
						</li>
						<li value="2">
							<span>Age;</span>
							<span><br /></span>
						</li>
						<li value="3">
							<span>Date of birth;</span>
							<span><br /></span>
						</li>
						<li value="4">
							<span>Sex;</span>
							<span><br /></span>
						</li>
						<li value="5">
							<span>Email address;</span>
							<span><br /></span>
						</li>
						<li value="6">
							<span>Phone number;</span>
							<span><br /></span>
						</li>
						<li value="7">
							<span>Address; and</span>
							<span><br /></span>
						</li>
						<li value="8">
							<span>Auto fill data.</span>
							<span><br /></span>
						</li>
					</ol>

					<p>This data may be collected using the following methods:</p>
					<ol start={1}>
						<li value="1">
							<span>Creating an account.</span>
							<span><br /></span>
						</li>
					</ol>
				</ContentBlock>

				<ContentBlock> {/* How We Use Personal Data */}
					<h5>How We Use Personal Data</h5>

					<p>
						Data collected on our Site will only be used for the purposes specified in this Privacy Policy
						or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose
						in this Privacy Policy.
					</p>

					<p>The data we collect automatically is used for the following purposes:</p>
					<ol start={1}>
						<li value="1">
							<span>Statistics.</span>
							<span><br /></span>
						</li>
					</ol>

					<p>The data we collect when the user performs certain functions may be used for the following purposes: </p>
					<ol start={1}>
						<li value="1">
							<span>Communication.</span>
							<span><br /></span>
						</li>
					</ol>
				</ContentBlock>

				<ContentBlock> {/* Who We Share Personal Data With */}
					<h4>Who We Share Personal Data With</h4>

					<h5>Employees</h5>
					<p>
						We may disclose user data to any member of our organization who reasonably needs access to
						user data to achieve the purposes set out in this Privacy Policy.
					</p>

					<h5>Other Disclosures</h5>
					<p>We will not sell or share your data with other third parties, except in the following cases:</p>
					<ol start={1}>
						<li value="1">
							<span>If the law requires it;</span>
							<span><br /></span>
						</li>
						<li value="2">
							<span>If it is required for any legal proceeding;</span>
							<span><br /></span>
						</li>
						<li value="3">
							<span>To prove or protect our legal rights; and</span>
							<span><br /></span>
						</li>
						<li value="4">
							<span >To buyers or potential buyers of this company in the event that we seek to sell the company.</span >
							<span><br /></span>
						</li>
					</ol>

					<p>
						If you follow hyperlinks from our Site to another Site,
						please note that we are not responsible for and have no control
						over their privacy policies and practices.
					</p>
				</ContentBlock>

				<ContentBlock> {/* How Long We Store Personal Data */}
					<h4>How Long We Store Personal Data</h4>
					<p>User data will be stored until the purpose the data was collected for has been achieved.</p>
					<p>You will be notified if your data is kept for longer than this period.</p>
				</ContentBlock>

				<ContentBlock> {/* How We Protect Your Personal Data */}
					<h4>How We Protect Your Personal Data</h4>
					<p>
						In order to protect your security, we use the strongest available browser encryption
						and store all of our data on servers in secure facilities.
						All data is only accessible to our employees.
						Our employees are bound by strict confidentiality agreements and
						a breach of this agreement would result in the employee's termination.
					</p>
					<p>
						While we take all reasonable precautions to ensure that user data is secure and that users are protected,
						there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore
						we are unable to guarantee the security of user data beyond what is reasonably practical.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Children */}
					<h4>Children</h4>
					<p>
						We do not knowingly collect or use personal data from children under 13 years of age.
						If we learn that we have collected personal data from a child under 13 years of age,
						the personal data will be deleted as soon as possible.
						If a child under 13 years of age has provided us with personal data their parent or guardian may contact our privacy officer.
					</p>
				</ContentBlock>

				<ContentBlock> {/* How to Access, Modify, Delete, or Challenge the Data Collected */}
					<h4>How to Access, Modify, Delete, or Challenge the Data Collected </h4>
					<p>
						If you would like to know if we have collected your personal data,
						how we have used your personal data, if we have disclosed your personal
						data and to who we disclosed your personal data,
						or if you would like your data to be deleted or modified in any way,
						please contact our privacy officer here:
					</p>
					<ContactInfo showNameAbove />
				</ContentBlock>

				<ContentBlock> {/* Cookie Policy */}
					<h4>Cookie Policy</h4>
					<p>
						A cookie is a small file, stored on a user's hard drive by a website.
						Its purpose is to collect data relating to the user's browsing habits.
						You can choose to be notified each time a cookie is transmitted.
						You can also choose to disable cookies entirely in your internet browser,
						but this may decrease the quality of your user experience.
					</p>

					<p>We use the following types of cookies on our Site:</p>

					<ol className='advanced-ol'>
						<li>
							<span>Functional cookies</span>
							<p>
								Functional cookies are used to remember the selections
								you make on our Site so that your selections are saved for your
								next visits;
							</p>
						</li>
						<li>
							<span >Analytical cookies</span>
							<p>
								Analytical cookies allow us to improve the design and
								functionality of our Site by collecting data on how you access
								our Site, for example data on the content you access, how long
								you stay on our Site, etc;
							</p>
						</li>
						<li>
							<span>Targeting cookies</span>
							<p>
								Targeting cookies collect data on how you use the Site
								and your preferences. This allows us to personalize the
								information you see on our Site for you; and
							</p>
						</li>
						<li>
							<span >Third-Party Cookies</span >
							<p>
								Third-party cookies are created by a website other than
								ours. We may use third-party cookies to achieve the following
								purposes:
							</p>
							<ol>
								<li>
									<span>Monitor user preferences to tailor advertisements around their interests.</span>
								</li>
							</ol>
						</li>
					</ol>
				</ContentBlock>

				<ContentBlock> {/* Modifications */}
					<h4>Modifications</h4>
					<p>
						This Privacy Policy may be amended from time to time in order to maintain compliance with
						the law and to reflect any changes to our data collection process.
						When we amend this Privacy Policy we will update the "Effective Date" at the top of this Privacy Policy.
						We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates.
						If necessary, we may notify users by email of changes to this Privacy Policy.
					</p>
				</ContentBlock>

				<ContentBlock> {/* Contact Information */}
					<h4>Contact Information</h4>
					<p>
						If you have any questions, concerns or complaints, you can contact our privacy officer, Jacob Welsh, at:
					</p>
					<ContactInfo />
				</ContentBlock>

				<p>©2002-{new Date().getFullYear()} LawDepot.ca®</p>
			</ModalContainer>

		</PrivacyTermsModalContainer>
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

export default PrivacyTermsModal