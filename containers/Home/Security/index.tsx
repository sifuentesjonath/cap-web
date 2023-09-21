import { FC } from 'react';
// Components
import SquareData from '@components/block/SquareData';
// Styles
import {
  MainTittle,
  SecurityContainer,
  ButtonPosition,
} from './style';
import Button from '@components/block/Button';
import Link from 'next/link';

interface ISecurityProps { }
const Security: FC<ISecurityProps> = () => {

  return (
    <SecurityContainer>
      <div className='security-content-container'>
        <MainTittle>We are serious about security</MainTittle>

        <div className='squares-container'>
          <SquareData type="direct" />
          <SquareData type="continuous" />
          <SquareData type="insurance" />
          {/* <SquareData type="authentication" /> */}
        </div>

        <ButtonPosition>
          <Link href={'signup'}>
            <Button width={159}  >Get Started</Button>
          </Link>
        </ButtonPosition>
      </div>
    </SecurityContainer>
  );
};

export default Security;
