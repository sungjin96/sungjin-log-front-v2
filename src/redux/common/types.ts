import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type CommonAction = ActionType<typeof actions>;
export type CommonState = {
  isMenuClick: boolean;
  isSearchClick: boolean;
};