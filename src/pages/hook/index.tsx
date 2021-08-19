import React from "react";
import HookUseState from "@Comp/hook/useState";
import HookMemo from "@Comp/hook/React.memo";
import HookUseMemo from "@Comp/hook/useMemo";
import HookUseCallback from "@src/components/hook/useCallback";
import HookUseReducer from "@src/components/hook/useReducer";
import HookUseContext from "@src/components/hook/useContext";
import HookUseEffect from "@src/components/hook/useEffect";
import HookUseRef from "@src/components/hook/HookUseRef";
import HookUseLayoutEffect from "@src/components/hook/useLayoutEffect";

class Hook extends React.Component {
  render() {
    return (
      <div>
        <h2>Hook</h2>
        <HookUseState></HookUseState>
        <h3>改变name，不希望依赖num的组件也重新render，消耗性能</h3>
        <HookMemo></HookMemo>
        <HookUseMemo></HookUseMemo>
        <HookUseCallback></HookUseCallback>
        <HookUseReducer></HookUseReducer>
        <HookUseContext></HookUseContext>
        <HookUseEffect></HookUseEffect>
        <HookUseRef></HookUseRef>
        <HookUseLayoutEffect></HookUseLayoutEffect>
      </div>
    );
  }
}

export default Hook;
