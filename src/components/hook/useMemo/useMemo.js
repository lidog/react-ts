const hookState = [];
let hookIndex = 0;

/**
 * 缓存复杂类型
 * @param {*} factory data工厂函数
 * @param {*} deps 依赖state数组
 */
function useMemo(factory, deps) {
  if (hookState[hookIndex]) {
    const [lastMemo, lastDeps] = hookState[hookIndex];
    const same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      // 如果依赖项没有变化，就返回最后上一个结果；索引+1
      hookIndex++;
      return lastMemo;
    }
    // 如果依赖变化，生成新的结果返回，索引+1
    const newMemo = factory();
    hookState[hookIndex++] = [newMemo, deps];
    return newMemo;
  }
  // 初次渲染, 放回一个初始函数
  const newMemo = factory();
  hookState[hookIndex++] = [newMemo, deps];
  return newMemo;
}
