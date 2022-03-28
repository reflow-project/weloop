import * as React from 'react';
import { Dropdown } from '../../../ui/modules/Dropdown';
import { Plus, PlusSquare, Users, X } from 'react-feather';
import { Flex, Text } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import styled from '../../../ui/themes/styled';

type TCreateDropdown = {
  toggleDropdown: () => void;
  createCommunity: () => void;
  createIntent: () => void;
  createResource: () => void;
};

export const CreateDropdown: React.FC<TCreateDropdown> = ({
  toggleDropdown,
  createCommunity,
  createIntent,
  createResource
}) => {
  return (
    <Dropdown orientation={'top'} close={toggleDropdown}>
      <Action>
        <StyledClose onClick={toggleDropdown}>
          <X color="#05244F" />
        </StyledClose>
      </Action>
      <List lined>
        <Item variant="link" onClick={() => createCommunity()}>
          <span>
            <Users size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>New Community</Trans>
          </Text>
        </Item>
        <Item variant="link" onClick={() => createIntent()}>
          <span>
            <PlusSquare size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>Create a new intent</Trans>
          </Text>
        </Item>
        <Item variant="link" onClick={() => createResource()}>
          <span>
            <Plus size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>Create a new resource</Trans>
          </Text>
        </Item>
      </List>
    </Dropdown>
  );
};

const List = styled.div<{ lined?: boolean }>`
  padding: 8px;
`;

const Action = styled(Flex)`
  justify-content: flex-end;
  padding: 12px 20px;
`;
const Item = styled(Flex)`
  line-height: 50px;
  height: 50px;
  cursor: pointer;
  align-items: center;

  & span {
    display: inline-block;
    margin-right: 8px;

    .--rtl & {
      margin-right: 0px;
      margin-left: 8px;
    }

    & svg {
      vertical-align: sub;
    }
  }

  & a {
    color: inherit !important;
    text-decoration: none;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const StyledClose = styled.button`
  width: 18px;
  height: 18px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 0;
  &:focus {
    outline: none;
  }
`;
