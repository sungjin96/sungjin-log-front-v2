import React from "react";

import NavActiveComponent from "./active/NavActive.component";
import NavNotActiveComponent from "./notActive/NavNotActive.component";
import { IconContainer } from './Nav.styles';

import {
  NavContainer,
  NavHeader,
  MenuIcon,
  SearchIcon,
  NavBottomContainer,
  SettingIcon,
} from "./Nav.styles";

type NavPropsType = {
  menuActive: boolean;
  menuClicked: any;
};

const NavComponent: React.FC<NavPropsType> = ({ menuActive, menuClicked }) => {
  return (
    <NavContainer menuActive={menuActive}>
      <NavHeader>
        <MenuIcon onClick={menuClicked} menuActive={menuActive} />
        <SearchIcon menuActive={menuActive} />
      </NavHeader>
      {menuActive ? <NavNotActiveComponent /> : <NavActiveComponent />}
      <NavBottomContainer>
        <IconContainer>
          <SettingIcon />
        </IconContainer>
      </NavBottomContainer>
    </NavContainer>
  );
};

export default NavComponent;
