import * as React from 'react';
import {
  Star,
  ExternalLink,
  Paperclip,
  MoreHorizontal,
  Flag,
  Share
} from 'react-feather';
// import { FileText, ExternalLink, Star } from 'react-feather';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { ellipsis } from 'polished';
import { FormikHook } from 'ui/@types/types';
import { Trans } from '@lingui/react';
// import { ellipsis } from 'polished';
export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import Modal from 'ui/modules/Modal';
import { typography } from 'mn-constants';
import { Search } from './Collection';
// import {Link} from 'react-router-dom'

// const LicenseIcon0 = require('./cc-zero.png');
// const LicenseIcon1 = require('./by.png');
// const LicenseIcon2 = require('./by-sa.png');

export interface Props {
  icon: string;
  name: string;
  summary: string;
  link: string;
  like: null | LikeActions;
  license: string | null;
  acceptedLicenses?: string[];
  isFile: boolean;
  type?: string;
  isFlagged: boolean;
  FlagModal: null | React.ComponentType<{ done(): unknown }>;
  MoodlePanel: null | React.ComponentType<{ done(): unknown }>;
  hideActions?: boolean;
  isSearch?: boolean;
  // sendToMoodle:null|(()=>unknown)
}

export const Resource: React.FC<Props> = ({
  icon,
  name,
  summary,
  link,
  like,
  isFile,
  license,
  acceptedLicenses,
  type,
  isFlagged,
  FlagModal,
  MoodlePanel,
  isSearch,
  // sendToMoodle,
  hideActions
}) => {
  const [isOpen, onOpen] = React.useState(false);
  const [isOpenFlagModal, setOpenFlagModal] = React.useState(false);
  const [isOpenMoodleModal, setOpenMoodleModal] = React.useState(false);

  return (
    <Bordered>
      {isSearch && (
        <Search>
          <Trans>Resource</Trans>
        </Search>
      )}
      <Wrapper p={2}>
        {icon != '' ? (
          <Avatar size="m" src={icon} />
        ) : isFile ? (
          <ResourceThumb>
            <IconWrapper>
              <Paperclip strokeWidth="2" size={64} />
            </IconWrapper>
          </ResourceThumb>
        ) : (
          <ResourceThumb>
            <IconWrapper>
              <ExternalLink strokeWidth="2" size={64} />
            </IconWrapper>
          </ResourceThumb>
        )}
        <Infos flex={1} ml={3}>
          <TitleLink href={link} target="_blank">
            {/* <Badge mt={1}>Video</Badge> */}
            <Title flex="1">
              {isFile ? (
                <Paperclip strokeWidth="1" size={18} />
              ) : (
                <ExternalLink strokeWidth="1" size={18} />
              )}
              {name}
            </Title>
          </TitleLink>
          {isFile ? (
            <>
              <TypeItem mt={1}>{license}</TypeItem>
            </>
          ) : (
            <>
              <LinkResource>
                <a href={link} target="_blank">
                  <TextLink flex={1}>{link}</TextLink>
                </a>
              </LinkResource>
            </>
          )}
          <Summary variant="text" mt={2}>
            {summary}
          </Summary>
        </Infos>
      </Wrapper>
      <Meta>
        <Collection ml={2}></Collection>
        {hideActions ? null : (
          <Actions>
            {like && (
              <ActionItem
                bordered
                liked={like.iLikeIt ? true : false}
                onClick={like.toggleLikeFormik.submitForm}
              >
                <ActionIcon>
                  <Star strokeWidth="1" size="18" />
                </ActionIcon>
                <ActionText
                  variant={'text'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  {like.totalLikes}
                </ActionText>
              </ActionItem>
            )}
            <MoreItem
              onClick={() => onOpen(true)}
              sx={{ position: 'relative' }}
            >
              <ActionIcon>
                <MoreHorizontal className="hover" size={18} />
              </ActionIcon>
              {isOpen && (
                <Right>
                  <Dropdown orientation="bottom" cb={onOpen}>
                    {FlagModal && (
                      <DropdownItem onClick={() => setOpenFlagModal(true)}>
                        <Flag size={18} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!isFlagged ? (
                            <Trans>Flag this resource</Trans>
                          ) : (
                            <Trans>Unflag this resource</Trans>
                          )}
                        </Text>
                      </DropdownItem>
                    )}
                    <DropdownItem
                      onClick={() => {
                        /* sendToMoodle?sendToMoodle(): */ setOpenMoodleModal(
                          true
                        );
                      }}
                    >
                      <Share size={18} />
                      <Text sx={{ flex: 1 }} ml={2}>
                        <Trans>Send to Moodle</Trans>
                      </Text>
                    </DropdownItem>
                  </Dropdown>
                </Right>
              )}
            </MoreItem>
          </Actions>
        )}
      </Meta>

      {FlagModal && isOpenFlagModal && (
        <Modal closeModal={() => setOpenFlagModal(false)}>
          <FlagModal done={() => setOpenFlagModal(false)} />
        </Modal>
      )}
      {MoodlePanel && isOpenMoodleModal && (
        <Modal closeModal={() => setOpenMoodleModal(false)}>
          <MoodlePanel done={() => setOpenMoodleModal(false)} />
        </Modal>
      )}
    </Bordered>
  );
};

const Right = styled(Box)`
  .dropdown {
    right: 0;
    left: auto;
  }
`;

const Meta = styled(Flex)`
  align-items: center;
`;

const Collection = styled(Flex)`
  flex: 1;
`;

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
  word-break: break-word;
`;
const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
  color: ${props => props.theme.colors.darker};
`;
const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const LinkResource = styled(Box)`
  align-items: center;
  color: ${props => props.theme.colors.mediumdark};
  cursor: pointer;
  font-size: ${typography.size.s2};
  text-decoration: none;
  margin-top: 4px;

  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
    text-decoration: none;
  }
`;

const Actions = styled(Flex)`
  justify-content: start;
  padding: 8px;
  padding-top: 0;
`;

const MoreItem = styled(Flex)`
  align-items: center;
  cursor: pointer;
  margin-right: 8px;
  margin-left: 8px;
`;

const ActionItem = styled(Flex)<{ liked?: boolean; bordered?: boolean }>`
  align-items: center;
  color: ${props =>
    props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  div {
    color: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  cursor: pointer;
  background: ${props =>
    props.liked ? props.theme.colors.primary : 'transparent'};
  border: 1px solid
    ${props => (props.liked ? props.theme.colors.primary : 'transparent')};
  border: 1px solid
    ${props => (props.bordered ? props.theme.colors.primary : 'transparent')};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: none;
    fill: ${props =>
      props.liked ? props.theme.colors.lightest : props.theme.colors.primary};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg {
      fill: ${props =>
        props.liked
          ? props.theme.colors.lightest
          : props.theme.colors.lightest};
    }
    div {
      color: ${props =>
        props.liked
          ? props.theme.colors.lightest
          : props.theme.colors.lightest};
    }
    color: ${props =>
      props.liked ? props.theme.colors.lightest : props.theme.colors.lightest};
    background: ${props =>
      props.liked ? props.theme.colors.mediumdark : props.theme.colors.primary};
    border-color: ${props =>
      props.liked ? props.theme.colors.mediumdark : props.theme.colors.primary};
  }
`;

const TypeItem = styled(Text)`
  border-radius: 5px;
  color: ${props => props.theme.colors.dark};
  text-transform: uppercase;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: default;
  margin-right: 4px;
  display: inline-flex;
  border: 1px solid ${props => props.theme.colors.secondary};
`;

const ResourceThumb = styled(Box)<{ bg?: string }>`
  border-radius: 4px;
  min-width: 140px;
  height: 140px;
  display: flex;
  align-items: center;

  vertical-align: text-center;
  background-color: ${props => props.theme.colors.light};
`;

const IconWrapper = styled.div`
  margin: auto;
  & svg {
    stroke: ${props => props.theme.colors.medium};
  }
`;

// const ResourceType = styled(Text)`
//   border-radius: 5px;
//   color: ${props => props.theme.colors.primary};
//   text-transform: uppercase;
//   border-radius: 10px;
//   border: 1px solid;
//   padding: 0px 6px;
//   font-size: 11px;
//   cursor: default;
//   margin-right: 6px;
//   display: inline-flex;
// `;

const TextLink = styled(Text)`
  ${ellipsis('380px')};
  font-size: 13px;
  color: ${props => props.theme.colors.mediumdark};
`;

const Bordered = styled(Box)`
  border: ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #0000001f;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.darker};

  svg {
    margin: 0px;
    margin-right: 5px;
    display: inline-flex;
    position: relative;
    top: 2px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled(Flex)`
  position: relative;
  text-decoration: none;
  background: ${props => props.theme.colors.appInverse};
  margin-top: 0;
  border-radius: 6px;
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  font-size: 18px;
  text-decoration: none;
`;
