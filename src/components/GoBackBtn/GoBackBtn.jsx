import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Btn, StyledIcon } from "./GoBackBtn.styled";

function GoBackBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location?.state?.from ?? "/");
  };
  return (
    <Btn type="button" onClick={handleClick}>
      <StyledIcon color="#7B61FF" />
      Back
    </Btn>
  );
}

export default GoBackBtn;
