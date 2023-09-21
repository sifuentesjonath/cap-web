/* eslint-disable react/no-unescaped-entities */
import { FC, } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
// Components
import AppLayout from '@components/layout/AppLayout';
import CondooForm from '@components/block/CondooForm';

// Styles
import {
  LoginContainer,
  LeftContainer,
} from './style';

export interface ILoginProps { }
type LoginWithLayout = FC<ILoginProps> & { layout: typeof AppLayout };
const Login: LoginWithLayout = props => {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const isDesktop = !isMobile;

  return (
    <LoginContainer>
      <div className="login-overlay ">
        <LeftContainer>
          <CondooForm isMobile={isMobile} page='login' />
        </LeftContainer>
      </div>
    </LoginContainer>
  );
};

Login.layout = AppLayout;

export default Login;
