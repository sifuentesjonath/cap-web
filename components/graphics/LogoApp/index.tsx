/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import styled from 'styled-components'

import styles from './index.module.scss';
import { FontFamilies } from '@/containers/styles/typography';
import { LightColors } from '@/containers/styles/colors';

export interface ILogoProps {
  href?: string;
  small?: boolean;
  white?: boolean;
}
function LogoApp({ href, small, white }: ILogoProps, ref) {
  const lgMatches = useMediaQuery(`only screen and (min-width: 1024px)`);
  const isServer = () => typeof window === 'undefined';
  if (isServer()) return <div />;
  return (
    <CondooLogo href={href} ref={ref}>Condoo</CondooLogo>
  )
}

const CondooLogo = styled.a`
  ${FontFamilies.outfitFont};
  font-weight: 900;
  font-size: 26px;
  line-height: 26px;
  color: ${LightColors.Secondary};
`;

export default React.forwardRef(LogoApp);
