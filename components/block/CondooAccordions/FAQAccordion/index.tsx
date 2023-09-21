import { FC, useEffect, useState } from 'react'
// Components
import Link from 'next/link';
// Helpers
import data from '@components/block/CondooAccordions/FAQAccordion/data';

import {
	RootAccordion,
	AccordionHeader,
	AccordionItem,
	AccordionContentItem,
	AccordionTrigger,
	AccordionContent,
} from './accordion'

interface IFAQAccordionProps { }
const FAQAccordion: FC<IFAQAccordionProps> = ({ }) => {
	const primary: string = "Get Started"
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);

	const handleOpen = (index) => {
		if (index != activeIndex) setActiveIndex(index);
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		setIsOpen(true);
	}, [activeIndex])

	return (
		<RootAccordion type="single" collapsible>
			{
				data.map(({ title, content }, index) => {
					return (
						<AccordionItem key={`item_${index}`} value={`item_${index}`}>
							<AccordionTrigger onClick={(e) => handleOpen(index)}>
								<div className="content">
									<h3 className='title'>{title}</h3>
								</div>
								<div className='icon-container'>
									<div className='content-icon' />
								</div>
							</AccordionTrigger>

							<AccordionContent>
								<AccordionContentItem>
									<p>{content}</p>
								</AccordionContentItem>
							</AccordionContent>
						</AccordionItem>
					)
				})
			}

		</RootAccordion>
	)
}

export default FAQAccordion