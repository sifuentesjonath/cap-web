import React from 'react';
import documents from '@/public/images/documents.png';
import buildingLock from '@/public/images/building-lock.png';
import keys from '@/public/images/keys.png';
import twoArrows from '@/public/images/two-arrows.png';
import data from './data.json';
import { SquareDataContainer, ImagePosition, TitlePosition, Title, Information, TextInfo } from './style';
import Image from 'next/image';

const SquareData: React.FC<any> = ({ type }) => {
  let image, cardTitle, info;
  const setImage = () => {
    switch (type) {
      case 'direct':
        image = twoArrows;
        cardTitle = data.titles[0];
        info = data.info[0];
        break;
      case 'continuous':
        image = keys;
        cardTitle = data.titles[1];
        info = data.info[1];
        break;
      case 'insurance':
        image = buildingLock;
        cardTitle = data.titles[2];
        info = data.info[2];
        break;
      case 'authentication':
        image = documents;
        cardTitle = data.titles[3];
        info = data.info[3];
        break;
      default:
        throw 'no valid argument'
    }

  };

  setImage()
  return (
    <SquareDataContainer>
      <ImagePosition>
        <Image src={image} />
      </ImagePosition>

      <TitlePosition>
        <Title>{cardTitle}</Title>

        <Information>
          <TextInfo>{info}</TextInfo>
        </Information>
      </TitlePosition>
    </SquareDataContainer>
  );
};

export default SquareData;
