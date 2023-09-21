import { FC } from 'react';
// Data
import FeatureCards from './featureCards';
// Component
import FeatureDisplay from '@components/block/FeatureDisplay';
// Style
import { MainTittle, FeaturesContainer, SubTittle, SectionOverlay } from './style';

interface IFeaturesProps { }
const Features: FC<IFeaturesProps> = () => {
  return (
    <FeaturesContainer>
      <SectionOverlay>
        <div className='feature-heading'>
          <MainTittle>Features</MainTittle>
          <SubTittle>What is under the hood?</SubTittle>
        </div>

        <div className='features-container'>
          <FeatureDisplay cards={FeatureCards} />
        </div>
      </SectionOverlay>
    </FeaturesContainer>
  );
};

export default Features;
