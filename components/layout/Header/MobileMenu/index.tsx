import React from 'react';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useOnClickOutside } from '@/hooks';

import styles from './index.module.scss';
export interface IMobileMenu {
  className?: string;
}
const MobileMenu: React.FC<IMobileMenu> = ({ className, children }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const handleOutsideClick = useCallback((event: MouseEvent) => {
    setOpen(false);
  }, []);
  const onRouteChangeStart = useCallback((event: Event) => {
    setOpen(false);
  }, []);
  useOnClickOutside(popupRef, handleOutsideClick);
  useEffect(() => {
    router.events.on('routeChangeStart', onRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
    };
  }, [onRouteChangeStart, router.events]);

  return (
    <span
      ref={popupRef}
      className={`flex flex-col justify-center ${className ? className : ''}`}
    >
      <div
        className={`flex flex-col w-full md:w-96 rounded-md shadow-md bg-white
          absolute right-0 top-0 transform
          transition duration-500 ease-in-out
          ${styles['mobile-menu']} overflow-y-scroll
          ${open ? 'translate-y-20 visible' : 'translate-y-0 invisible'}`}
      >
        {children}
      </div>
      <div className="relative py-3 sm:max-w-xl ml-auto">
        <nav>
          <button
            className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </nav>
      </div>
    </span>
  );
};

export default MobileMenu;
