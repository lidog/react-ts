/*
最简单的使用方式
*/

import { createStore } from "redux";

const Add = "Add";
const Minus = "Minus";
const initialState = 0;
/**
 * 通过老状态 和 动作类型  返回新的状态值
 * @param {*} oldState 老状态
 * @param {*} action 动作对象， 普通的js 对象 ，必须有个type 属性 {type: 'xxx'}
 */
function reducer(oldState, action) {
  switch (action.type) {
    case Add:
      return oldState + 1;
    case Minus:
      return oldState - 1;
    default:
      return oldState;
  }
}

// 创建 并导出 一个实例对象
const store = createStore(reducer, initialState);

export default store;
