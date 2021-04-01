import React, { FCX } from 'react';

type ExternalLinkPropsType = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: FCX<ExternalLinkPropsType> = ({
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
