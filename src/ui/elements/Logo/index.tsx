import React, { FC } from 'react';
import styled from 'ui/themes/styled';
import { INSTANCE_TAGLINE } from 'mn-constants'; // + instance_bg_img
import { GRAPHQL_ENDPOINT } from 'mn-constants';
import { Link } from 'react-router-dom';
import { LocaleContext } from 'context/global/localizationCtx';
import { logo_large_url } from 'mn-constants';
export interface Props {
  isHome?: boolean;
}

const LogoContainer: FC<Props> = props => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <Header>
      {props.isHome ? (
        <Logo />
      ) : (
        <Link to="/">
          <Logo />
        </Link>
      )}
      <Tagline>{i18n._(INSTANCE_TAGLINE)}</Tagline>
      <Tagline>{GRAPHQL_ENDPOINT}</Tagline>
    </Header>
  );
};

export default LogoContainer;

const Header = styled.div`
  grid-area: header;
  text-align: center;
`;

const Logo = styled.div`
  background: url("${logo_large_url}");
  width: 300px;
  display: inline-block;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Tagline = styled.h5`
  margin-top: 8px;
  margin-bottom: 40px;
  color: #000000a1;
  font-weight: 500;
`;
