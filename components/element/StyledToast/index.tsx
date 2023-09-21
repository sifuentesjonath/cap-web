import { toast } from 'react-toastify';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { StyledToastContainer } from './style';

const StyledToast = ({ type, content = '' }) => (
  <StyledToastContainer className={`toast-container`}>
    {type === 'success' ? (
      <FaCheckCircle color="#6AC24B" />
    ) : (
      <FaInfoCircle color="red" />
    )}
    <div className="content text-left">
      {type === 'success' ? 'Success!' : 'Failed!'}
      <br />
      {content}
    </div>
  </StyledToastContainer>
);

function openToast(type, content = '') {
  toast(<StyledToast type={type} content={content} />, {
    position: 'bottom-right',
    className: `my-toastify`,
    progressClassName: 'toast-progress',
    autoClose: 4000,
    hideProgressBar: true,
    closeButton: true,
  });
}

export default openToast;
