import styled from 'styled-components';
import { media } from '@/scss/media';
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

// FirstName

const inputStyle = `
	${TypographyDesktop.InputLabel};
	${FontFamilies.outfitFont};
    width: 100%;
    height: 52px;
    border: 1px solid #E1E1E1;
    border-radius: 8px;
    box-shadow: unset;
    background-color: white;
    justify-content: center;
    padding: 0px 16px;
    min-height: 35px;
    &:focus {
        box-shadow: 0px 10px 7px -10px rgba(22, 23, 24, 0.35),
            0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    }

`;

export const FirstNameStepContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input-style { 
        ${inputStyle} 
    }
    ${media.mobile}{
        gap: 1rem;
    }
    ${media.desktopLarge}{
        height: 70%;
    }
    button {
        ${TypographyDesktop.ButtonLabel};
        ${FontFamilies.outfitFont};
    }
    .input-group {
        display: flex;
        flex-direction: column;
        ${media.mobileSmallHeight}{
            flex-direction: row;
            gap: 8px;
            button {
                margin: 16px auto;
            }
        }
    }
`;

export const PositionLabel =styled.div`
    position :realtive;
    margin: 8px;
`