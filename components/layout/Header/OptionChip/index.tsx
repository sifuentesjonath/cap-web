import React from 'react';
import Link from 'next/link';
import { ImagePosition, MenuOption, TittlePosition } from './styles';
import Image from 'next/image';

export interface IOptionChipProps {
  // href?: string;
  // children?: any;
  name: string;
  path: string;
  image: StaticImageData;
  isActive?: boolean;
}

const OptionChip: React.FC<IOptionChipProps> = ({
  name,
  path,
  image,
  isActive = false,
}: IOptionChipProps) => {
  return (
    <div>
      <div className='flex flex-col items-center mb-6 '>
        <Link href={path} passHref>
          <a>
            <MenuOption buttonActive={isActive}>
              <ImagePosition>
                <Image src={image} alt={`Menu: ${path}`} />
              </ImagePosition>
            </MenuOption>
            <TittlePosition>
              <h3>{name}</h3>
            </TittlePosition>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OptionChip;
