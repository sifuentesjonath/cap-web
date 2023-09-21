import styled from 'styled-components';
import { media } from '@/scss/media'
import { FontFamilies, TypographyDesktop } from '@/containers/styles/typography';

export default ()=> {}

export const SentEmailContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 78px;
    
    ${media.mobileSmall}{
        width: 100%;
        height: 100vh;
        padding: 10% 10% 10% 10%;
    }
    ${media.mobile}{
        width: 100%;
        height: 100vh;
        padding: 10% 10% 10% 10%;
    }
    ${media.tablet}{
        width: 100%;
        height: 100%;
        padding: 10% 10% 22% 10%;
        position: relative;
    }
    ${media.desktopSmall}{
        width: 100%;
        height: 100%;
        position: relative;
    }
`;

export const Panel = styled.div`
    position: relative;
    ${media.desktop}{
        padding: 2.5rem 3.5rem;
    }
    ${media.desktopLarge}{
        padding: 2.5rem 3.5rem;
    }
    ${media.tablet}{
        padding: 4rem 1.5rem;
    }
    ${media.desktopSmall}{
        padding: 4rem 1.5rem;
    }
    ${media.mobile}{
        padding: 4rem 1.5rem;
        height: 60%;
    }
    ${media.mobileSmall}{
        padding: 4rem 1.5rem;
        height: 60%;
    }
    border-width: 0px;
    border-radius: 0.375rem;
    /* position: sticky; */
    // bg
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    // shadow
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

export const PanelContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* padding-bottom: 5rem; */
    ${media.tablet}{
        padding: 0;
    }
    ${media.mobileSmall}{
        /* padding-top:4 rem;     */
    }
    ${media.desktop}{
        /* padding-top:4rem; */
        width: 620px;
        height: 300px;
    }
    ${media.desktopLarge}{
        /* padding-top:4rem; */
        width: 620px;
        height: 300px;
    }
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 50%;
    top: -40px;
    background:  #F5F5F5;
    ${media.mobileSmall && media.mobileSmallHeight}{
        top: -60px;
    }
    ${media.desktop}{
        top: -10%;
    }
    ${media.desktopLarge}{
        top: -10%;
    }
`;

export const ImgContain =styled.div`
    position: relative;
`;

export const CentralLogo = styled.div`
position: absolute;
left: 23%;
top: 17px;
`;


export const Title = styled.h1`
    ${TypographyDesktop.H1};
    ${FontFamilies.degularFont};
    text-align: center;

    ${media.desktop}{
        width: 110%;
        padding-top: 0;
    }
    ${media.desktopLarge}{
        width: 110%;
        padding-top: 0;
    }
    ${media.mobile}{
        font-size: 28px;
        font-weight: 500;
        width: 100%;
    }
    ${media.mobileSmall}{
        font-size: 18px;
        font-weight: 500;
        width: 100%;
    }
`;

export const Content = styled.p`
    text-align: center;
    ${TypographyDesktop.LargeParagraph};
    width: 100%;
    ${media.desktop}{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
    ${media.mobile}{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
    ${media.mobileSmall}{
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }
`;

export const ButtonPosition = styled.div`
    button {
        font-family: Poppins;
        // Cannot be applied, Button has a style property
        /* height: 252px;
        width: 72px;
        ${media.mobileSmallHeight}{
            width: 202px;
            height: 50px;
        } */
    }
`;
