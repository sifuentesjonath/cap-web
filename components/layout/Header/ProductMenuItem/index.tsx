import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CruiseImageBlackOutlined from '@/public/images/Car_Icon-black-outlined.png';
import CruiseImageBlue from '@/public/images/Car_Icon-blue.png';
import SuperImageBlackOutlined from '@/public/images/Jet_Icon-black-outlined.png';
import SuperImageBlue from '@/public/images/Jet_Icon-blue.png';
import AutoImageBlackOutlined from '@/public/images/Rocket_Icon-black-outlined.png';
import AutoImageBlue from '@/public/images/Rocket_Icon-blue.png';
import { useHover } from '@/hooks';

export enum EProductType {
  Cruise,
  SuperCruise,
  AutoPilot,
}

export interface IProductMenuItemProps {
  type: EProductType;
  href?: string;
}

const Products = [
  {
    images: [CruiseImageBlackOutlined, CruiseImageBlue],
    title: 'Cruise',
    subTitle: 'Full Management',
  },
  {
    images: [SuperImageBlackOutlined, SuperImageBlue],
    title: 'Super Cruise',
    subTitle: 'Guaranteed Rent',
  },
  {
    images: [AutoImageBlackOutlined, AutoImageBlue],
    title: 'Autopilot',
    subTitle: 'Guarenteed Rent + More',
  },
];

const ProductMenuItem: React.FC<IProductMenuItemProps> = ({ type, href }) => {
  const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

  return (
    <Link href={href} passHref>
      <a
        className="flex self-start justify-center items-center hover:text-blueBlack"
        ref={hoverRef}
      >
        <Image
          src={Products[type].images[isHovered ? 1 : 0]}
          width={75}
          height={75}
          alt=""
        />
        <div className="flex flex-col items-start">
          <p className="font-medium text-lg">{Products[type].title}</p>
          <p className="font-medium text-xs">{Products[type].subTitle}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductMenuItem;
