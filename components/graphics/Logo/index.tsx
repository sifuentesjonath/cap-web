/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export interface ILogoProps {
  href?: string;
  small?: boolean;
  white?: boolean;
}
function Logo({ href, small, white }: ILogoProps, ref) {
  const lgMatches = useMediaQuery(`only screen and (min-width: 1024px)`);
  const isServer = () => typeof window === 'undefined';

  if (isServer()) return <div />;

  return lgMatches && !small ? (
    <a className='absolute' href={href} ref={ref}>
      <img
        style={{ width: '135px', height: '27px' }}
        src={white ? '/images/logo-white.png' : '/images/logo.png'}
        alt="Condoo logo normal"
      />
    </a>
  ) : (
    <a href={href} ref={ref}>
      <img
        style={{ width: '135px', height: '27px' }}
        src="/images/logo.png"
        alt="Condoo logo small"
      />
    </a>
  );
}

export default React.forwardRef(Logo);
