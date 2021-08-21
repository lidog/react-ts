import React, { useEffect, useState } from "react";
import store from "./easyStore";

export default function () {
  const [num, setNum] = useState(store.getState());
  const add = () => store.dispatch({ type: "Add" });
  const Minus = () => store.dispatch({ type: "Minus" });
  const unSub = store.subscribe(() => {
    setNum(store.getState());
  });
  useEffect(() => unSub);
  return (
    <div>
      <h2>redux</h2>
      <input value={num} readOnly />
      <button onClick={add}>+</button>
      <button onClick={Minus}>-</button>
    </div>
  );
}
