import React from "react";

import { CustomButtonContainer } from "./Button.styles";

export type ButtonTypes = {
  inverted?: boolean;
  onClick?: any;
};

const CustomButton: React.FC<ButtonTypes> = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
