import React from 'react';
import styled from 'ui/themes/styled';
import { Input as InputStrap, Label } from 'reactstrap';
import { Button } from 'rebass/styled-components';
import media from 'styled-media-query';
import { i18nMark } from '@lingui/react';
import Input from '../../elements/Input';
import { FilterType } from 'HOC/pages/inventory/InventoryPage';
import { CollectionContainerForm } from '../CreateCollectionPanel/style';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import { ASC, DES, NAME, CREATE } from '../../../util/constants/pagination';

type Props = {
  isOpen: boolean;
  filterSet: FilterType;
  triggerOpen: (value: boolean) => void;
  onChange: (props: { [field: string]: string | boolean }, isClear?: boolean) => void;
  onClear: () => void;
};
const ArrowUp = require('react-feather/dist/icons/arrow-up').default;
const ArrowDown = require('react-feather/dist/icons/arrow-down').default;
const FilterIcon = require('react-feather/dist/icons/filter').default;
const ClearIcon = require('react-feather/dist/icons/x').default;

export const Filter: React.FC<Props> = ({ isOpen, filterSet, triggerOpen, onChange, onClear }) => {
  const handleSorting = async (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;

    onChange({ sort: buttonName, order: filterSet.order === DES ? ASC : DES });
  };

  return (
    <div>
      <FilterButton onClick={() => triggerOpen(!isOpen)} type="button">
        {isOpen ? <ClearIcon size="16" /> : <FilterIcon size="16" />}
      </FilterButton>
      {isOpen ? (
        <>
          <FilterWrapper>
            <div className="d-flex">
              <div className="item_col-6 align-center">
                <SortButton
                  onClick={handleSorting}
                  name={NAME}
                  className={filterSet.sort === NAME && 'active'}
                >
                  Sort by Name:
                  {filterSet.sort === NAME && filterSet.order === ASC ? (
                    <SortButtonInner>
                      {' '}
                      <ArrowUp size={16} /> {ASC}
                    </SortButtonInner>
                  ) : (
                    <SortButtonInner>
                      {' '}
                      <ArrowDown size={16} /> {DES}
                    </SortButtonInner>
                  )}
                </SortButton>
              </div>
              <div className="item_col-6 align-center">
                <SortButton
                  onClick={handleSorting}
                  name={CREATE}
                  className={filterSet.sort === CREATE && 'active'}
                >
                  Sort by Creation:
                  {filterSet.sort === CREATE && filterSet.order === ASC ? (
                    <SortButtonInner>
                      {' '}
                      <ArrowUp size={16} /> {ASC}
                    </SortButtonInner>
                  ) : (
                    <SortButtonInner>
                      {' '}
                      <ArrowDown size={16} /> {DES}
                    </SortButtonInner>
                  )}
                </SortButton>
              </div>
            </div>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                id="name"
                name="search"
                onChange={({ currentTarget }: any) => onChange({ search: currentTarget.value })}
                placeholder={i18nMark('Search query')}
                value={filterSet.search}
              />
            </FormGroup>
            <div className="d-flex">
              <div className="item_col-6">
                <FormGroupChek>
                  <LabelCustom>
                    <InputStrap
                      name="trace"
                      id="trace"
                      type="checkbox"
                      checked={filterSet.trace}
                      onChange={() => onChange({ trace: !filterSet.trace })}
                    />
                    <span>Resulted from a previous resource</span>
                  </LabelCustom>
                </FormGroupChek>
              </div>
              <div className="item_col-6">
                <FormGroupChek>
                  <LabelCustom>
                    <InputStrap
                      name="track"
                      id="track"
                      type="checkbox"
                      checked={filterSet.track}
                      onChange={() => onChange({ track: !filterSet.track })}
                    />
                    <span>Created further resources</span>
                  </LabelCustom>
                </FormGroupChek>
              </div>
            </div>
            <div className="d-flex">
              <ClearButton
                onClick={() => {
                  onClear();
                  triggerOpen(false);
                }}
                type="button"
              >
                <ClearIcon size={16} />
                Clear
              </ClearButton>
            </div>
          </FilterWrapper>
        </>
      ) : null}
    </div>
  );
};

const ClearButton = styled(Button)`
  margin-left: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  svg {
    margin-right: 10px;
  }
`;

const FilterWrapper = styled(CollectionContainerForm)`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #05244f;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SortButtonInner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  line-height: 40px;
  margin: 0 20px;
`;

const SortButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #999;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    color: #05244f;
  }
`;

const FormGroupChek = styled.span`
  text-transform: uppercase;
  color: #999;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0;

  & > div {
    display: flex;
    padding: 10px 0;

    input {
      flex-basis: 20px;
      height: 20px;
    }
  }
`;

const LabelCustom = styled(Label)`
  flex-basis: calc(100% - 30px);
  font-family: Arial, sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 20px;
  }
`;
const FilterButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #05244f;
  border-radius: 4px;
  color: #05244f;
  padding: 0;
  margin: 0;
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: -44px;

  ${media.lessThan('medium')`
     margin: 0 15px 0 0;
  `};
`;

// const FilterClearButton = styled(Button)`
//   background-color: transparent;
//   border: 1px solid transparent;
//   border-radius: 4px;
//   color: #05244f;
//   margin: 0;
//   height: 34px;
//   padding: 0 15px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//
//   svg {
//     margin-right: 6px;
//   }
// `;
