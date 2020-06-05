import React from "react";

import NavActiveComponent from "./active/NavActive.component";
import NavNotActiveComponent from "./notActive/NavNotActive.component";

import {
  NavContainer,
  NavHeader,
  MenuIcon,
  SearchIcon,
  NavBottomContainer,
} from "./Nav.styles";

type NavPropsType = {
  menuActive: boolean;
  menuClicked: any;
};

const NavComponent: React.FC<NavPropsType> = ({ menuActive, menuClicked }) => {
  return (
    <NavContainer menuActive={menuActive}>
      <NavHeader>
        <MenuIcon onClick={menuClicked} menuActive={menuActive}/>
        <SearchIcon menuActive={menuActive}/>
      </NavHeader>
      {menuActive ? <NavNotActiveComponent /> : <NavActiveComponent />}
      <NavBottomContainer></NavBottomContainer>
    </NavContainer>
  );
};

export default NavComponent;
