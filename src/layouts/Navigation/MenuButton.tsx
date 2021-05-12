import React, { VFC, useContext } from 'react';
import * as styles from '@src/layouts/Navigation/menu.module.css';
import { NavigationContext } from '@src/store';

export const MenuButton: VFC = () => {
  const { state, dispatch } = useContext(NavigationContext);

  const handleOnClick = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <button
      className={styles.menu}
      aria-controls="Navigation"
      aria-expanded={state.open}
      type="button"
      onClick={handleOnClick}
    >
      <span className={styles.top} aria-hidden="true" />
      <span className={styles.middle} aria-hidden="true" />
      <span className={styles.bottom} aria-hidden="true" />
      <span className="sr-only">メニューを開く</span>
    </button>
  );
};
