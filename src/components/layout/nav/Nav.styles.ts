import styled from "styled-components";

import { ReactComponent as MenuI } from "../../../assets/icons/align-left.svg";
import { ReactComponent as SearchI } from "../../../assets/icons/search.svg";

import BackgroundImage from "../../../assets/images/nav_background_image.jpg";

type NavStylePropsType = {
  menuActive?: boolean;
};

export const NavContainer = styled.aside<NavStylePropsType>`
  transition: all 0.3s;
  width: ${({ menuActive }) => (menuActive ? "50%" : "30%")};
  min-width: 30rem;
  padding: 2rem;
  position: relative;
  box-shadow: ${(props) => props.theme.shadow.light};

  @media only screen and (max-width: 93.8em) {
    width: calc(100% - 4rem);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px
      ${({ menuActive }) =>
        menuActive ? "rgba(87, 168, 147, 0.9)" : "rgba(255, 255, 255, 0.3)"};
    z-index: -1;
  }
`;

// ======================= Header Start
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuIcon = styled(MenuI)<NavStylePropsType>`
  width: 3.5rem;
  height: 3.5rem;
  transition: all 0.2s;
  ${({ menuActive, theme }) =>
    menuActive ? "color: #fff" : `color: ${theme.color.info}`};

  &:hover {
    cursor: pointer;
    ${({ menuActive, theme }) =>
      menuActive ? "color: #fff" : `color: ${theme.color.infoLight}`};
    transform: scale(1.1);
  }

  &:active {
    ${({ menuActive, theme }) =>
      menuActive
        ? `${theme.color.background}`
        : `color: ${theme.color.infoDark}`};
    transform: scale(1);
  }
`;

export const SearchIcon = styled(SearchI)<NavStylePropsType>`
  width: 3.5rem;
  height: 3.5rem;
  transition: all 0.2s;
  ${({ menuActive, theme }) =>
    menuActive ? "color: #fff" : `color: ${theme.color.info}`};

  &:hover {
    cursor: pointer;
    ${({ menuActive, theme }) =>
      menuActive ? "color: #fff" : `color: ${theme.color.infoLight}`};
    transform: scale(1.1);
  }

  &:active {
    ${({ menuActive, theme }) =>
      menuActive
        ? `${theme.color.background}`
        : `color: ${theme.color.infoDark}`};
    transform: scale(1);
  }
`;
// ======================= Header End

// ======================= Section Start
export const NavSection = styled.section`

`;

export const NavProfileContainer = styled.div``;

export const NavProfileIconWrap = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.info};
  position: relative;
  margin: 4rem auto;
`;

export const NavProfileIcon = styled.img`
  width: 10rem;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// ======================= Section End

// ======================= Title Start
export const NavTitleContainer = styled.div`
  margin: 0 auto;
`;

export const NavTitle = styled.p`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  letter-spacing: 0.4rem;
  color: ${(props) => props.theme.color.info};
`;

export const NavInfo = styled.p`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  margin-top: 3rem;
  line-height: 4rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.color.info};
`;
// ======================= Title End

// ======================= Bottom Start
export const NavBottomContainer = styled.div`
  background-color: #ccc;
  height: 4rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
`;
