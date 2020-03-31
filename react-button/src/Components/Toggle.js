import React from "react";
import { func, string } from "prop-types";
import { ToggleContainer } from "./Toggle.Style";
import { ReactComponent as Sun } from "./SVGfiles/sunny.svg";
import { ReactComponent as Night } from "./SVGfiles/night.svg";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      <Sun />
      <Night />
    </ToggleContainer>
  );
};

Toggle.prototype = {
  theme: string.isRequired,
  toogleTheme: func.isRequired
};

export default Toggle;
