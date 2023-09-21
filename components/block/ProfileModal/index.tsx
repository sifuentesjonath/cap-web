import React, { FC } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

export interface IProfileModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  className?: string;
}
const ProfileModal: FC<IProfileModalProps> = ({
  openModal,
  onCloseModal,
  className,
  children,
}) => {
  return (
    <Container containerStyle={className}
      open={openModal}
      onClose={onCloseModal}
      modal
      nested
    >
      {children}
    </Container>
  )
}

const Container = styled(Popup)`
  &-overlay {
    background: rgba(0,0,0,.5);
  }
  &-content {
    background-color: #F9F9F9;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    width: 974px;
    height: 603px;
    @media(max-height: 580px){
      height: 94vh;
    }
    ${(containerStyle) => containerStyle ? containerStyle : ''}
  }
`;

export default ProfileModal
