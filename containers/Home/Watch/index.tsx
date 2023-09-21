import { FC } from 'react';
import Image from 'next/image';
// Components
import StyledButton from '@components/element/StyledButton';
// Style / Icon
import { MainTittle, WatchContainer } from './style';

interface IWatchProps { }
const Watch: FC<IWatchProps> = (props) => {
  return (
    <WatchContainer>
      <div className='watch-content-container'>
        <MainTittle>
          Receive monthly cash disbursements of your net operating income
        </MainTittle>
        <div className='watch-image-container'>
          <img className='watch-image' src="./images/graphic-distribution-phone.png" alt="Iphone Condoo Profile" />
        </div>
      </div>
    </WatchContainer>
  );
};

export default Watch;
