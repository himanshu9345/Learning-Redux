import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todos } from "./todos/reducers";
const reducers = {
  todos,
};
const presistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
// presist state of application
const persistedReducer = persistReducer(presistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
