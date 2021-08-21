import React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter1";

// 告诉react-redux要拿 state 中的哪个值
const mapStateToProps = (state: any) => state.counter1;

function Counter1(props: any) {
  const { number, add, minus } = props;
  return (
    <div>
      <h2>counter1</h2>
      <input value={number} readOnly />
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

/**
 * 父组件通过 provider 告诉 react-redux 全局store
 * 此处通过 mapStateToProps ，映射要取哪个数据； 内部可以通过useState 初始化为响应式数据number
 * 传入action， 让react-redux 可以dispatch 更新数据
 */
export default connect(mapStateToProps, actions)(Counter1);
