import { FC } from 'react';
import Image from 'next/image';
// Helpers
import { IInfoItemProps, images } from './items';
// Style
import { ImagePosition, InfoItemTitle, InfoItemContent, InfoItemDescription } from './style';
import { LightColors } from '@/containers/styles/colors';

const InfoItem: FC<IInfoItemProps> = ({
  index,
  title,
  descriptionMd,
  // descriptionSm,
}) => {
  const circleWidth = 37;
  return (
      <div className="mb-6 mt-0 itemContent">
        <div className="flex-1 flex flex-row items-center">
          {/* TODO: make this on html */}
          {/* <div className={`rounded-full h-7 w-7 mr-2 bg-red-500 text-base text-center`}>
            {index}
          </div> */}

          <ImagePosition>
              <Image 
                src={images[index]}
                alt={`Bulltet ${index}`} 
                objectFit="contain" 
                width={circleWidth} 
                className='md:block hidden' 
              />
          </ImagePosition>
          <InfoItemTitle>{title}</InfoItemTitle>
        </div>
        <InfoItemContent>
          <div style={ {width: circleWidth + 3} }></div>

          <InfoItemDescription>{descriptionMd}</InfoItemDescription>
        </InfoItemContent>
      </div>
  );
};
export default InfoItem;