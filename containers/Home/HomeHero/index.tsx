import { FC, LegacyRef } from 'react';
import Link from '@components/element/Link';
import paths from '@utils/paths';
// Style
import {
  HomeHeroContainer,
  MainTittle,
  SubTittle
} from './style';

interface IHomeHeroProps { }
const HomeHero: FC<IHomeHeroProps> = () => {
  return (
    <HomeHeroContainer>
      <div className='hero-content-container'>
        <div className='hero-content-elements-container'>
          <MainTittle>
            Cruise control for condo landlords
          </MainTittle>

          <SubTittle>
            Professional management in minutes.
          </SubTittle>

          <Link type='button' to={paths.signUp}>Get Started</Link>
        </div>
      </div>
      <div className='condoo-image-container'>
        <video autoPlay muted loop className='condoo-image'>
          <source src="./animations/home-hero-animation.mp4" />
        </video>
        {/* <img className='condoo-image' src="./images/cell-phone-condoo.png" alt="Cellphone Condoo" /> */}
      </div>
    </HomeHeroContainer>
  );
};

export default HomeHero;
