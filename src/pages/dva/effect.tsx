import dva, { connect } from "dva";
import React from "react";

export default function () {
  function delay(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // 实例化
  const app = dva();
  // 定义一个model
  app.model({
    namespace: "dvaCounter", // 当前model 的命名空间
    state: { number: 0 }, // 初始state 值
    // 处理函数map, key 相当于 actionType, 值是本state对应的处理函数，state 是此命名空间下的分状态
    reducers: {
      add(state, action) {
        return { number: state.number + 1 };
      },
      minus(state, action) {
        return { number: state.number - 1 };
      },
    },
    effects: {
      // 监听所有的派发的 dvaCounter/asyncAdd的动作，执行对应的saga函数
      *asyncAdd(action, { call, put }) {
        yield call(delay, 1000); // 异步动作
        // 在model 的effect 中，如果派发的动作是给自己的模型，是不需要添加namespace/ 的
        // yield put({ type: 'counter/add' }) //触发add
        yield put({ type: "add" }); // 触发add
      },
      *asyncMinus(action, { call, put }) {
        yield call(delay, 1000); // 异步动作
        yield put({ type: "minus" }); // 触发add
      },
    },
  });
  function Counter(props: any) {
    // props 会得到两个属性： {number, dispatch}
    // dvaCounter 是命名空间， add 是reducers的key；
    const add = () => props.dispatch({ type: "dvaCounter/add" });
    const minus = () => props.dispatch({ type: "dvaCounter/minus" });
    // 'dvaCounter/asyncAdd' ： namespace/effect key
    const asyncAdd = () => props.dispatch({ type: "dvaCounter/asyncAdd" });
    const asyncMinus = () => props.dispatch({ type: "dvaCounter/asyncMinus" });
    return (
      <div>
        <h3>effect异步派发用法</h3>
        <input value={props.number} readOnly></input>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={asyncAdd}>async +</button>
        <button onClick={asyncMinus}>async -</button>
      </div>
    );
  }
  const ConnectCounter = connect(
    // 只需要第一个参数，定义取哪个命名空间的值
    (state: any) => state.dvaCounter
  )(Counter);
  // 定义要渲染的内容
  app.router(() => <ConnectCounter />);
  // 开始渲染
  app.start("#effect");
}
