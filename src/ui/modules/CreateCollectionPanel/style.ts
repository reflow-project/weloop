import { clearFix } from 'polished';
import { Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from '../../themes/styled';
import { ContainerForm } from '../Modal';

export const CollectionContainerForm = styled(ContainerForm)`
  position: relative;
  padding-top: 0;

  input {
    background: #fbfbfb;
    border: 0;
    font-weight: 700;
  }

  textarea {
    padding-top: 6px;
    background: #fbfbfb;
    border-radius: 2px;
    border: 0;
    height: 120px;
    resize: none;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    ${media.lessThan('medium')`    
            flex-direction: column;
        `};

    .item_col-6 {
      flex-basis: calc(50% - 5px);
    }

    .align-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item_photo {
      margin-bottom: 10px;
      flex-basis: 140px;
      height: 140px;

      .bopsip {
        height: 140px !important;
      }

      ${media.lessThan('medium')`    
          flex-basis: 100%;
          order: 2
        `};
    }
    .item_info {
      margin-bottom: 10px;
      flex-basis: calc(100% - 160px);

      ${media.lessThan('medium')`    
          flex-basis: 100%;
          order: 1
        `};
    }
  }
  .d-flex-image.d-flex {
    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: unset;
    `};
  }
  .dropzone {
    ${media.lessThan('medium')`
      min-Height: unset;
      height: auto;
    `};
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  ${media.lessThan('medium')`
      display: block;
    `};
`;
export const FlexBetweenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: calc((100% - 20px) / 2);
  }
`;

export const HeroInfo = styled.div`
  flex: 1;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    color: ${props => props.theme.colors.mediumdark};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 8px;
    color: ${props => props.theme.colors.mediumdark};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;

export const Hero = styled(Flex)`
  width: 100%;
  position: relative;
  padding: 16px;
  ${media.lessThan('medium')`
  text-align: center;
  display: block;
`};
`;

export const Title = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
`;

export const Description = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
`;
