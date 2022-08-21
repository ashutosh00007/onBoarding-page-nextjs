import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./reducers";

export type TGlobalState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools());

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
