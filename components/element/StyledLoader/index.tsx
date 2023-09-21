import PuffLoader from "react-spinners/PuffLoader";
import { StyledDatePickerContainer } from './style';

const StyledLoader = () => {
  return (
    <StyledDatePickerContainer>
      <PuffLoader color={'rgb(106, 194, 75)'} loading={true} size={60} />
    </StyledDatePickerContainer>
  );
};

export default StyledLoader;
