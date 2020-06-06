import React, { useState } from "react";
import { LayoutContainer } from './index.styles';
import NavComponent from './nav/Nav.component';
import MainComponent from './main/Main.component';
import SearchComponent from "../search/Search.component";

const Layout: React.FC = ({children}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(true);

  const menuClicked = () => {
    setMenuActive(!menuActive);
  }

  const searchClicked = () => {
    setSearchActive(!isSearchActive);
  }

  return(
    <LayoutContainer>
      <SearchComponent isSearchActive={isSearchActive} searchClicked={searchClicked}/>
      <NavComponent menuActive={menuActive} menuClicked={menuClicked} searchClicked={searchClicked}/>
      <MainComponent>
        {children}
      </MainComponent>
    </LayoutContainer>
  )
}

export default Layout;