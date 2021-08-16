const hookState = [];
let hookIndex = 0;

function useReducer(reducer, initialState) {
  hookState[hookIndex] = hookState[hookIndex] || initialState;
  const currentIndex = hookIndex;
  function dispatch(action) {
    typeof action === "function" ? action(hookState[currentIndex]) : action;
    // hookState[currentIndex] 表示的是上一次的状态
    // 通过上一次的状态，执行操作后，得到新状态，覆盖上一次的状态
    hookState[currentIndex] = reducer ? reducer(hookState[currentIndex], action) : action;
    scheduleUpdate(); // 更新任务
  }
  return [hookState[hookIndex++], dispatch];
}

// useState 其实是useReducer 的语法糖
function useState(state) {
  return useReducer(null, state);
}

function scheduleUpdate() {
  // update  render
}
