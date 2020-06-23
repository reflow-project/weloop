import { Trans } from '@lingui/macro';
import React, { SFC, useRef, ReactElement } from 'react';
import Slider from 'react-slick';
import { Box, Flex } from 'rebass';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from 'ui/elements/Button';
import { ChevronLeft, Right } from 'ui/Icons';
import styled from 'ui/themes/styled';

export const Title = styled(Flex)`
  font-size: 15px;
  font-weight: 700;
  padding: 8px;
  border-bottom: ${props => props.theme.colors.border};
  margin: 0;
  color: ${props => props.theme.colors.mediumdark};
  & h5 {
    margin: 0;
    color: ${props => props.theme.colors.mediumdark};
    display: inline-block;
    flex: 1;
    padding: 0;
    font-size: 12px;
    text-transform: uppercase;
    height: 30px;
    font-weight: 500;
    line-height: 30px;
  }
`;

export const RightContext = styled(Flex)`
  & span {
    cursor: pointer;
    display: inline-block;
    height: 30px;
    & svg {
      color: ${props => props.theme.colors.mediumdark} !important;
      vertical-align: middle;
      height: 30px;
    }
    &:hover {
      & svg {
        color: ${props => props.theme.colors.mediumdark} !important;
      }
    }
  }
  float: right;
`;

const ActionContainer = styled(Flex)`
  justify-content: right;
  align-items: center;
`;

const ActionItem = styled(Flex)`
  display: inline-flex;
  color: ${props => props.theme.colors.medium};
  cursor: pointer;
  padding-right: 10px;
  button {
    height: 30px;
    line-height: 10px;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.primary};
    }
  }
`;

export interface FeaturedCommunitiesData {
  canEdit: boolean;
  featuredCommunities: ReactElement[];
  toggleEdit(): any;
  isEditing: boolean;
}

export const FeaturedCommunities: SFC<FeaturedCommunitiesData> = props => {
  const sliderRef = useRef<Slider>();

  return (
    <>
      <Title>
        <h5>
          <Trans>Featured communities</Trans>{' '}
        </h5>
        <RightContext>
          {props.canEdit ? (
            <ActionContainer>
              <ActionItem onClick={props.toggleEdit}>
                {!props.isEditing ? (
                  <Button variant={'outline'}>
                    <Trans>Edit</Trans>
                  </Button>
                ) : (
                  <Button variant={'outline'}>
                    <Trans>Done</Trans>
                  </Button>
                )}
              </ActionItem>
            </ActionContainer>
          ) : null}
          <span onClick={sliderRef.current && sliderRef.current.slickPrev}>
            <ChevronLeft width={26} height={26} strokeWidth={1} color={'#333'} />
          </span>
          <span onClick={sliderRef.current && sliderRef.current.slickNext}>
            <Right width={26} height={26} strokeWidth={1} color={'#333'} />
          </span>
        </RightContext>
      </Title>
      <Box px={2}>
        <Slider
          ref={c => (sliderRef.current = c || undefined)}
          {...sliderSettings(props.featuredCommunities.length)}
        >
          {props.featuredCommunities}
        </Slider>
      </Box>
    </>
  );
};

export default FeaturedCommunities;

const sliderSettings = slidesToShow => ({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: slidesToShow > 3 ? 3 : slidesToShow,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: slidesToShow > 3 ? 3 : slidesToShow,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: slidesToShow > 2 ? 2 : slidesToShow,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
