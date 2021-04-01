export type NavigationType = {
  open: boolean;
};

export type NavigationContextAction = {
  type: 'toggle' | 'update';
  payload?: boolean;
};
