import React from "react";

import { NavSection } from "../Nav.styles";
import {
  MenuList,
  MenuItem,
  MenuContainer,
  MenuContentContainer,
  BastPostContainer,
  InfoHeaderConteinr,
  TagContentContainer,
  TagItem,
  TagTitle,
  MoreIcon,
  NavActiveContainer,
  NavMenuContainer,
  NavInfoContainer,
  MenuHeaderContainer,
  MenuTitle,
  BastTagContainer,
  PostList,
  PostItem,
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
            <BastTagContainer>
              <InfoHeaderConteinr>
                <TagTitle>핫 태그</TagTitle>
                <MoreIcon />
              </InfoHeaderConteinr>
              <TagContentContainer>
                <TagItem>React</TagItem>
                <TagItem>Javascript</TagItem>
                <TagItem>아무거나</TagItem>
                <TagItem>잡생각</TagItem>
              </TagContentContainer>
            </BastTagContainer>
            <BastPostContainer>
              <InfoHeaderConteinr>
                <TagTitle>핫 포스트</TagTitle>
              </InfoHeaderConteinr>
              <PostList>
                <PostItem>v2-blog 개발일지 01</PostItem>
                <PostItem>v2-blog 개발일지 02</PostItem>
                <PostItem>v2-blog 개발일지 03</PostItem>
                <PostItem>v2-blog 개발일지 04</PostItem>
                <PostItem>v2-blog 개발일지 05</PostItem>
                <PostItem>v2-blog 개발일지 06</PostItem>
                <PostItem>v2-blog 개발일지 07 - 마무리</PostItem>
              </PostList>
            </BastPostContainer>
          </NavInfoContainer>
        </NavActiveContainer>
      </NavSection>
    </>
  );
};

export default NavActiveComponent;
