import React, { FC } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
// Condoo
import condooLogo from '@/public/images/logo.png'
import CondooLogin from './CondooLogin';
import CondooSignUp from './CondooSignUp';
import CondooResetPassword from './CondooReset'
// Style / Icons 
import {
  CondooContainer,
  CondooLogoPosition,
} from './style'
import Logo from '@components/graphics/Logo';

interface ICondooForm {
  page: string;
  isMobile?: boolean;
}
const CondooForm: FC<ICondooForm> = ({ page, isMobile }) => {
  const router = useRouter();
  const handleLogoClick = () => router.replace('/');

  return (
    <CondooContainer isMobile={isMobile}>
      <CondooLogoPosition>
        <a onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img
            style={{ width: '135px', height: '27px' }}
            src="/images/logo.png"
            alt="Condoo logo small"
          />
        </a>
      </CondooLogoPosition>

      {page === 'login' && <CondooLogin />}
      {page === 'signup' && <CondooSignUp />}
      {page === 'reset' && <CondooResetPassword />}
    </CondooContainer>
  )
}

export default CondooForm
