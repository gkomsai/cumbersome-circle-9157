import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as projectReducer } from "./auth/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({ authReducer, projectReducer });

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
