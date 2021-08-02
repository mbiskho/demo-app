import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
