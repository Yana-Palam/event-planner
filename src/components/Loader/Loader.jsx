import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="64"
      visible={true}
    />
  );
}

export default Loader;
