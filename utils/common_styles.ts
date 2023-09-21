import { css } from 'styled-components';

export const HideScrollbarStyle = css`
  ::-webkit-scrollbar { display: none; } /* Hide scrollbar for Chrome, Safari and Opera */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
`;