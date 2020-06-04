import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { ellipsis } from 'polished';
import { X } from 'react-feather';
const PlaceholderImg = require('ui/Icons/collectionPlaceholder.png');

export interface CollectionBase {
  id: string;
  name: string;
  icon: string;
}

interface CollectionProps {
  collection: CollectionBase;
  isAdmin: boolean;
  isEditing: boolean;
  remove(): unknown;
}
const CollectionSmall: React.FC<CollectionProps> = ({
  collection,
  isAdmin,
  isEditing,
  remove
}) => {
  return (
    <Wrapper py={1} mb={2} mr={3}>
      {isAdmin && isEditing ? (
        <Remove onClick={remove}>
          <X color="#fff" size={16} />
        </Remove>
      ) : null}
      <Link to={`/collections/${collection.id}`}>
        <Img
          style={{
            backgroundImage: `url(${collection.icon || PlaceholderImg})`
          }}
        />
        <Infos>
          <Title fontSize={1} my={2} fontWeight={600}>
            {collection.name.length > 80
              ? collection.name.replace(/^(.{76}[^\s]*).*/, '$1...')
              : collection.name}
          </Title>
        </Infos>
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
`;
const Infos = styled.div``;
const Title = styled(Text)`
  color: ${props => props.theme.colors.dark};
  ${ellipsis('170px')};
  font-size: 14px;
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
export default CollectionSmall;
