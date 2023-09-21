import { FC, LegacyRef } from 'react';
import Link from '@components/element/Link';
import paths from '@utils/paths';
import useAnimationOnce from '@/hooks/useAnimationOnce';
// Page Text
import pageText from '../utils/pageText.json'
// Style
import {
  AddRentalContainer,
} from './style';
// Animations
import {
  animationMainTitle,
} from '../utils/animationsAndStyles'
import 'animate.css';

const iphonePropertiesImage = './images/iphone-properties.png';

interface IAddRentalProps { }
const AddRental: FC<IAddRentalProps> = (props) => {
  const [elementRef, canAnimate] = useAnimationOnce({
    root: null,
    rootMargin: '0px',
    threshold: .7
  });

  const mainTitleAnimation = `${canAnimate ? animationMainTitle : 'invisible'}`
  const subTitleAnimation = `${canAnimate ? animationMainTitle : 'invisible'}`

  return (
    <AddRentalContainer>
      <div className='add-rental-container'>
        <div className='add-rental-image-container'>
          <img className='add-rental-image' src={iphonePropertiesImage} alt="Properties in screen" />
        </div>

        <div className='add-rental-content-container' ref={elementRef as LegacyRef<any>}>
          <div className='add-rental-elements'>
            <h2 className={mainTitleAnimation}>{pageText.addRentalMainTitle}</h2>
            <p className={subTitleAnimation}>{pageText.addRentalParagraph}</p>
            <Link type='button' to={paths.signUp}>{pageText.addRentalButton}</Link>
          </div>
        </div>
      </div>
    </AddRentalContainer>
  );
};

export default AddRental;
