import * as React from 'react';
import {
  Settings,
  User,
  Power,
  Star,
  Code,
  Activity,
  Package,
  Plus,
  PlusSquare
} from 'react-feather';
import styled from '../../themes/styled';
import { Trans } from '@lingui/macro';
import { useHistory } from 'react-router';
import { Text, Flex } from 'rebass/styled-components';
import { Dropdown } from '../Dropdown';
import { useAnon } from '../../../fe/session/useAnon';

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

export interface Props {
  toggleDropdown: any;
  userLink: string;
}

export const DropdownSidebar: React.FC<Props> = ({ userLink, toggleDropdown }) => {
  const { push } = useHistory();
  const { logout } = useAnon();
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
            <a href={`${userLink}/inventory`}>
              <span>
                <Package size={16} color={'#333'} />
              </span>
              <Trans>My Inventory</Trans>
            </a>
          </Text>
        </Item>
        <Item>
          <Text variant="text">
            <a href={`${userLink}`}>
              <span>
                <Activity size={16} color={'#333'} />
              </span>
              <Trans>My Activity</Trans>
            </a>
          </Text>
        </Item>
        <Item>
          <Text variant="text">
            <a href={`${userLink}/starred`}>
              <span>
                <Star size={16} color={'#333'} />
              </span>
              <Trans>My favorites</Trans>
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
        <Item variant="link">
          <Text variant="text">
            <a href="/terms" target="_blank">
              <span>
                <Code size={16} />
              </span>
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
  createIntent: () => void;
  createResource: () => void;
};

export const CreateDropdown: React.FC<TCreateDropdown> = ({
  toggleDropdown,
  createIntent,
  createResource
}) => {
  return (
    <Dropdown orientation={'top'} close={toggleDropdown}>
      <List lined>
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
