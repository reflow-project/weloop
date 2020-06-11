import * as React from 'react';
import { Settings, User, Power } from 'react-feather';
import styled from '../../themes/styled';
import { Trans } from '@lingui/macro';
import { useHistory } from 'react-router';
import { Text } from 'rebass/styled-components';
import { Dropdown } from '../Dropdown';
import { related_urls } from './../../../mn-constants';

const List = styled.div<{ lined?: boolean }>`
  padding: 8px;
  border-bottom: ${props => (props.lined ? '1px solid #dadada' : null)};
`;
const Item = styled(Text)`
  line-height: 50px;
  height: 50px;
  cursor: pointer;
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
  logout(): void;
  setOpenDropdown: any;
  userId: string;
}

export const DropdownSidebar: React.FC<Props> = ({ logout, userId, setOpenDropdown }) => {
  const { push } = useHistory();
  return (
    <Dropdown orientation={'top'} cb={setOpenDropdown}>
      <List lined>
        <Item variant="link" onClick={() => push(`/user/${userId}`)}>
          <span>
            <User size={18} color={'#333'} />
          </span>
          <Trans>Profile</Trans>
        </Item>
        <Item variant="link" onClick={() => push('/settings')}>
          <span>
            <Settings size={18} color={'#333'} />
          </span>
          <Trans>Settings</Trans>
        </Item>
      </List>
      <List lined>
        <Item variant="link">
          <a href="/terms">
            <Trans>Code of Conduct &amp; Privacy Policy</Trans>
          </a>
        </Item>

        <Item variant="link">
          <a href={related_urls.feedback} target="blank">
            <Trans>Feedback &amp; Suggestions</Trans>
          </a>
        </Item>

        <Text
          style={{
            fontWeight: 600,
            fontSize: '15px',
            padding: '8px',
            paddingLeft: '4px',
            color: '#3c3c3c'
          }}
        >
          v0.10 beta
        </Text>
      </List>
      <List>
        <Item variant="link" onClick={logout}>
          <span>
            <Power width={18} height={18} strokeWidth={1} color={'#333'} />
          </span>
          <Trans>Sign out</Trans>
        </Item>
      </List>
    </Dropdown>
  );
};
