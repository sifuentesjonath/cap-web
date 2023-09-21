import { FC } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import router from 'next/router';
// Data
import { items, ISetupInfoStepProps } from './SetupFinalSucces';
// Components
import StyledButton from '@components/element/StyledButton';
import InfoItem from './InfoItem';
// Style / Icons
import { ImagePosition, SubContainer, InformationPosition, SetupInfoStepContainer, Title } from './style';
import pcImage from '@/public/images/final-success.png';
import Link from '@components/element/Link';
import paths from '@utils/paths';

const SetupFinalSuccess: FC<ISetupInfoStepProps> = ({ onPrev }) => {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const isDesktop = !isMobile;
  return (
    <SetupInfoStepContainer isMobile={isMobile}>
      <SubContainer>
        <InformationPosition>
          <Title>{`You’re Done!`}</Title>
          {items.map(item => (
            <InfoItem
              key={item.id}
              index={item.id}
              descriptionMd={item.descriptionMd}
              descriptionSm={item.descriptionSm}
            />
          ))}
          <Link type='button' to={paths.app}>
            Explore Account
          </Link>
        </InformationPosition>
        <ImagePosition>
          <Image
            src={pcImage}
            alt="Bullet 1"
            objectFit="contain"
            className="btn-back"
            width={isMobile ? 450 : 1500}
            height={isMobile ? 335 : 1500}
          />
        </ImagePosition>
      </SubContainer>
    </SetupInfoStepContainer>
  );
};

export default SetupFinalSuccess;
