import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LayoutContainer } from "./index.styles";

import NavComponent from "./nav/Nav.component";
import MainComponent from "./main/Main.component";
import SearchComponent from "../search/Search.component";
import { MENU_CLICK, SEARCH_CLICK } from "../../redux/common/actions";
import { RootState } from "../../redux/index";

const UserLayout: React.FC = ({ children }) => {
  const { isMenuClick, isSearchClick } = useSelector(
    (state: RootState) => state.common
  );

  const dispatch = useDispatch();

  const menuClicked = () => {
    dispatch({ type: MENU_CLICK });
  };

  const searchClicked = () => {
    dispatch({ type: SEARCH_CLICK });
  };

  return (
    <LayoutContainer>
      <SearchComponent searchClicked={searchClicked} isSearchClick={isSearchClick}/>
      <NavComponent menuClicked={menuClicked} searchClicked={searchClicked} isMenuClick={isMenuClick}/>
      <MainComponent>{children}</MainComponent>
    </LayoutContainer>
  );
};

export default UserLayout;
