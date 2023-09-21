import React from 'react';

import styles from './index.module.scss';

export enum ESubContainerType {
  equal,
  double,
}
export interface ISubContainerProps {
  type: ESubContainerType;
  direction?: 'left-to-right' | 'right-to-left';
  className?: string;
}

const SubContainer: React.FC<ISubContainerProps> = ({
  type,
  direction = 'left-to-right',
  className,
  children,
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center lg:flex-row lg:h-screen ${
        className ? className : ''
      }`}
    >
      <div
        className={`relative w-full h-full ${
          type === 0 ? 'lg:w-6/12' : 'lg:w-8/12'
        } ${styles['sub-container-cell']} flex flex-row items-center ${
          direction === 'left-to-right' ? 'justify-center' : 'justify-start'
        }`}
      >
        {children[0]}
      </div>
      <div
        className={`relative w-full h-full ${
          type === 0 ? 'lg:w-6/12' : 'lg:w-4/12'
        } ${styles['sub-container-cell']} flex flex-row items-center ${
          direction === 'left-to-right' ? 'justify-end' : 'justify-center'
        }`}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default SubContainer;
