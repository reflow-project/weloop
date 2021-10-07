import * as React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

const Wrapper = styled(Box)`
  border-radius: 4px;
  line-height: 26px;
  padding: 8px 16px;
  min-height: 58px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
`;
const Alert: React.FC<{ variant: string }> = ({ variant, children }) => (
  <Wrapper variant={variant || 'info'}>{children}</Wrapper>
);

export default Alert;
