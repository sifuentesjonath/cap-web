
import { FC } from 'react'
import { FeatureCard } from '..';
import FeaturesAccordion from '@components/block/CondooAccordions/FeaturesAccordion';

interface IFeatureMobileViewProps {
	cards: FeatureCard[];
}
const FeatureMobileView: FC<IFeatureMobileViewProps> = ({ cards }) => {
	return (
		<FeaturesAccordion cards={cards} />
	)
}

export default FeatureMobileView