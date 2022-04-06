import React, { ReactElement } from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import { Burger, Menu } from 'ui/modules/Burger';
import { useHistory } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';
import Avatar from 'ui/elements/Avatar';
import { Image } from 'rebass';
import { logo_small_url } from 'mn-constants';

export interface Props {
  SidebarBox: ReactElement;
  HeaderBox: ReactElement;
  SearchBox: ReactElement;
  userImage: string;
  userLink: string;
  username: string;
  name: string;
  signOut(): () => void;
}
export const WithoutSidebar: React.FC<Props> = ({
  SidebarBox,
  HeaderBox,
  SearchBox,
  children,
  userImage,
  userLink,
  username,
  name,
  signOut
}) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  return (
    <Page>
      <SearchBar>
        <Icon onClick={() => history.goBack()}>
          <ChevronLeft size="20" />
        </Icon>
        {SearchBox}
      </SearchBar>
      <Header>{HeaderBox}</Header>
      <Wrapper>
        <CenteredWrapper>{children}</CenteredWrapper>
      </Wrapper>
      <Footer>
        mnn
        <FootWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu
            username={username}
            name={name}
            userImage={userImage}
            signOut={signOut}
            open={open}
            setOpen={setOpen}
            Side={SidebarBox}
          />
        </FootWrapper>
        <FootWrapper>
          <Logo>
            <Image src={logo_small_url} />
          </Logo>
        </FootWrapper>
        <FootWrapper>
          <Bavatar>
            <Avatar src={userImage} size="m" />
          </Bavatar>
        </FootWrapper>
      </Footer>
    </Page>
  );
};

const Logo = styled(Box)`
  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    margin-top: 15px;
  }
`;

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

const Bavatar = styled(Box)`
  div {
    max-width: 36px;
    height: 36px;
    min-width: 36px;
    margin: 0 auto;
    border-radius: 36px;
    margin-top: 15px;
  }
`;

const Header = styled(Box)`
  ${media.lessThan('medium')`
    display: none;
  `}
`;

const SearchBar = styled(Box)`
height: 75px;
line-height: 75px;
text-align: center;
background: ${props => props.theme.colors.appInverse}
border-bottom: ${props => props.theme.colors.border};
display: flex;
align-items: center;
input {
  width: 100%;
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
  margin-right: 24px;
  flex:1;
}
${media.greaterThan('medium')`
    display: none;
  `}
`;

const FootWrapper = styled(Box)`
  height: 75px;
  line-height: 75px;
  text-align: center;
  ${media.lessThan('medium')`
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `}
`;

const Footer = styled(Box)`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 500;
  background: ${props => props.theme.colors.appInverse}
  display: grid;
  border-top: ${props => props.theme.colors.border};
  grid-template-columns: 1fr 1fr 1fr;
  ${media.greaterThan('medium')`
    display: none;
  `}

`;

const Page = styled(Box)`
  height: 100vh;
  display: grid;
  ${media.greaterThan('large')`
    grid-template-rows: 50px auto;
    row-gap: 8px;
  `}
  ${media.lessThan('medium')`
    display: block;
  `}
`;

const Wrapper = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  display: grid;
  
  ${media.greaterThan('medium')`
  grid-template-rows: auto;
  grid-template-columns:  1fr;
  `}
  ${media.lessThan('medium')`
  // height: calc(100vh - 150px);
  overflow: overlay;
  grid-template-rows: auto;
  grid-template-columns:1fr;
  column-gap: 0px;
  margin: 0;
  margin: 0 8px;
  `}
  ${media.lessThan('small')`
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
    margin: 0 8px;
  `}
`;

const CenteredWrapper = styled(Box)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-top: 16px;
`;
