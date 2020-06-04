import styled from "styled-components";

import { ReactComponent as MenuI } from "../../../assets/icons/align-left.svg";
import { ReactComponent as SearchI } from "../../../assets/icons/search.svg";

import BackgroundImage from "../../../assets/images/nav_background_image.jpg";

export const NavContainer = styled.nav`
  width: 20%;
  min-width: 30rem;
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-size: cover;
    opacity: 0.6;
  }
`;

// ======================= Header Start
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuIcon = styled(MenuI)`
  width: 3rem;
  height: 3rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: #ccc;
    transform: scale(1.1);
  }
`;
export const SearchIcon = styled(SearchI)`
  width: 3rem;
  height: 3rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: #ccc;
  }
`;
// ======================= Header End

// ======================= Section Start
export const NavSection = styled.section``;

export const NavProfileContainer = styled.div``;

export const NavProfileIconWrap = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.greyDark4};
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
  font-size: 4.5rem;
  letter-spacing: 0.4rem;
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
