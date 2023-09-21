import React, { useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useHover } from '@/hooks';

export interface ISubMenuProps {
  title: string;
  grayed?: boolean;
  expanded?: boolean;
  onClick: (string) => void;
  somethingHovered?: boolean;
  updateHoveredState?: (title: string, hovered: boolean) => void;
}

const SubMenu: React.FC<ISubMenuProps> = ({
  title,
  expanded,
  grayed,
  onClick,
  somethingHovered,
  updateHoveredState,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLHeadingElement>();

  useEffect(() => {
    updateHoveredState && !grayed && updateHoveredState(title, isHovered);
  }, [isHovered, updateHoveredState, grayed, title]);

  return (
    <h3
      className={`px-5 py-4 font-normal h-20 flex items-center cursor-pointer text-blueBlack transition-opacity duration-200 ${
        (grayed || (somethingHovered && !expanded)) && 'opacity-20'
      } text-lg`}
      onClick={() => onClick(title)}
      ref={hoverRef}
    >
      {title}
      <ChevronDownIcon
        className={`h-6 w-6 transition-transform duration-200 ${
          expanded && 'rotate-180'
        }`}
      />
    </h3>
  );
};

export default SubMenu;
