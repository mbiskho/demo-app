import { createStore, applyMiddleware, compose } from "redux";
import allReducers from '../reducer';
import thunk from "redux-thunk";

import Demo from '../../template/DemoRedux/reducer'

const middleware = [thunk];

const initialState = {};

const store = createStore(
  Demo,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
  )
);

export default store;
