import { FC, LegacyRef } from 'react';
// Component
// Anchor
import Link from '@components/element/Link';
import paths from '@utils/paths';
// Custom hooks
import useAnimationOnce from '@/hooks/useAnimationOnce';
// Page text
import pageText from '../utils/pageText.json'
// Style
import {
  ConnectTeamContainer,
  MainTittle,
  SubTittle,
} from './style';
// Animations
import {
  animationMainTitle,
  animationSubTitle
} from '../utils/animationsAndStyles';

interface IMapHeroProps { }
const ConnectTeam: FC<IMapHeroProps> = (props) => {
  const [elementRef, canAnimate] = useAnimationOnce();
  const mainTitleAnimation = `${canAnimate ? animationMainTitle : 'invisible'}`
  const subTitleAnimation = `${canAnimate ? animationSubTitle : 'invisible'}`

  return (
    <ConnectTeamContainer>
      <div className='section-image-container'>
        <img className='section-image' src="./images/iphone-profile.png" alt="Iphone Condoo Profile" />
      </div>

      <div className='section-content-container' ref={elementRef as LegacyRef<HTMLDivElement>}>
        <MainTittle className={mainTitleAnimation}>{pageText.connectTeamMainTitle}</MainTittle>
        <SubTittle className={subTitleAnimation}>{pageText.connectTeamParagraph}</SubTittle>
        <Link type='button' to={paths.signUp}>{pageText.connectTeamButton}</Link>
      </div>
    </ConnectTeamContainer>
  );
};

export default ConnectTeam;
