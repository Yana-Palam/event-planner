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

function Header() {
  const { isTablet, isMobile } = useMatchMedia();
  return (
    <HeaderWrap>
      <Container>
        {isMobile && (
          <>
            <LogoWrap>
              <Logo to="/">Event Planner</Logo>
              <div>uk</div>
            </LogoWrap>

            <Search />
          </>
        )}
        {isTablet && (
          <HeaderWrapper>
            <Logo to={"/"}>Event Planner</Logo>
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
