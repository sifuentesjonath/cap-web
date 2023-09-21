import React, { useState } from 'react';
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeOffIcon,
} from '@heroicons/react/solid';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import { MyInputContainer } from './style';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  containerClassName?: string;
  className?: string;
  showErrorMsg?: boolean;
  placeholderStyle?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    containerClassName,
    label,
    error,
    type,
    className,
    showErrorMsg = true,
    height,
    placeholderStyle,
    ...rest
  },
  ref
) => {
  const [show, setShow] = useState(false);
  const isError = !!error?.message;
  return (
    <MyInputContainer
      className={classNames('w-full h-full', {
        [containerClassName]: containerClassName,
      })}
      height={height}
    >
      {label && (
        <label htmlFor="email" className="block text-sm font-normal text-black mb-3">
          {label}
        </label>
      )}
      <div className="h-auto relative rounded-md">
        <input
          ref={ref}
          className={`
          my-input block w-full  ${type === 'number' ? '' : 'pr-10'}
            ${
              isError
                ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                : placeholderStyle ? placeholderStyle : 'text-black placeholder-black focus:ring-primary '
            }
            focus:outline-none
            sm:text-md ${className ? className : ''}`}

          type={show ? 'text' : type ? type : 'text'}
          {...rest}
        />
        {type === 'password' && (
          <div
            className={`absolute inset-y-0 ${
              isError ? 'right-5' : 'right-0'
            } pr-3 flex items-center`}
            onClick={() => setShow(!show)}
          >
            {show ? (
              <EyeIcon
                className={`h-5 w-5 ${
                  isError ? 'text-red-500' : 'text-gray-500'
                }`}
              />
            ) : (
              <EyeOffIcon
                className={`h-5 w-5 ${
                  isError ? 'text-red-500' : 'text-gray-500'
                }`}
              />
            )}
          </div>
        )}
        {isError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      {showErrorMsg && error ? (
        <p
          className={`h-4 mt-2 text-xs text-red-600  pl-6 ${
            isError ? 'visible' : 'invisible'
          }`}

        >
          {error?.message}
        </p>
      ) : null}
    </MyInputContainer>
  );
};

export default React.forwardRef<HTMLInputElement, IInputProps>(Input);
