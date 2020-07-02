import React, { ReactElement } from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { useHistory } from 'react-router';
import { ChevronLeft } from 'react-feather';
// import Footer from 'ui/modules/Footer';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

export interface Props {
  HeaderBox?: ReactElement;
  SearchBox: ReactElement;
}
export const Guest: React.FC<Props> = ({ children, HeaderBox, SearchBox }) => {
  const history = useHistory();

  return (
    <Page>
      <SearchBar>
        <Icon onClick={() => history.goBack()}>
          <ChevronLeft size="20" />
        </Icon>
        {SearchBox}
        <Link to="/login">Log in</Link>
      </SearchBar>
      <Header>{HeaderBox}</Header>
      <Wrapper>{children}</Wrapper>
      {/* <Footer /> */}
    </Page>
  );
};

const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 40px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lighter};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.mediumdark};
    margin: 0 auto;
  }
`;

const Header = styled(Box)`
  ${media.lessThan('medium')`
    display: none;
  `}
`;

const SearchBar = styled(Box)`
a {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 8px;
  border-radius: 4px;
  text-decoration: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lighter};
  margin-right: 8px;
}
height: 75px;
line-height: 75px;
text-align: center;
background: ${props => props.theme.colors.appInverse}
border-bottom: ${props => props.theme.colors.border};
display: flex;
align-items: center;
input {
  width: 100%;
  font-size: 13px;
  border-radius: 4px;
  max-width: 500px;
  height: 40px;
  margin: 0;
  border: 0;
  background: ${props => props.theme.colors.app};
}
.ais-SearchBox {
  border: 0;
  height: auto;
  margin: 0;
  width: auto;
  margin: 0;
  margin-right: 8px;
  margin-left: 8px;
  flex:1;
}
${media.greaterThan('medium')`
    display: none;
  `}
`;

const Page = styled(Box)`
  height: 100vh;
  grid-template-rows: 50px auto;
  row-gap: 8px;
  display: grid;
`;

const Wrapper = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  height: calc(100vh - 66px);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  column-gap: 8px;
`;
