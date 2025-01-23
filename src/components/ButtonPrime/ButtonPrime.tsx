import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import "./ButtonPrime.css";

export interface ButtonPrimeProps {
  label: string;
  onClick?: () => void;
  isRound?: boolean;
  isDisabled: boolean;
}

const ButtonPrime: React.FC<ButtonPrimeProps> = ({
  label,
  onClick,
  isRound = false,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      label={label}
      rounded={isRound}
      disabled={isDisabled}
      {...rest}
    />
  );
};

export default ButtonPrime;
