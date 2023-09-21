import { HideScrollbarStyle } from '@utils/common_styles';
import styled from 'styled-components';

const BoxStyle = styled.div`
  background-color: #F9F9F9;
  border-radius: 16px;
`;

export const FinancialsContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .date-filter-container {
    width: 100%;
    background: #F9F9F9;
    padding: 1rem 3rem;
  }
  .date-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .date-filter button {
    margin-top: auto;
  }
  @media (max-width: 1000px) {
    .date-filter-container {
      margin-top: 80px;
    }
  }
  @media (min-width: 2140px){
    .box-container {
      margin: 0 auto;
      width: 1990px;
    }
    .date-filter {
      width: 1850px;
      margin: 0 auto;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px 60px 64px 64px;
  overflow: auto;
`;

export const StyledActiveToggle = styled.div`
  .toggle-item-container {
    border-bottom: 4px;
    width: 100%;
  }
  .toggle-item {
    margin: 0px 8px;
    border-bottom: 3px solid #EDEDED;
    border-radius: 3%;

    font-size: 14px;
    text-align: left;

    padding-right: 5px;
    padding-bottom: 3px;

    font-family: outfit, sans-serif;
    font-weight: 400;
  }
  .toggle-item-active {
    border-bottom: 3px solid #00C092;
  }

`;

export const TitleHolderSelectionsPosition = styled(BoxStyle)`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .chevrons {
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    width: 40px;
  }
  .viewAll {
    font-family: outfit, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-decoration-line: underline;
  }
`;

export const HorizontalScroller = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  
  ${HideScrollbarStyle};
  overflow-x: auto;
  white-space: nowrap;

  .chevrons-container {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-family: degular, sans-serif;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const GraphContainer = styled(BoxStyle)`
  height: 204px;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const TableFinancialsContainer = styled(BoxStyle)`
  height: auto;
  padding: 16px 34px 26px 53px;
  position: relative;
  & ::-webkit-scrollbar {
    /* -webkit-appearance: !important; */
  }
  & ::-webkit-scrollbar-thumb{
    border: none !important;
  }
`;

export const TitleAndItemSwitcherContainer = styled(BoxStyle)`
  position: sticky;
  z-index: 25;
  top: -6%;
  border-radius: 0;
  .table-heading-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: inherit;
  }
  .title {
    font-family: degular, sans-serif;
    font-weight: 900;
    font-size: 30px;
    line-height: 48px;
    text-transform: capitalize;
  }
  .groupedItemsScroll {
    display: flex;
    align-items: center;
    // margin-bottom: 30px;
  }
  .chevrons {
    display: flex;
    align-items: center;
  }
`;

export const Separator = styled.hr`
  border: 1px solid #C1C1C1;
  margin: 32px 0px 28px 0px;
`;
