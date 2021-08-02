import { combineReducers } from "redux";

import counter from "./Example/counter";
import auth from "./Example/auth";
import fetch from "./Example/fetch";

const allReducers = combineReducers({
  counter,
  auth,
  posts: fetch,
});
export default allReducers;
