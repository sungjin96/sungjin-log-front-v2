import React, { useEffect, useState } from "react";

import NavActiveComponent from "./notActive/NavNotActive.component";
import NavNotActiveComponent from "./active/NavActive.component";
import { IconContainer } from "./Nav.styles";

import {
  NavContainer,
  NavHeader,
  MenuIcon,
  SearchIcon,
  NavBottomContainer,
  SettingIcon,
} from "./Nav.styles";

type NavPropsType = {
  isMenuClick: boolean;
  menuClicked: any;
  searchClicked: any;
};

const NavComponent: React.FC<NavPropsType> = ({
  isMenuClick,
  menuClicked,
  searchClicked,
}) => {
  const [upAndDown, setUpAndDown] = useState("down");

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent, true);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScrollEvent = (e: any) => {
    if (!e.srcElement.scrollingElement) return;
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    if (scrollTop > "72") {
      setUpAndDown("up");
    } else if (scrollTop < "72") {
      setUpAndDown("down");
    }
  };

  return (
    <NavContainer isMenuClick={isMenuClick}>
      <NavHeader upAndDown={upAndDown}>
        <MenuIcon onClick={menuClicked} />
        <SearchIcon onClick={searchClicked} />
      </NavHeader>
      {isMenuClick ? <NavNotActiveComponent /> : <NavActiveComponent />}
      <NavBottomContainer>
        <IconContainer>
          <SettingIcon />
        </IconContainer>
      </NavBottomContainer>
    </NavContainer>
  );
};

export default NavComponent;
