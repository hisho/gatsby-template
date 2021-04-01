import { Reducer } from 'react';
import {
  NavigationContextAction,
  NavigationType,
} from '@src/store/navigation/type';

export const NavigationContextReducer: Reducer<
  NavigationType,
  NavigationContextAction
> = (prevState, { type, payload = true }) => {
  switch (type) {
    case 'toggle':
      return { ...prevState, open: !prevState.open };
    case 'update':
      return { ...prevState, open: payload };
    default:
      return prevState;
  }
};
