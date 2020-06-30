import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'ui/themes/styled';

export interface SimpleLink {
  external: boolean;
  url: string;
}
export interface Props {
  link: SimpleLink;
}
export const SimpleLink: FC<Props> = ({ link, children }) => {
  return link.external ? (
    <a href={link.url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <SLink to={link.url}>{children}</SLink>
  );
};

const SLink = styled(Link)`
  text-decoration: none;
`;
