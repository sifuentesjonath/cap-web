import styled from 'styled-components';

export const FooterContainer = styled.footer`
width: 100%;
min-height: 322px;
background-color: #000;
color: #fff;
margin-top: 24px;
.page-footer-container  {
  display: flex;
  flex-direction: column;
  padding: 10px 28px;
}
.page-footer-content-divider,
.page-footer-content-divider-top {
  color: #fff;
  margin: 20px 0 22px; 
}
.page-footer-content-divider {
  display: none;
}
@media (min-width: 580px) {
  .page-footer-content-divider-top {
    display: none;
  }
  .page-footer-content-divider {
    display: block;
    margin: 40px 0 22px; 
  }
}
.page-footer-content-block-container,
.page-footer-content-block-container-bottom {
  display: flex;
  justify-content: space-between;
}
.page-footer-content-block-container-bottom {
  flex-direction: column;
}

.page-footer-links-container {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .page-footer-content-block-container {
    flex-direction: row;
    justify-content: space-between;
  }
  .page-footer-content-block-container-bottom {
    flex-direction: row;
  }
  .page-footer-links-container {
    flex-direction: row;
    flex-grow: .8;
    justify-content: space-between;
    width: 85%;
  }
  .page-footer-container  {
    padding: 40px 98px;
  }
  .page-footer-content-image {
    cursor: pointer;
    margin-left: 24px;
  }
}
.page-footer-content-block {
  display: flex;
  flex-direction: column;
}
.page-footer-content-block a {
  color: #fff;
}
.page-footer-content-block-address,
.page-footer-content-block label,
/* #footer-products, */
#footer-date-year {
  display: none;
}
@media (min-width: 580px) {
  .page-footer-content-block-address {
    display: flex;
    flex-direction: column;
  }
  .page-footer-content-block label {
    display: block;
  }
  #footer-date-year {
    display: block;
    flex-grow: 0.9;
  }
}
.page-footer-content-block p, 
.page-footer-content-block-address p,
.page-footer-content-block-container p,
.page-footer-content-block-container a,
.page-footer-content-block-container-bottom p,
.page-footer-content-block-container-bottom a {
  color: #fff;
  margin-top: 8px;
  margin-bottom: 8px;
}
.page-footer-content-block-address {
  font-weight: 700;
  flex-grow: 0.2;
}
.page-footer-content-block-address :first-child,
.page-footer-content-block :first-child {
  margin: 0;
  font-weight: 700;
  text-transform: capitalize;
}
@media (min-width: 1600px){
display: flex;
justify-content: center;
.page-footer-content-block-container {
  width: 1200px;
}
}
`;