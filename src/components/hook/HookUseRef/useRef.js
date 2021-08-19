const hookState = [];
let hookIndex = 0;
function useRef(initialState) {
  hookState[hookIndex] = hookState[hookIndex] || { current: initialState };
  return hookState[hookIndex++];
}
