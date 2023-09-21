import styled from 'styled-components';

export const NavbarContainer = styled.div`
  .site-navlinks {
    .site-navlink {
      margin: 0 38px;
    }
    .btn-getStarted {
      width: 160px;
      height: 44px;
      background: #00BF92;
      border-radius: 29px;
      color: white;
      margin-left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const SideBarContainer = styled.div`
  width: 140px;
  min-height: 100%;
  padding-top: 32px;
  // padding-left: 16px;
  background: #F9F9F9;
`;

export const ContainerPosition = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;