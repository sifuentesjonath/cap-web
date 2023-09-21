import ClipLoader from 'react-spinners/ClipLoader';
import { MyButtonContainer } from './style';

const Button = ({
  onClick = () => {},
  className = '',
  width = null,
  height = 45,
  disabled = false,
  children,
  type = 'button',
  isLoading = false,
  iconColor = 'white',
  txtColor = 'white',
  bgColor = '#00C092',
}) => {
  return (
    <MyButtonContainer
      className={`
      rounded-full h-10
      content-center  font-medium text-lg flex justify-center items-center
      ${className ? className : ''}`}
      style={{ width, height: height, backgroundColor: bgColor, color: txtColor }}
      disabled={disabled || isLoading}
      //@ts-ignore
      type={type}
      onClick={onClick}
    >
      {children}
      {isLoading && (
        <div className="flex items-center ml-3">
          <ClipLoader color={iconColor} loading={true} size={25} />
        </div>
      )}
    </MyButtonContainer>
  );
};

export default Button;
