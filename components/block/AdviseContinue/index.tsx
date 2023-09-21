import React from 'react';
import StyledButton from '@components/element/StyledButton';
import Image from 'next/image';
import success from '@/public/images/success-1.png';

import styled from 'styled-components';

const AdviseContinue = ({ title='Success!', onContinue}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <ImagePosition>
        <Image
          alt='sucess'
          src={success}
        />
      </ImagePosition>

      <StyledButton className="mt-5 mx-auto md:ml-0" onClick={onContinue}>
        Continue
      </StyledButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Degular, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  // margin-left:20px;
  margin-bottom:40px;
`

const ImagePosition = styled.div`
  display: flex;
`;

export default AdviseContinue;
