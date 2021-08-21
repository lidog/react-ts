import { useContext, useLayoutEffect, useReducer } from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "redux";

export { default as Provider } from "./Provider";

export function useDispatch() {
  const { store } = useContext(ReactReduxContext);
  return store.dispatch;
}

/**
 *
 * @param {*} actions 动作集合 {type: xxx}
 * @returns 返回免dispatch 的函数集合；直接调用可以改变 state 触发更新
 */
export function useBoundDispatch(actions) {
  const { store } = useContext(ReactReduxContext);
  return bindActionCreators(actions, store.dispatch);
}

/**
 *
 * @param {*} selector 隐射 store 的值
 * @returns 最新的状态值
 */
export function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const state = store.getState();
  const selectedState = selector(state);
  // 订阅更新
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useLayoutEffect(() => store.subscribe(forceUpdate), []);
  return selectedState;
}
