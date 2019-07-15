import { combineReducers } from "redux";
import stats from "./stats";
import auth from "./auth";
export default combineReducers({
  stats,
  auth
});
