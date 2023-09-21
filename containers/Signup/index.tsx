/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
// Components
import CondooForm from '@components/block/CondooForm';

import AppLayout from '@components/layout/AppLayout';

import {
  SignupContainer,
  LeftContainer,
} from './style';

export interface ISignupProps { }
type SignupWithLayout = React.FC<ISignupProps> & { layout: typeof AppLayout };

const Signup: SignupWithLayout = props => {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  return (
    <SignupContainer>
      <div className="signup-overlay">
        <LeftContainer>
          <CondooForm isMobile={isMobile} page='signup' />
        </LeftContainer>
      </div>
    </SignupContainer>
  );
};

Signup.layout = AppLayout;

export default Signup;
