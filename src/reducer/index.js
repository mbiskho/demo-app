import { combineReducers } from "redux";

import counter from "./counter";
import auth from "./auth";

const allReducers = combineReducers({
  counter,
  auth,
});
export default allReducers;
