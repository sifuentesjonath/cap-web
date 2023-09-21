import React, { useEffect, useState } from 'react';

export interface INumberRollupProps {
  num: number;
  duration: number;
  className?: string;
}

const NumberRollup: React.FC<INumberRollupProps> = ({
  num,
  className,
  duration,
}) => {
  const [roll, setRoll] = useState(0);
  useEffect(() => {
    const step = Math.ceil(num / (duration / 20));
    const timeoutHandler = setTimeout(() => {
      const handler = setInterval(() => {
        setRoll(prev => {
          if (prev + step > num) {
            clearInterval(handler);
            return num;
          }
          return prev + step;
        });
      }, 20);
      clearTimeout(timeoutHandler);
    }, 500);
  }, [duration, num]);
  return <p className={className ? className : ''}>${roll}</p>;
};

export default NumberRollup;
