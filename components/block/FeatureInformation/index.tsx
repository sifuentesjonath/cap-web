import React from 'react';

import styles from './index.module.scss';

interface IFeatureInformationProps {
  icon: React.ReactElement;
  title: React.ReactElement;
  content: React.ReactElement;
  className?: string;
}
const FeatureInformation: React.FC<IFeatureInformationProps> = ({
  icon,
  title,
  content,
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl flex flex-col py-4 sm:py-8 md:py-4 px-4 sm:px-8 mb-12 md:mb-16 xl:mb-0 ${styles['feature-h']} ${styles['feature-w']} ${className}`}
    >
      <div className="self-center mb-6">{icon}</div>
      <>{title}</>
      <>{content}</>
    </div>
  );
};

export default FeatureInformation;
