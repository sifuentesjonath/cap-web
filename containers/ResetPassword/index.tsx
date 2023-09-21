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

export interface ILoginProps {}
type ResetPasswordWithLayout = FC<ILoginProps> & { layout: typeof AppLayout };
const ResetPassword: ResetPasswordWithLayout = props => {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  return (
    <LoginContainer> 
      <div className="login-overlay ">
        <LeftContainer>
          <CondooForm isMobile={isMobile} page='reset' />
        </LeftContainer>
      </div>
    </LoginContainer>
  );
};

ResetPassword.layout = AppLayout;

export default ResetPassword;
