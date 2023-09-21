import { FC } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
// Helpers
import pageText from './pageText.json';
import { ISetupInfoStepProps } from './items';
// Components
import InfoItem from './InfoItem'
import Button from '@components/block/Button';
// Style / Icon
import { InformationPosition, SetupInfoStepContainer, Title } from './style';
import pcImage from '@/public/images/macbook-and-phone.png';
import { dimensions } from '@/scss/media';

const SetupInfoStep: FC<ISetupInfoStepProps> = ({ onNext }) => {
  const isMobile = useMediaQuery(`(${dimensions.mobile})`);
  const isDesktop = !isMobile;
  return (
    <SetupInfoStepContainer>
      <InformationPosition>
        <Title>Let&apos;s get you set up.</Title>
        <div className='infoitem-container'>
          {
            pageText.bulletList.map(item => (
              <InfoItem
                key={item.id}
                index={item.id}
                title={item.title}
                descriptionMd={item.descriptionMd}
              />
            ))}
        </div>

        <Button onClick={onNext} width={159}>Get Started</Button>

        {/* <Button className='button-style' onClick={onNext}>Get Started</Button> */}
      </InformationPosition>

      <div className='image-position'>
        <Image
          src={pcImage}
          alt="Condoo app laptop and phone"
          objectFit="contain"
          width={isMobile ? 450 : 650}
          height={isMobile ? 335 : 700}
        />
      </div>
    </SetupInfoStepContainer>
  );
};

export default SetupInfoStep;
