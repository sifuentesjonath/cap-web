import React, { useEffect } from 'react';
import Link from 'next/link';
import { useHover } from '@/hooks';

export interface INavItemProps {
  href?: string;
  className?: string;
  children?: any;
  grayed?: boolean;
  somethingHovered?: boolean;
  updateHoveredState?: (title: string, hovered: boolean) => void;
}
const NavItem: React.FC<INavItemProps> = ({
  href,
  className,
  children,
  grayed,
  somethingHovered,
  updateHoveredState,
}: INavItemProps) => {
  const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

  useEffect(() => {
    updateHoveredState && updateHoveredState('', isHovered);
  }, [isHovered, updateHoveredState]);

  return (
    <Link href={href} passHref>
      <a
        className={`text-blueBlack px-5 py-4 font-normal text-lg transition-colors duration-300 ${
          grayed
            ? 'text-thinGray pointer-events-none'
            : isHovered
            ? 'text-blueBlack'
            : somethingHovered
            ? 'text-thinGray'
            : 'text-blueBlack'
        } ${className ? className : ''}`}
        ref={hoverRef}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
