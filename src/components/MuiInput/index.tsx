import { MyInputContainer } from './style';
import { FieldError } from 'react-hook-form';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  containerClassName?: string;
  className?: string;
  showErrorMsg?: boolean;
}

const MuiInput: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> =
  ({ height = null, placeholder, type = 'text', className = '', ...rest }) => {
    return (
      <MyInputContainer height={height}>
        <input
          className={`my-input ${className}`}
          type={type}
          min={0}
          placeholder={placeholder}
          {...rest}
        />
      </MyInputContainer>
    );
  };

export default MuiInput;
