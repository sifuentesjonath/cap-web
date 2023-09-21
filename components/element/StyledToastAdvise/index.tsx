import { FC } from 'react';
import { toast } from 'react-toastify';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { StyledToastContainer } from './style';

type AdviseToastType = 'success' | 'failed' | 'advise';
interface IStyledToastProps {
  type: AdviseToastType;
  subject?: string;
  content?: string;
}
const StyledToast:FC<IStyledToastProps> = ({ type, content='', subject='' }) => (
  <StyledToastContainer className={`toast-container`}>
    {type === 'success' && (
      <FaCheckCircle className='icon' color="#6AC24B" />
    )}

    {type === 'failed' && (
      <FaInfoCircle className='icon' color="red" />
    )}

    {type === 'advise' && (
      <FaInfoCircle className='icon' color="#ff8c00" />
    )}

    <div className="content text-sm text-left">
      {subject}
      <br />
      {content}
    </div>
  </StyledToastContainer>
);

function openAdviseToast(type: AdviseToastType, subject='', content='') {
  toast(<StyledToast type={type} subject={subject} content={content} />, {
    position: 'bottom-right',
    className: `my-toastify`,
    progressClassName: 'toast-progress',
    // autoClose: 4000,
    hideProgressBar: true,
    closeButton: true,
  });
}

export default openAdviseToast;
