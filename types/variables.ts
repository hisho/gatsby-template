export interface variablesInterface {
  breakpoints: {
    [key: string]: number;
  };
  colors: {
    [key: string]: {
      [key: string]: string;
    };
  };
  fontFamily: {
    [key: string]: string[];
  };
  zIndex: {
    [key: string]: number;
  };
}
