import React from "react";
import StyledButton from "./styles";

const Button = ({ handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <img src="icon-dice.svg" alt="Dice" />
    </StyledButton>
  );
};

export default Button;
