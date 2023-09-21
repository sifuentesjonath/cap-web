import styled from 'styled-components';

const ScrollBarStyle = styled.div`
::-webkit-scrollbar {
  width: 10px;
  height:4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #D3D3D3;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}  
`;

export default ScrollBarStyle;