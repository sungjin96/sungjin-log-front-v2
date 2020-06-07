import { CommonState, CommonAction } from "./types";
import { createReducer } from "typesafe-actions";
import { MENU_CLICK, SEARCH_CLICK } from "./actions";

const initialState: CommonState = {
  isMenuClick: false,
  isSearchClick: false,
};

const commonReducer = createReducer<CommonState, CommonAction>(initialState, {
  [MENU_CLICK]: (state: CommonState) => ({
    ...state,
    isMenuClick: !state.isMenuClick,
  }),
  [SEARCH_CLICK]: (state: CommonState) => ({
    ...state,
    isSearchClick: !state.isSearchClick,
  }),
});

export default commonReducer;
