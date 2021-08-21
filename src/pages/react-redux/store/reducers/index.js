import { combineReducers } from "redux";
import counter1 from "./counter1";
import counter2 from "./counter2";
import counter3 from "./counter3";

// 利用 combineReducers 合并为一个reducer，供createStore 使用
export default combineReducers({
  counter1,
  counter2,
  counter3,
});
