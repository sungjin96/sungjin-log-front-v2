import React from "react";

import ProfileImage from '../../../assets/images/my_image.png';

import { NavTitleContainer, NavTitle, NavBottomContainer } from './Nav.styles';

import {
  NavContainer,
  NavHeader,
  MenuIcon,
  SearchIcon,
  NavSection,
  NavProfileContainer,
  NavProfileIconWrap,
  NavProfileIcon,
} from "./Nav.styles";

const NavComponent: React.FC = () => {
  return (
    <NavContainer>
      <NavHeader>
        <MenuIcon />
        <SearchIcon />
      </NavHeader>
      <NavSection>
      
        <NavProfileContainer>
          <NavProfileIconWrap>
            <NavProfileIcon src={ProfileImage} alt="프로필 사진"/>
          </NavProfileIconWrap>
        </NavProfileContainer>

        <NavTitleContainer>
          <NavTitle>Sungjin.log</NavTitle>
        </NavTitleContainer>

      </NavSection>

      <NavBottomContainer></NavBottomContainer>
    </NavContainer>
  );
};

export default NavComponent;
