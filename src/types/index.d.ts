// please refer to this article: https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148

import React from 'react';
import { PageProps } from 'gatsby';

declare module 'react' {
  //gatsbyのpage propsを予めReactのVFCに食わせた型
  type PFC = React.VoidFunctionComponent<PageProps>;
}
