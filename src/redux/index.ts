import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import commonReducer from "./common";

const rootReducer = combineReducers({
  common: commonReducer,
});

const middleware = [logger, Thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
