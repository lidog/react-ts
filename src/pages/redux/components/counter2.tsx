import React, { useEffect, useState } from "react";
import store from "../store";
import { bindActionCreators } from "redux";
import actions from "../store/actions/counter2";

const boundActions = bindActionCreators(actions, store.dispatch);

export default function () {
  const [num, setNum] = useState(store.getState().counter2.number);
  const unSub = store.subscribe(() => {
    setNum(store.getState().counter2.number);
  });
  useEffect(() => unSub);
  return (
    <div>
      <h2>counter2</h2>
      <input value={num} readOnly />
      <button onClick={boundActions.add}>+</button>
      <button onClick={boundActions.minus}>-</button>
    </div>
  );
}
