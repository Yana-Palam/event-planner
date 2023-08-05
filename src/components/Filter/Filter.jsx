import React, { useState, useRef } from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import useOutsideClick from "../../hooks/useOutsideHook";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { Wrap, WrapIcon, List, Item } from "./Filter.styled";
import { Filters3 } from "react-swm-icon-pack";
import { categories } from "../../helpers/variables";
import { selectFilterValue } from "../../redux/filter/filterSelectors";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(filterValue);

  const filterRef = useRef(null);
  const { isMobile, isTablet } = useMatchMedia();

  const outsideClickHandler = () => {
    setIsOpen(false);
  };

  useOutsideClick(filterRef, outsideClickHandler);

  const onSelect = (value) => {
    dispatch(setFilterValue(value));
    setFilter(value);
  };

  return (
    <Wrap
      $open={isOpen}
      $filter={filter}
      type="button"
      ref={filterRef}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <WrapIcon>
        {isMobile && (
          <>
            {isOpen && <>{filter ? filter : "Category"}</>}
            {filter || isOpen ? (
              <Filters3 color="#7B61FF" />
            ) : (
              <Filters3 color="#3F3F3F" />
            )}
          </>
        )}
        {isTablet && (
          <>
            {filter ? filter : "Category"}
            {isOpen || filter ? (
              <Filters3 color="#7B61FF" />
            ) : (
              <Filters3 color="#3F3F3F" />
            )}
          </>
        )}
      </WrapIcon>

      {isOpen && (
        <List>
          {categories.map(({ value, valueName }, index) => {
            const select = filter === value;
            return (
              <Item
                $select={select}
                onClick={() => {
                  onSelect(value);
                }}
                key={index}
              >
                <p> {valueName}</p>
              </Item>
            );
          })}
        </List>
      )}
    </Wrap>
  );
}

export default Filter;
