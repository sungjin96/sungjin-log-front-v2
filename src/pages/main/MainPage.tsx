import React from "react";
import { MainContainer, CardContainer } from "./Main.styles";
import CardComponent from '../../components/card/Card.component';

const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <CardContainer>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </CardContainer>
    </MainContainer>
  );
};

export default MainPage;
