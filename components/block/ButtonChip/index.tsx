import Image from 'next/image';
import React, { FC, useState } from 'react'
// Styles
import {
  ButtonContainer,
  ButtonTittle,
  ImageContainer,
} from './style'

interface IButtonChip {
  image: StaticImageData;
  buttonTitle: string;
  isMobile: boolean;
  handleClick: () => void;
  // horizontal: boolean;
}

const ButtonChip: FC<IButtonChip> = props => {
  const {
    image,
    buttonTitle,
    isMobile,
    handleClick,
  } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsActive((currentState) => !currentState);
    handleClick();
  }

  return (
    <ButtonContainer isActive={isActive} className={`h-full w-full `}>
      <button className='h-full w-full flex' onClick={() => handleButtonClick()}>
        <div className='button-container'>
          <ImageContainer>
            <Image
              src={image}
              alt="Bullet 1"
              objectFit="contain"
              className=""
              width={isMobile ? 40 : 40}
              height={isMobile ? 40 : 40}
            />
          </ImageContainer>
          <div className='button-title-container'>
            <ButtonTittle>{buttonTitle}</ButtonTittle>
          </div>
        </div>
      </button>
    </ButtonContainer>
  )
}


export default ButtonChip