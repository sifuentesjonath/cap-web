import styled from 'styled-components';
import { media } from '@/scss/media'

export default ()=> {}

export const SentEmailContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    ${media.mobile}{
        width: 100%;
        height: 100%;
        padding: 40% 10% 0% 10%;
    }
    ${media.tablet}{
        width: 100%;
        height: 100px;
        position: relative;
        top: 80px
     
    }
`;

export const Panel = styled.div`
    ${media.desktop}{
        padding: 2.5rem 3.5rem;
    }
    ${media.tablet}{
        padding: 4rem 1.5rem;
        

    }
    ${media.mobile}{
        padding: 4rem 1.5rem;
        
    }
    border-width: 0px;
    border-radius: 0.375rem;
    position: sticky;
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
    padding-bottom: 5rem;
    ${media.tablet}{
        padding: 0;
    }
    ${media.desktop}{
        width: 620px;
        height: 300px;
    }
`;

export const Circle = styled.div`
width: 80px;
height: 80px;
position: absolute;
border-radius: 50%;
top: -6%;
background:  #F5F5F5;
${media.desktop}{
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
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 48px;
text-align: center;
${media.desktop}{
    width: 110%;
    padding-top: 0;
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
}
${({ isMobile }) => isMobile && 
    `   font-weight: 800;
        width: 110%;
    `
}
`;

export const Content = styled.p`
text-align: center;
font-family: Poppins;
font-style: normal;
width: 100%;
${media.desktop}{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
}
`;

export const ButtonPosition = styled.div`
`;
