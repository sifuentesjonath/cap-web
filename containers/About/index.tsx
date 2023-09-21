import { FC, useEffect } from 'react'
// Zendesk
// import { ZendeskAPI } from 'react-zendesk';
import { ZendeskAPI } from '@components/block/CondooZendesk/Zendesk/Zendesk';
import { handleWebWidgetAperture } from '@components/block/CondooZendesk/Zendesk/handleWebWidget';
// redux
import { AppSelectorStates, useAppDispatch, useAppSelector } from '@/redux/hook';
import { resetZendeskState, setZendeskState } from '@/redux/zendesk';
import { isAuthState } from '@redux/auth';
// Components
import AddRentalAbout from '@components/block/CondooCards/AddRental/AddRentalAbout'
import AboutParagraph from '@components/block/CondooCards/AboutParagraph'
import FAQAccordion from '@components/block/CondooAccordions/FAQAccordion'
import AnyQuestions from '@components/block/CondooCards/AnyQuestions'
import ConnectTeam from '@components/block/CondooCards/ConnecTeam'
// import TabletPhonesFrame from '@components/block/CondooCards/TabletPhonesFrame'
import TabletPhonesFrame from '@components/block/CondooFrames/TabletPhonesFrame'
import HandsomesCard from '@components/block/CondooCards/HandsomesCard'
import {
	AboutContainer,
	AboutUsTitle,
	FAQAccordionContainer,
} from './style'
import useZendeskWidgetBehavior from '@components/block/CondooZendesk/Zendesk/useZendeskWidgetBehavior';
import { getVisitorWidgetBehavior } from '@components/block/CondooZendesk/Zendesk/handleWebWidgetBehavior';
import router from 'next/router';

const About: FC = () => {
	const user = useAppSelector((state: AppSelectorStates) => state.auth);

	return (
		<AboutContainer>
			<AboutUsTitle>About us</AboutUsTitle>
			<AddRentalAbout />
			<AboutParagraph />

			<FAQAccordionContainer>
				<h2 className='faqs'>FAQs</h2>
				<FAQAccordion />
			</FAQAccordionContainer>

			<TabletPhonesFrame />
			<HandsomesCard />
			<AnyQuestions />
		</AboutContainer>
	)
}

export default About