import * as React from 'react';
import { Settings, User, Power, Users } from 'react-feather';
import styled from '../../themes/styled';
import { Trans } from '@lingui/macro';
import { useHistory } from 'react-router';
import { Text, Flex } from 'rebass/styled-components';
import { Dropdown } from '../Dropdown';

const List = styled.div<{ lined?: boolean }>`
  padding: 8px;
  border-bottom: ${props => (props.lined ? '1px solid #dadada' : null)};
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

const ItemButton = styled(Item)`
  border: 1px solid ${props => props.theme.colors.medium};
  border-radius: 4px;
  height: 34px;
  &:hover {
    background: ${props => props.theme.colors.light};
  }
  div {
    font-size: 12px;
    letter-spacing: 0;
  }
`;

export interface Props {
  logout(): void;
  toggleDropdown: any;
  userLink: string;
  isAdmin: boolean;
}

export const DropdownSidebar: React.FC<Props> = ({ logout, userLink, toggleDropdown, isAdmin }) => {
  const { push } = useHistory();
  return (
    <Dropdown orientation={'top'} close={toggleDropdown}>
      <List lined>
        <Item variant="link" onClick={() => push(userLink)}>
          <span>
            <User size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>My Profile</Trans>
          </Text>
        </Item>
        <Item>
          <Text variant="text">
            <a href="/communities/user">
              <Trans>My Communities (errors)</Trans>
            </a>
          </Text>
        </Item>
        <Item>
          <Text variant="text">
            <a href="/comments">
              <Trans>My comments (no page)</Trans>
            </a>
          </Text>
        </Item>
        <Item>
          <Text variant="text">
            <a href="/favorites">
              <Trans>My favorites (no page)</Trans>
            </a>
          </Text>
        </Item>
      </List>
      <List>
        <Item variant="link" onClick={() => push('/settings')}>
          <span>
            <Settings size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>Settings</Trans>
          </Text>
        </Item>
        {isAdmin && (
          <ItemButton variant="link" onClick={() => push('/settings/instance')}>
            <Text variant="text" sx={{ flex: 1, textAlign: 'center' }}>
              <Trans>Admin dashboard</Trans>
            </Text>
          </ItemButton>
        )}
        <Item variant="link">
          <Text variant="text">
            <a href="/terms" target="_blank">
              <Trans>Code of Conduct</Trans>
            </a>
          </Text>
        </Item>
        <Item variant="link" onClick={logout}>
          <span>
            <Power size={16} strokeWidth={1} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>Sign out</Trans>
          </Text>
        </Item>
      </List>
    </Dropdown>
  );
};

type TCreateDropdown = {
  toggleDropdown: () => void;
  createCommunity: any;
};

export const CreateDropdown: React.FC<TCreateDropdown> = ({ toggleDropdown, createCommunity }) => {
  return (
    <Dropdown orientation={'top'} close={toggleDropdown}>
      <List lined>
        <Item variant="link" onClick={() => createCommunity()}>
          <span>
            <Users size={16} color={'#333'} />
          </span>
          <Text variant="text">
            <Trans>New Community</Trans>
          </Text>
        </Item>
        <Item variant="link">
          <Text variant="text">
            <Trans>Create a new collection</Trans>
          </Text>
        </Item>
        <Item variant="link">
          <Text variant="text">
            <Trans>Create a new resource</Trans>
          </Text>
        </Item>
        <Item variant="link">
          <Text variant="text">
            <Trans>Create a new request</Trans>
          </Text>
        </Item>
      </List>
    </Dropdown>
  );
};
