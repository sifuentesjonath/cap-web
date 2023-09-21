import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
// Styles
import { FeatureButtonContainer, ImagePosition, TitlePosition, Title } from './style';
import { FeatureCard } from '../FeatureDisplay';

interface IFeatureButtonProps {
  id: number,
  activeId: number,
  onSelectButton: (card: FeatureCard) => void,
  card: FeatureCard;
}
const FeatureButton: FC<IFeatureButtonProps> = ({
  activeId,
  id,
  onSelectButton,
  card,
}) => {
  const { name, labelIcon } = card;
  const [isFeatureButtonActive, setIsFeatureButtonActive] = useState(false);

  const handleClick = (e) => {
    if (activeId == id) return; // Prevent toggling the selected button
    e.preventDefault();
    setIsFeatureButtonActive(buttonState => !buttonState);
    onSelectButton(card);
  }

  useEffect(() => {
    activeId == id
      ? setIsFeatureButtonActive(true)
      : setIsFeatureButtonActive(false);
  }, [activeId]);

  return (
    <a href="#/" onClick={handleClick}>
      <FeatureButtonContainer buttonActive={isFeatureButtonActive}>
        <ImagePosition>
          <Image
            alt={`Button: ${name}`}
            src={isFeatureButtonActive ? labelIcon.enabled : labelIcon.disabled}
          />
        </ImagePosition>
        <TitlePosition>
          <Title buttonActive={isFeatureButtonActive}>{name}</Title>
        </TitlePosition>
      </FeatureButtonContainer>
    </a>
  );
};
export default FeatureButton;
