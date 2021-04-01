import React, { FC, useContext, useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { NavigationContext } from '@src/store';
import { Fade } from '@material-ui/core';
import * as styles from '@src/layouts/Navigation/mobileNavigation.module.css';

type MobileNavigationPropsType = {
  children?: never;
};

export const MobileNavigation: FC<MobileNavigationPropsType> = () => {
  const { state, dispatch } = useContext(NavigationContext);
  const navElement = useRef<HTMLElement | null>(null);

  const handleCloseClick = () => {
    dispatch({ type: 'update', payload: false });
  };

  (() => {
    if (typeof window === 'undefined') return;
    if (!(navElement.current instanceof HTMLElement)) return;
    if (state.open) {
      document.documentElement.style.overflow = 'hidden';
      disableBodyScroll(navElement.current);
    } else {
      document.documentElement.style.overflow = '';
      enableBodyScroll(navElement.current);
    }
  })();

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = '';
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <>
      <Fade in={state.open} timeout={300}>
        <nav
          ref={navElement}
          className="sm:hidden fixed top-0 inset-x-0 overflow-y-auto z-40"
          id="Navigation"
          aria-hidden={!state.open}
        >
          <div className="bg-primary-black text-white wrapper-px pt-11 pb-12">
            なび
          </div>
        </nav>
      </Fade>
      <Fade in={state.open} timeout={300}>
        <div
          onClick={handleCloseClick}
          className={`sm:hidden ${styles.overlay}`}
          aria-hidden={!state.open}
        />
      </Fade>
    </>
  );
};
