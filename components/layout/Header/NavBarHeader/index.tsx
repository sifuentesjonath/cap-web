import { FC, } from 'react'
import Link from 'next/link';
// Components
import Logo from '@components/graphics/Logo';

import styled from 'styled-components';

interface INavBarHeaderProps {
   className?: string;
}
const NavBarHeader: FC<INavBarHeaderProps> = ({ className, children }) => {
   return (
      <div className='pt-20'> {/* Make page body respect header position*/}
         <NavbarContainer className={`${className ? `${className}` : ''}`} >
            <div className="site-navlinks flex-1 flex justify-between items-center relative">
               <div className='condoo-logo-icon'>
                  <Link href="/" passHref>
                     <Logo />
                  </Link>
               </div>
               {children}
            </div>
         </NavbarContainer>
      </div>
   )
}


const NavbarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 50;
   height: 5rem;
   width: 100%;
   padding-left: 1.25rem;
   padding-right: 1.25rem;
   --tw-bg-opacity: 1;
   background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
   
   @media(max-width : 1000px){
      height: 0;
      padding-left: unset;
      .condoo-logo-icon {
         position: absolute;
      }
   }
   .condoo-logo-icon {
      top: 0;
      left: 0;
      margin: 20px;
      padding-bottom:20px;
   }

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
   @media (min-width: 1600px){
      .site-navlinks {
         max-width: 1250px;
         margin: 0 auto;
      }
   }
`;
export default NavBarHeader