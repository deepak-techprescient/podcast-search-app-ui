import { applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { homePageReducer } from "../reducers/homePageReducer";

const middleWares = [thunk];
const middleWareEnhancers = applyMiddleware(...middleWares);
export const store = createStore(
    homePageReducer,
    composeWithDevTools(middleWareEnhancers)
);

export default store;