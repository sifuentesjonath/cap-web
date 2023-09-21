import React, { FC, useEffect, useState } from 'react';
import data from './data.json';
// Components
import PriceCard from '@components/block/PriceCard';

interface IPriceCardsProps {
  units: number;
}
const PriceCards: FC<IPriceCardsProps> = props => {
  const { units } = props

  const [selectedOption, setSelectedOption] = useState<number>(1);

  const selectCard = () => {
    enum CardUnitRange {
      first = 0,
      second = 4,
      third = 8,
    }
    let selection = 0;
    if (units >= CardUnitRange.second && units < CardUnitRange.third)
      selection = 1;
    if (units == CardUnitRange.third)
      selection = 2;

    setSelectedOption(selection);
  }

  const getPercent = (): string => {
    const options = {
      0: data.percents[0],
      1: data.percents[1],
      2: data.percents[2],
    }
    return options[selectedOption];
  }

  useEffect(() => selectCard(), [units]);

  return (
    <>
      <PriceCard
        title="Cruise"
        percent={getPercent()}
        isSelected={true}
        options={data.cruise}
      />
    </>
  )
}

export default PriceCards
