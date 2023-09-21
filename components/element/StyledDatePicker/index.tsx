import { StyledDatePickerContainer } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatePicker = ({ selected, onChange, width = '100%', wrapClassName = '' }) => {
  return (
    <StyledDatePickerContainer width={width} className={wrapClassName}>
      <DatePicker
        className="my-datepicker"
        selected={selected}
        onChange={onChange}
      />
    </StyledDatePickerContainer>
  );
};

export default StyledDatePicker;
