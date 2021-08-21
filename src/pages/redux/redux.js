function createStore(reducer, preloadedState) {
  let state = preloadedState;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }
  function subscribe(listener) {
    listeners.push(listener);
    // 返回取消订阅函数
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }
  dispatch({ type: "@@REDUXU/INIT" }); // 主动触发，初始化state
  return {
    getState,
    dispatch,
    subscribe,
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return (...args) => {
    return dispatch(actionCreator.apply(this, args));
  };
}

function bindActionCreators(actionCreators, dispatch) {
  // 如果传参是函数，直接执行 返回结果
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  // 如果是对象，就遍历对象，返回结果对象hash
  if (typeof actionCreators === "object") {
    const boundActionCreators = {};
    for (const key in actionCreators) {
      const actionCreator = actionCreators[key];
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
  }
  return false;
}

/**
 * 循环所有的reducer，把新state 传进去，拿到新值，再返回新值的集合
 * @param {*} reducers reducer 的集合
 * @returns 新的状态的集合
 */
function combineReducers(reducers) {
  return function (state = {}, action) {
    const nextState = {};
    for (const key in reducers) {
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  };
}

export default {
  createStore,
  bindActionCreators,
  combineReducers,
};
