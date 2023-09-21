import { FC } from 'react';
// Style
import {
  AddRentalContainer,
  SectionOverlay,
  RentalContent,
} from './style';

interface IAddRentalProps {
  backgroundColor?: string;
}
const AddRental: FC<IAddRentalProps> = ({ backgroundColor, children }) => {
  return (
    <AddRentalContainer backgroundColor={backgroundColor}>
      <SectionOverlay></SectionOverlay>

      <RentalContent>
        {children}
      </RentalContent>
    </AddRentalContainer>
  );
};

export default AddRental;
