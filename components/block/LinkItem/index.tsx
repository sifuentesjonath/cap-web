import React, { FC, useEffect, useState } from 'react'

import Link from '@components/element/Link';
import router from 'next/router';

interface ILinkItemProps {
  href: string;
  className?: string;
  onClick?: () => void;
}
const LinkItem: FC<ILinkItemProps> = props => {
  const { href, className = '', children } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const isCurrentPath = (): boolean => router.pathname.includes(href) ? true : false;
  const setSelected = () => isCurrentPath() ? setIsSelected(true) : setIsSelected(false);

  useEffect(() => setSelected(), [router.pathname]);

  return (
    <Link className={`${className} ${isSelected ? 'font-bold' : ''}`} to={href}>
      {children}
    </Link>
  )
}

export default LinkItem
