import React from 'react';
import { XIcon } from '@heroicons/react/solid';

interface IAlertProps {
  title?: string;
  description: string;
  onClose: () => void;
  variant?: 'danger' | 'success' | 'info';
  isOpen: boolean;
  timeout?: number;
}

const colors = {
  danger: {
    bg: 'bg-red-100',
    border: 'border-red-400',
    text700: 'text-red-700',
    text500: 'text-red-500',
  },
  success: {
    bg: 'bg-green-100',
    border: 'border-green-400',
    text700: 'text-green-700',
    text500: 'text-green-500',
  },
  info: {
    bg: 'bg-blue-100',
    border: 'border-blue-400',
    text700: 'text-blue-700',
    text500: 'text-blue-500',
  },
};

const Alert: React.FC<IAlertProps> = ({
  title,
  description,
  onClose,
  isOpen,
  variant = 'info',
  timeout = 3000,
}) => {
  const color = colors[variant];

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        onClose();
      }, timeout);
    }
  }, [isOpen, onClose, timeout]);

  return (
    <div
      className={`flex items-center justify-between ${color.bg} border ${
        color.border
      } ${
        color.text700
      } px-4 py-3 rounded absolute left-1/2 bottom-4 -translate-x-1/2 ${
        isOpen ? 'translate-y-0' : 'translate-y-40'
      } transition-transform duration-200 ease-in-out`}
      role="alert"
    >
      <div className="mr-6">
        {title ? <strong className="font-bold mr-2">{title}</strong> : null}
        <span className="inline-block w-max">{description}</span>
      </div>
      <span className="py-2" onClick={onClose}>
        <XIcon className={`${color.text500} w-6 h-6`} />
      </span>
    </div>
  );
};

export default Alert;
