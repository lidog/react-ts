import React from "react";
import Counter1 from "./components/counter1";
import Counter2 from "./components/counter2";
import Counter3 from "./components/counter3";
import { Provider } from "react-redux";
import store from "./store";

export default function () {
  return (
    <Provider store={store}>
      <h2>react-redux</h2>
      <Counter1></Counter1>
      <Counter2></Counter2>
      <Counter3></Counter3>
    </Provider>
  );
}
