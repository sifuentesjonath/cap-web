import { StyledButtonContainer } from './style';

const StyledButton = ({ children, className = '', onClick = () => {} }) => {
  return (
    <StyledButtonContainer className={`flex`}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </StyledButtonContainer>
  );
};

export default StyledButton;
