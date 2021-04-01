import { createContext } from 'react';
import {
  NavigationContextAction,
  NavigationType,
} from '@src/store/navigation/type';

export const NavigationContext = createContext(
  {} as {
    state: NavigationType;
    dispatch: (action: NavigationContextAction) => void;
  }
);
