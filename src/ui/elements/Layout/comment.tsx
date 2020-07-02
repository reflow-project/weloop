import styled from 'ui/themes/styled';
import { Text } from 'rebass/styled-components';
import 'github-markdown-css/github-markdown.css';
import DOMPurify from 'dompurify';
import React from 'react';
import { typography } from 'mn-constants';

const Comment = styled(Text)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-size: ${typography.size.s2} !important;
  letter-spacing: 0 !important;
  font-family: ${props => props.theme.fontFamily} !important;
  &.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 568px;
  }
`;

export interface Props {
  content: string;
}

export const MDComment: React.SFC<Props> = ({ content }) => (
  <Comment
    className={'markdown-body'}
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    variant="text"
  />
);
