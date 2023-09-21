import { FC } from 'react';
// Component
import Link from 'next/link';
import Button from '@components/block/Button';
//
import { 
  ConnectTeamContainer,
  MainTittle,
  SubTittle,
  SectionOverlay,
  SectionContent 
} from './style';

interface IMapHeroProps {
}
const ConnectTeam:FC<IMapHeroProps> = (props) => {
  return (
    <ConnectTeamContainer>
      <SectionOverlay></SectionOverlay>

      <SectionContent>
        <div className='content'>
          <MainTittle>
            Sign up in 10 minutes, 
            cruise control in 24 hours
          </MainTittle>
          <SubTittle >
            View your rental's information, financials and talk with your property management 
            team 24/7 using our in-app features.
          </SubTittle>
          <Link href={'signup'}>
            <Button width={159}>Get Started</Button> 
          </Link>
        </div>
      </SectionContent>
    </ConnectTeamContainer>
  );
};

export default ConnectTeam;
