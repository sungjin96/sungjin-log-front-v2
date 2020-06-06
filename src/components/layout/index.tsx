import React, { useState } from "react";
import { LayoutContainer } from './index.styles';
import NavComponent from './nav/Nav.component';
import MainComponent from './main/Main.component';

const Layout: React.FC = ({children}) => {
  const [menuActive, setMenuActive] = useState(true);

  const menuClicked = () => {
    setMenuActive(!menuActive);
  }
  return(
    <LayoutContainer>
      <NavComponent menuActive={menuActive} menuClicked={menuClicked}/>
      <MainComponent>
        {children}
      </MainComponent>
    </LayoutContainer>
  )
}

export default Layout;