import { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from '@components/element/Link';
import paths from '@utils/paths';
// Helpers
import { Cards, getCardImage } from '@components/block/FeatureDisplay/cards'
// Style
import { ChevronDownIcon } from '@heroicons/react/solid';
// Accordion
import {
	RootAccordion,
	AccordionHeader,
	AccordionItem,
	AccordionContentItem,
	AccordionTrigger,
	AccordionContent,
} from './accordion'
import { FeatureCard } from '@components/block/FeatureDisplay';

interface IFeatureAccordionProps {
	cards: FeatureCard[]
}
const FeatureAccordion: FC<IFeatureAccordionProps> = ({ cards }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);

	const primary: string = "Get Started"

	const handleOpen = (index) => {
		if (index != activeIndex) setActiveIndex(index);
		setIsOpen(!isOpen);
	}

	useEffect(() => setIsOpen(true), [activeIndex]);

	return (
		<RootAccordion type="single" collapsible>
			{
				cards.map((card, index) => {
					const iconName = card.name;
					return (
						<AccordionItem key={`item_${index}`} value={`item_${index}`}>
							<AccordionHeader>
								<AccordionTrigger iconName={iconName} onClick={(e) => handleOpen(index)}>
									<div className="content">
										<Image
											priority
											alt={`Button: ${card.name}`}
											src={
												isOpen && index === activeIndex
													? card.labelIcon.enabled
													: card.labelIcon.disabled
											}
										/>
										<label>{card.name}</label>
									</div>
									<ChevronDownIcon className='chevron' />
								</AccordionTrigger>
							</AccordionHeader>

							<AccordionContent>
								<AccordionContentItem>
									<div className='accordion-icon'>
										<Image alt={`${Cards.tittle[index]} feature`} src={getCardImage(Cards.image[index])} />
									</div>
									<p>{Cards.information[index]}</p>
									<span className="pb-8 pt-8">
										<Link type='button' to={paths.signUp}>{primary}</Link>
									</span>
								</AccordionContentItem>
							</AccordionContent>
						</AccordionItem>
					)
				})
			}

		</RootAccordion>
	)
}

export default FeatureAccordion