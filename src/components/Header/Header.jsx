import React from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import Search from "../Search/Search";
import Container from "../Container/Container.styled";
import Language from "../Language/Language";
import {
  HeaderWrap,
  Logo,
  LogoWrap,
  HeaderWrapper,
  HeaderTabWrapper,
} from "./Header.styled";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { setSortValue } from "../../redux/sort/sortSlice";
import { setSearchValue } from "../../redux/search/searchSlice";

function Header() {
  const { isTablet, isMobile } = useMatchMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const onClickLogo = () => {
    if (location.pathname === "/") {
      dispatch(setFilterValue(""));
      dispatch(setSearchValue(""));
      dispatch(setSortValue({ name: "", property: "", order: "" }));
      window.location.reload();
    }
  };
  return (
    <HeaderWrap>
      <Container>
        {isMobile && (
          <>
            <LogoWrap>
              <Logo to="/" onClick={onClickLogo}>
                Event Planner
              </Logo>
              <div>uk</div>
            </LogoWrap>

            <Search />
          </>
        )}
        {isTablet && (
          <HeaderWrapper>
            <Logo to="/" onClick={onClickLogo}>
              Event Planner
            </Logo>
            <HeaderTabWrapper>
              <Search />
              <Language />
            </HeaderTabWrapper>
          </HeaderWrapper>
        )}
      </Container>
    </HeaderWrap>
  );
}

export default Header;
