import { FC, useState } from 'react'
import Image from 'next/image';
import Link from '@components/element/Link';
import { useRouter } from 'next/router';
import { FooterContainer } from './style'
import paths from '@utils/paths';

export interface IFooterProps { }
const Footer: FC<IFooterProps> = props => {
  const router = useRouter();
  const { pathname } = router;

  const pathNamesBlackList = ['/login', '/signup', '/resetPassword', '/404'];
  const isPathNotInBlackList = !pathNamesBlackList.includes(pathname);
  const allRightsReserved = `© ${new Date().getFullYear()} Condoo. All Rights Reserved.`

  const condooLogoVertical = '/images/logo-white.png';

  return (
    <>
      {isPathNotInBlackList &&
        <FooterContainer>
          <div className="page-footer-container">
            <hr className="page-footer-content-divider-top" />

            <div className="page-footer-content-block-container">
              <div className="page-footer-links-container">
                <div className="page-footer-content-block-address">
                  <p>50 Ordnance St.</p>
                  <p>Toronto, ON</p>
                  <p>M6K 0C9</p>
                </div>
                {/* <div id="footer-products" className="page-footer-content-block">
                  <p>PRODUCTS</p>
                  <Link>Products</Link>
                  <Link>Products</Link>
                  <Link>Products</Link>
                </div> */}
                <div className="page-footer-content-block">
                  <label>WHO WE ARE</label>
                  <Link to={paths.about}>About</Link>
                  <Link to={paths.pricing}>Pricing</Link>
                </div>
                <div className="page-footer-content-block">
                  <label>WHY START NOW</label>
                  <Link to={paths.resources}>Resources</Link>
                </div>
              </div>
              <div className="page-footer-content-image">
                <Link to={paths.home}>
                  <Image alt='Footer Condoo logo' width={178} height={89.21} src={condooLogoVertical} />
                </Link>
              </div>
            </div>

            <hr className="page-footer-content-divider" />

            <div className="page-footer-content-block-container-bottom">
              <p id="footer-date-year">{allRightsReserved}</p>
              <Link to={paths.privacyPolicy}>Privacy Policy</Link>
              <Link to={paths.termsOfUse}>Terms of Use</Link>
            </div>
          </div>
        </FooterContainer>
      }
    </>
  );
};

export default Footer;
