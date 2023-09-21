import { FC } from 'react';
import styled from 'styled-components';

interface IProgressBarProps {
  className?: string;
  completed: number;
  color?:string;
  isMobile?: boolean;
}
const ProgressBar: FC<IProgressBarProps> = ({ completed, className, color, isMobile }) => {
  return (
    <ProgressBarContainer isMobile={isMobile} className="bg-gray-200">
      <div
        className={`h-full rounded-3xl text-right transition-all duration-1000 ease-in-out ${className}`}
        style={{ width: `${completed}%` , backgroundColor:`${color}` }}
      ></div>
    </ProgressBarContainer>
  );
};

export const ProgressBarContainer = styled.div`
  height: 10px;
  width: 40%;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.5rem;
  ${({ isMobile }) => isMobile && 
    `
      width: 90%;
    `
  }
`;

export default ProgressBar;
