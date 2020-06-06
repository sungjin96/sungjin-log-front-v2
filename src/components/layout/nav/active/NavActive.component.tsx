import React from "react";

import {
  NavActiveContainer,
  NavMenuContainer,
  NavInfoContainer,
  MenuHeaderContainer,
  MenuTitle,
  BastTagContainer,
} from "./NavActive.styles";
import { NavSection } from "../Nav.styles";
import { BastPostContainer } from "./NavActive.styles";
import {
  MenuList,
  MenuItem,
  MenuContainer,
  MenuContentContainer,
} from "./NavActive.styles";

const NavActiveComponent: React.FC = () => {
  return (
    <>
      <NavSection>
        <NavActiveContainer>
          <NavMenuContainer>
            <MenuHeaderContainer>카테고리</MenuHeaderContainer>
            <MenuContentContainer>
              <MenuContainer>
                <MenuTitle>개발</MenuTitle>
                <MenuList>
                  <MenuItem>React (2)</MenuItem>
                  <MenuItem>Javascript (2)</MenuItem>
                  <MenuItem>Java (2)</MenuItem>
                  <MenuItem>Ios (2)</MenuItem>
                  <MenuItem>React (2)</MenuItem>
                  <MenuItem>Javascript (2)</MenuItem>
                  <MenuItem>Java (2)</MenuItem>
                  <MenuItem>Ios (2)</MenuItem>
                </MenuList>
              </MenuContainer>

              <MenuContainer>
                <MenuTitle>일상</MenuTitle>
                <MenuList>
                  <MenuItem>리뷰 (2)</MenuItem>
                  <MenuItem>생각정리 (2)</MenuItem>
                  <MenuItem>잡생각 (2)</MenuItem>
                </MenuList>
              </MenuContainer>

              <MenuContainer>
                <MenuTitle>일상</MenuTitle>
                <MenuList>
                  <MenuItem>리뷰 (2)</MenuItem>
                  <MenuItem>생각정리 (2)</MenuItem>
                  <MenuItem>잡생각 (2)</MenuItem>
                </MenuList>
              </MenuContainer>

              <MenuContainer>
                <MenuTitle>일상</MenuTitle>
                <MenuList>
                  <MenuItem>리뷰 (2)</MenuItem>
                  <MenuItem>생각정리 (2)</MenuItem>
                  <MenuItem>잡생각 (2)</MenuItem>
                </MenuList>
              </MenuContainer>

              <MenuContainer>
                <MenuTitle>일상</MenuTitle>
                <MenuList>
                  <MenuItem>리뷰 (2)</MenuItem>
                  <MenuItem>생각정리 (2)</MenuItem>
                  <MenuItem>잡생각 (2)</MenuItem>
                </MenuList>
              </MenuContainer>
            </MenuContentContainer>
          </NavMenuContainer>
          <NavInfoContainer>
            <BastTagContainer></BastTagContainer>
            <BastPostContainer></BastPostContainer>
          </NavInfoContainer>
        </NavActiveContainer>
      </NavSection>
    </>
  );
};

export default NavActiveComponent;
