import React from "react";
import { LayoutContainer } from './index.styles';
import NavComponent from './nav/Nav.component';
import MainComponent from './main/Main.component';

const Layout: React.FC = ({children}) => {
  return(
    <LayoutContainer>
      <NavComponent />
      <MainComponent>
        {children}
      </MainComponent>
    </LayoutContainer>
  )
}

export default Layout;