import React from "react";
import { Btn } from "./ClearButton.styled";
import { CrossSmall } from "react-swm-icon-pack";

function ClearButton({ onClick }) {
  return (
    <Btn onClick={onClick} type="button">
      <CrossSmall color="#7B61FF" />
    </Btn>
  );
}

export default ClearButton;
