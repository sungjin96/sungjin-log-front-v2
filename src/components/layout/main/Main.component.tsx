import React from "react";

import { MainContainer } from "./Main.styles";

const MainComponent: React.FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainComponent;
