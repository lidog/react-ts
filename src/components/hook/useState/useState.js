const hookState = [];
let hookIndex = 0;

function useState(initialState) {
  hookState[hookIndex] = hookState[hookIndex] || initialState;
  const currentIndex = hookIndex;
  function setState(newState) {
    // 利用闭包保存住自己的 index 指向
    hookState[currentIndex] = newState; // 每次调用set，都更新自己的值
    scheduleUpdate(); // 状态变化后，要执行调度更新任务
  }
  // 返回结果后，然后hookIndex加一，下一次调用useState 就不会重复
  return [hookState[hookIndex++], setState];
}

function scheduleUpdate() {
  // update  render
}
