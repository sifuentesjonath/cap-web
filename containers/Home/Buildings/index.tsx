import { FC } from 'react';
import Data from './data.json';

import BuildingCard from '@/containers/Home/Buildings/BuildingCard';
import { MainTittle, BuildingsContainer, CondosContainer } from './style';

interface IBuildingsProps { }
const Buildings: FC<IBuildingsProps> = () => {
  return (
    <BuildingsContainer>
      <div className='buildings-container'>
        <MainTittle>Toronto Condo Landscape</MainTittle>
        <CondosContainer>
          {
            Data.map((building, index) => {
              return (
                <BuildingCard
                  key={`condoo-building-card-${index}`}
                  title={building.tittle}
                  imageUrl={building.image}
                />
              )
            })
          }
        </CondosContainer>
      </div>
    </BuildingsContainer>
  );
};

export default Buildings;
