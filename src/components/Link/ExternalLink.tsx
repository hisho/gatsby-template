import React, { VFC } from 'react';
import { CommonPropsType } from '@src/configs';

type ExternalLinkPropsType = Pick<CommonPropsType, 'className'> & {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: VFC<ExternalLinkPropsType> = ({
  href,
  className = '',
  children,
}) => {
  return (
    <a href={href} className={className} rel="noopener" target="_blank">
      {children}
    </a>
  );
};
