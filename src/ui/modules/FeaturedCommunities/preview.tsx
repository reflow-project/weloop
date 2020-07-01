import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { ellipsis } from 'polished';
import { X } from 'react-feather';
const PlaceholderImg = require('ui/Icons/collectionPlaceholder.png');

export interface CommunityBase {
  link: string;
  name: string;
  icon: string;
}

export interface CommunityProps {
  community: CommunityBase;
  canEdit: boolean;
  isEditing: boolean;
  remove(): unknown;
}
const CommunitySmall: React.FC<CommunityProps> = ({ community, canEdit, isEditing, remove }) => {
  return (
    <Wrapper py={1} mb={2} mr={3}>
      {canEdit && isEditing ? (
        <Remove onClick={remove}>
          <X color="#fff" size={16} />
        </Remove>
      ) : null}
      <Link to={community.link}>
        <Img
          style={{
            backgroundImage: `url("${community.icon || PlaceholderImg}")`
          }}
        >
          <Infos>
            <Title fontSize={1} my={2} fontWeight={600}>
              {community.name.length > 80
                ? community.name.replace(/^(.{76}[^\s]*).*/, '$1...')
                : community.name}
            </Title>
          </Infos>
        </Img>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  cursor: pointer;
  position: relative;
  max-width: 200px;
  max-height: 270px;
  border-radius: 4px;
  padding-top: 10px;
  ${media.lessThan('medium')`
  display: block;
`} & a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
`;

const Img = styled.div`
  //   width: 100%;
  height: auto;
  padding: 50%;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
const Infos = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  padding: 0 8px;
  background: rgba(0, 0, 0, 0.8);
`;

const Title = styled(Text)`
  color: rgba(250, 250, 250);
  ${ellipsis('170px')};
  font-size: 14px;
  margin: 0;
  line-height: 40px;
`;

const Remove = styled(Box)`
  position: absolute;
  right: -9px;
  top: 0px;
  cursor: pointer;
  background: ${props => props.theme.colors.medium};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999999999;
`;
export default CommunitySmall;
