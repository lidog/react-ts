import React from "react";
import actions from "../store/actions/counter2";
import { connect } from "react-redux";

export default connect(
  (state: any) => state.counter2,
  actions
)(function (props: any) {
  const { number, add, minus } = props;
  return (
    <div>
      <h2>counter2</h2>
      <input value={number} readOnly />
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
});
