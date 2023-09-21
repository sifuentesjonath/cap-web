import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
// Components
import AppLayout from '@components/layout/AppLayout';
// import Panel from '@components/block/Panel';
import Button from '@components/block/Button';
import letter from '@/public/images/condooLetter.png';
// Styles
import { SentEmailContainer, Panel, ButtonPosition, CentralLogo, Circle, Content, ImgContain, Title, PanelContent } from './style';
export interface IHomeProps { }
type HomeWithLayout = React.FC<IHomeProps> & { layout: typeof AppLayout };

const Sent: HomeWithLayout = props => {
  const isMobile = useMediaQuery(`(max-width: 800px) && (min-width: 520px)`);

  const router = useRouter();
  const handleClick = () => {
    router.replace('/login');
  }
  return (
    <SentEmailContainer isMobile={isMobile} className="bg-secondary bg-opacity-20">
      <Panel className='panel'>
        <PanelContent isMobile={isMobile}>
          <Circle>
            <ImgContain>
              <CentralLogo>
                <Image alt='central logo' src={letter} />
              </CentralLogo>
            </ImgContain>
          </Circle>


          <div className='h-full w-full flex flex-col items-center justify-center gap-8'>
            <Title> Verify your email </Title>

            <Content>
              We’ve sent you a verification email! After verifying, please click the sign in button below.
            </Content>

            <ButtonPosition>
              <Button onClick={handleClick}
                width={isMobile ? 210 : 252}
                height={isMobile ? 58 : 72}
                type="click"
              >
                Sign In
              </Button>
            </ButtonPosition>
          </div>
        </PanelContent>
      </Panel>
    </SentEmailContainer>
  );
};

Sent.layout = AppLayout;

export default Sent;
