import styled, { css } from "styled-components";

import { ReactComponent as MenuI } from "../../../assets/icons/align-left.svg";
import { ReactComponent as SearchI } from "../../../assets/icons/search.svg";
import { ReactComponent as SettingI } from "../../../assets/icons/settings.svg";

import BackgroundImage from "../../../assets/images/nav_background_image.jpg";

type NavStylePropsType = {
  isMenuClick?: boolean;
  upAndDown?: string;
};

export const NavContainer = styled.aside<NavStylePropsType>`
  transition: all 0.3s;
  width: ${({ isMenuClick }) => (isMenuClick ? "50%" : "30%")};
  min-width: 30rem;
  height: calc(100vh - 4rem);
  padding: 2rem;
  position: relative;
  box-shadow: ${(props) => props.theme.shadow.light};

  @media only screen and (max-width: 93.8em) {
    width: calc(100% - 4rem);
    height: auto;

    ${({ isMenuClick }) => (isMenuClick ? "height: 100vh; position: fixed;" : "")}
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
      ${({ isMenuClick }) =>
        isMenuClick ? "rgba(173, 213, 228, 1)" : "rgba(131, 206, 242, 0.3)"};
    z-index: -1;
  }
`;

const NavHeaderCss = css`
  z-index: 1;
  position: fixed;
  margin-left: -2rem;
  margin-top: -2rem;
  padding: 2rem;
  width: calc(100% - 4rem);
  background-color: ${({ theme }) => theme.color.primary};
`;

// ======================= Header Start
export const NavHeader = styled.div<NavStylePropsType>`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 93.8em) {
    transition: all 0.2s;
    ${(props) => props.upAndDown === "up" ? NavHeaderCss : ""}
  }
`;

export const MenuIcon = styled(MenuI)`
  width: 4rem;
  height: 4rem;
  transition: all 0.2s;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const SearchIcon = styled(SearchI)`
  width: 4rem;
  height: 4rem;
  transition: all 0.2s;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;
// ======================= Header End

// ======================= Section Start
export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
`;
// ======================= Section End

// ======================= Bottom Start
export const NavBottomContainer = styled.div`
  height: 4rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 93.8em) {
    bottom: 6rem;
    right: 4rem;
    left: 4rem;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -2px -2px 10px -1px rgba(255, 255, 255, 0.4);

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.4),
      -0.5px -0.5px 0px rgba(255, 255, 255, 0.4),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.01);
    transform: scale(1);
  }
`;

export const SettingIcon = styled(SettingI)`
  width: 3rem;
  height: 3rem;
`;
