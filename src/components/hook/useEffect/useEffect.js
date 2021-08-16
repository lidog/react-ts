const hookState = [];
let hookIndex = 0;
function useEffect(effect, deps) {
  if (hookState[hookIndex]) {
    const [lastDestroy, lastDeps] = hookState[hookIndex];
    const same = deps && deps.every((item, index) => item === lastDeps[index]);
    if (!same) {
      // 如果依赖有变化，
      // 如果上一次有返回销毁函数，就执行销毁函数
      lastDestroy && lastDestroy();
      // 开启一个宏任务；
      setTimeout(() => {
        const destroy = effect(); // 返回值是一个销毁函数
        hookState[++hookIndex] = [destroy, deps];
      });
    }
  } else {
    setTimeout(() => {
      const destroy = effect();
      hookState[hookIndex] = [destroy, deps];
    });
  }
}

export default useEffect;
