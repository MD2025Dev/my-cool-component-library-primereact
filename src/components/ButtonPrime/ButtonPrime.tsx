import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const ButtonPrime = (props: ButtonProps) => {
  return <Button onClick={props.onClick} label={props.label} rounded></Button>;
};

export default ButtonPrime;
