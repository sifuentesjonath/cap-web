import FeatureButton from '@components/block/FeatureButton';
import { FC, useState } from 'react'
import { FeatureCard as featureCard } from '..';
import FeatureCard from '@/components/block/FeatureCard'

interface IFeatureDesktopViewProps {
	cards: featureCard[];
}
const FeatureDesktopView: FC<IFeatureDesktopViewProps> = ({ cards }) => {
	const currentCard = 4;
	const [currentCardId, setCurrentCardId] = useState(currentCard);
	const [currentFeatureCard, setCurrentFeatureCard] = useState(cards[currentCard]);
	// Actions
	const onSelectFeatureLabel = (card: featureCard) => {
		const id = cards.findIndex((indexCard) => card.name == indexCard.name)
		setCurrentCardId(id);
		setCurrentFeatureCard(card);
	};
	return (
		<div className='flex justify-center gap-4'>
			<div className="buttonColumn">
				{
					cards.map((card, index) => {
						return (
							// FIXME: Some icons are not downloaded correctly:
							// aparently some icons have a default 'padding' on its png
							// and makes it harder to center on these buttons
							// TODO: Download Icons correctly.
							<FeatureButton
								key={`key-${index}`}
								id={index}
								onSelectButton={onSelectFeatureLabel}
								activeId={currentCardId}
								card={card}
							/>
						)
					})
				}
			</div>
			<div className='informationColumn'>
				<FeatureCard card={currentFeatureCard} />
			</div>
		</div>
	)
}

export default FeatureDesktopView