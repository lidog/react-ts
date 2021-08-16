import React, { useReducer, useContext, createContext } from "react";

const myContext = createContext({});

/**
 * 处理函数 接受老状态和动作，返回新状态
 * 封装一系列的处理过程。
 * @param state 老状态
 * @param action 动作
 * @returns
 */
function reducer(state = { number: 0 }, action: any) {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    case "MIN":
      return { number: state.number - 1 };
    default:
      return state;
  }
}

function HookUseContext() {
  // 第一参数是处理函数，第二个参数是初始state
  // 返回能更新UI的state，和触发动作的handle
  const [state, dispatch] = useReducer(reducer, { number: 0 });
  return (
    <div>
      <h3>useContext</h3>
      <myContext.Provider value={{ state, dispatch }}>
        <Child></Child>
      </myContext.Provider>
    </div>
  );
}

function Child() {
  return <GrandeChildren />;
}

// 孙组件，直接通过context 获得props
function GrandeChildren() {
  const { state, dispatch } = useContext(myContext) as any;
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "MIN" })}>-</button>
    </div>
  );
}

export default HookUseContext;
