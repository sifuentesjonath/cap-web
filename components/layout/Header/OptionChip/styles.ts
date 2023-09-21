import styled from 'styled-components';

export const MenuOption = styled.div`
    display: block;
    width: 55px;
    height: 50px;
    margin-left:2px;
    border-radius: 8px;
    background-color: ${({ buttonActive}) => buttonActive ? '#00C092' : 'white'};
`


export const ImagePosition = styled.div`
  height: 100%;
  display: flex;
  padding-left: 2px;
  justify-content: center;
  align-items: center;
`

export const TittlePosition = styled.div`
  text-align: center;
  h3 {
    font-family: outfit;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
`
