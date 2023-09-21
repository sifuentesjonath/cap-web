import { FC, useState, useEffect } from 'react';
// Redux
import { AppSelectorStates, useAppSelector } from '@redux/hook';
import { isAuthState } from '@redux/auth';
// Zendesk
import useZendeskWidgetBehavior from '@components/block/CondooZendesk/Zendesk/useZendeskWidgetBehavior';
import { getVisitorWidgetBehavior } from '@components/block/CondooZendesk/Zendesk/handleWebWidgetBehavior';
// Components
import PriceCards from '@components/block/PriceCards'
import Button from '@components/block/Button';
import UnitsSelector from '@components/block/UnitsSelector';
import Link from '@components/element/Link';
// Image
import Image from 'next/image'
import macbookAndPhone from '@/public/images/macbook-and-phone.png'
// Styles
import styles from './index.module.scss';
import {
  TextBox,
  PricingContainer,
  UnitsSelectorContainer,
  PriceCardsPosition,
  QuestionContainerPosition,
  QuestionContainer,
} from './style';
import paths from '@utils/paths';

export interface IPricingProps { }
const Pricing: FC<IPricingProps> = props => {
  const [selection, setSelection] = useState<number>(1);
  const user = useAppSelector((state: AppSelectorStates) => state.auth);


  return (
    <PricingContainer>
      <TextBox>
        <h1> Benefits and Pricing </h1>
        <p className={styles['sub-title']}>
          Choose the plan that meets your needs and budget. Unlike traditional
          property managers, our pricing plans are simple and transparent.
        </p>
      </TextBox>

      <UnitsSelectorContainer>
        <span className='select-message'><strong>Select the number of units that you own</strong></span>
        <div className='selector flex justify-center'>
          <UnitsSelector onSelect={(selection) => setSelection(selection)} />
        </div>
      </UnitsSelectorContainer>

      <PriceCardsPosition>
        <PriceCards units={selection} />
      </PriceCardsPosition>

      <QuestionContainerPosition>
        <QuestionContainer>
          <div className='image'>
            <Image
              src={macbookAndPhone}
              layout="intrinsic"
            />
          </div>

          <div className='content'>
            <h2>Have any questions?</h2>
            <Link type='button' to={paths.resourcesSubmitNewRequest}>Contact Support</Link>
          </div>
        </QuestionContainer>
      </QuestionContainerPosition>


    </PricingContainer>
  );
};

export default Pricing;
