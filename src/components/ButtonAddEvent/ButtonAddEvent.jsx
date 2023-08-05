import React from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import { Btn, StyledIcon } from "./ButtonAddEvent.styled";

function ButtonAddEvent() {
  const { isTablet } = useMatchMedia();
  return (
    <Btn to="/create">
      <StyledIcon color="#ffffff" />
      {isTablet && "Add new event"}
    </Btn>
  );
}

export default ButtonAddEvent;
