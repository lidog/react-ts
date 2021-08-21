import React from "react";
import actions from "../store/actions/counter3";
import { useSelector, useDispatch } from "react-redux";
import { useBoundDispatch } from "../react-redux";

export default function (props: any) {
  const { number } = useSelector((state: any) => state.counter3);
  const dispatch = useDispatch();
  const add = () => dispatch(actions.add());
  const minus = () => dispatch(actions.minus());
  return (
    <div>
      <h2>counter3 (hook)</h2>
      <input value={number} readOnly />
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

/**
 * 利用封装 useBoundDispatch 更加简化操作
 * @param props
 * @returns
 */
function Counter33(props: any) {
  const { number } = useSelector((state: any) => state.counter3);
  const { add, minus } = useBoundDispatch(actions);
  return (
    <div>
      <h2>counter3 (useBoundDispatch)</h2>
      <input value={number} readOnly />
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
