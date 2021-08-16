const hookState = [];
let hookIndex = 0;

/**
 * 缓存复杂类型
 * @param {*} factory data工厂函数
 * @param {*} deps 依赖state数组
 */
function useCallback(callback, deps) {
  if (hookState[hookIndex]) {
    const [lastCallback, lastDeps] = hookState[hookIndex];
    const same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      // 如果依赖项没有变化，就返回最后上一个结果；索引+1
      hookIndex++;
      return lastCallback;
    }
    // 如果依赖变化，返回新传入的callback，索引+1；
    // 每次传入的callback 因为react 组件都会渲染，所以都是新的callback
    hookState[hookIndex++] = [callback, deps];
    return callback;
  }
  // 初次渲染, 放回一个初始函数
  hookState[hookIndex++] = [callback, deps];
  return callback;
}
