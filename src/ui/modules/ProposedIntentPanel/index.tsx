import { Trans } from '@lingui/macro';
import * as React from 'react';
import Select from 'ui/elements/Select';
import Button from 'ui/elements/Button';
import { clearFix } from 'polished';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Flex, Text, Box, Heading } from 'rebass/styled-components';
import { Actions, Container, Header } from 'ui/modules/Modal';
import { IProposedIntent } from '../Previews/ProposedIntent';
import { ActorComp } from '../ActivityPreview';
import { Actor } from '../ActivityPreview/types';
import { Clock } from 'react-feather';
import { theme } from 'ui/themes/default.theme';
import { format } from 'date-fns';

export type IProposedIntentHistoryItem = {
  date: string | null;
  action: string;
};

export type IntentActions = {
  id: string;
  label: string;
  note: string;
};

export type IProposedIntentPanel = IProposedIntent & {
  actionList?: IntentActions[];
  actor: Actor | null;
  createdAt: string | null;
  tags?: Array<string>;
  resourceQuantity: number;
  history?: Array<IProposedIntentHistoryItem>;
};

export const ProposedIntentPanel: React.FC<IProposedIntentPanel> = ({
  actor,
  actionList,
  createdAt,
  link,
  name,
  collectionName,
  tags,
  icon,
  resourceQuantity,
  history
}) => {
  console.log({
    actor,
    actionList,
    createdAt,
    link,
    name,
    collectionName,
    tags,
    icon,
    resourceQuantity,
    history
  });
  const [showHistory, toggleHistory] = React.useState(false);
  return (
    <Container>
      <Header>
        <Heading m={2}>{name}</Heading>
        <ActorComp
          actor={actor ?? undefined}
          createdAt={createdAt ?? ''}
          event={'Created a resource'}
          communityLink={link}
          communityName={collectionName}
        />
      </Header>
      <Hero>
        <HeroInfo>
          <Title fontWeight={'bold'}></Title>
        </HeroInfo>
      </Hero>

      <ContentWrap>
        <Box>
          {icon && icon !== '' && (
            <ImgWrwap>
              <img src={icon} alt={name} />
            </ImgWrwap>
          )}
          <ButtonWrap>
            <Button variant="outline">
              <Trans>Follow</Trans>
            </Button>
          </ButtonWrap>
          <ButtonWrap>
            <Button variant="outline">
              <Trans>Comment</Trans>
            </Button>
          </ButtonWrap>
          <ButtonWrap>
            <Button variant="outline">
              <Trans>Remaining</Trans> {resourceQuantity}
            </Button>
          </ButtonWrap>
        </Box>
        <Box>
          <div style={{ margin: '0 10px 12px 0' }}>
            <Select options={actionList} variant="primary" />
          </div>
          {/*{tags && (*/}
          {/*  <TagsList>*/}
          {/*    {tags.map(tag => (*/}
          {/*      <li>*/}
          {/*        <a href={tag}>#{tag}</a>*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*  </TagsList>*/}
          {/*)}*/}
          <Actions>
            <Button variant="outline" style={{ marginBottom: '10px' }}>
              <Trans>Transfer Action</Trans>
            </Button>
            <ButtonRow>
              <Button variant="outline" style={{ marginRight: '10px' }}>
                <Trans>Make a request</Trans>
              </Button>
              <Button
                style={{
                  background: showHistory ? theme.colors.darkest : 'transparent',
                  color: showHistory ? theme.colors.light : theme.colors.dark
                }}
                variant="outline"
                onClick={() => {
                  toggleHistory(!showHistory);
                }}
              >
                <span
                  style={{
                    height: '24px',
                    display: 'inline-block',
                    marginTop: '-12px',
                    verticalAlign: 'middle'
                  }}
                >
                  {history && history.length}
                </span>
                <Clock style={{ display: 'inline-block' }} />
              </Button>
            </ButtonRow>
            {showHistory && (
              <History>
                {history &&
                  history.map((item, i) => (
                    <li key={i}>
                      <span>{item.action}</span>
                      {item.date && <span>{format(new Date(item.date), 'do MMM yyyy')}</span>}
                    </li>
                  ))}
              </History>
            )}
          </Actions>
        </Box>
      </ContentWrap>
    </Container>
  );
};

const History = styled.ul`
  list-style: none;
  > li {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    background: ${props => props.theme.colors.darkest};
    border-radius: 3px;
    color: ${props => props.theme.colors.light};
    > span:last-child {
      margin-left: auto;
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin-bottom: 16px;
  > button {
    width: 100%;
  }
`;

const ContentWrap = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
`;

// const TagsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   list-style: none;
//   > li {
//     margin-right: 10px;
//   }
//   > li > a {
//     color: ${props => props.theme.colors.dark};
//     text-decoration: none;
//   }
// `

const ImgWrwap = styled.div`
  margin-bottom: 16px;
  > img {
    max-width: 100%;
  }
`;

const Title = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
`;

const HeroInfo = styled.div`
  flex: 1;
  margin-left: 16px;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    font-size: 24px !important;
    color: ${props => props.theme.colors.mediumdark};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    margin-top: 8px;
    color: ${props => props.theme.colors.mediumdark};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;

const Hero = styled(Flex)`
  width: 100%;
  position: relative;
  padding: 16px;
  ${media.lessThan('medium')`
  text-align: center;
  display: block;
`};
`;

export default ProposedIntentPanel;
