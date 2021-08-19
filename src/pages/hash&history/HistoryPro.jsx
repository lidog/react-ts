import React, { useState, useEffect } from "react";

function HistoryPro() {
  const historyObj = window.history;
  const [pathName, setPathName] = useState("/a");
  const changeHistory = path => {
    window.history.pushState({ path }, "", path);
  };
  function historyStack() {
    historyObj.pushState({ path: "/c" }, "", "/c");
    historyObj.pushState({ path: "/d" }, "", "/d");
    historyObj.pushState({ path: "/e" }, "", "/e");
    historyObj.back();
    historyObj.pushState({ path: "/f" }, "", "/f");
    historyObj.go(1);
    historyObj.back();
    /**
     * history 栈的情况是，和指针情况
     * [c]，c
     * [c,d]， d
     * [c,d,e], e
     * [c,d], d
     * [c,d,f], f
     * go(1) 表示向前一步， 但是前面没有路径了，所以等于无用代码
     */
  }
  useEffect(() => {
    window.addEventListener("popstate", event => {
      console.log(event.state);
    });
    window.onpushstate = event => {
      setPathName(event.detail.pathName);
      console.log(event.detail.pathName);
    };
    (function () {
      const oldPushState = historyObj.pushState;
      // 装饰pushState 方法，使其可以监听到路由的变化
      historyObj.pushState = (state, title, pathName) => {
        const result = oldPushState.call(historyObj, state, title, pathName);
        if (typeof window.onpushstate === "function") {
          window.onpushstate(
            // 创建一个事件的实例作为 自定义函数的参数
            new CustomEvent("pushstate", { detail: { pathName, state } })
          );
        }
        return result;
      };
    })();
    return () => (window.onpushstate = null);
  }, []);
  return (
    <div>
      <h3>HistoryPro</h3>
      <p>装饰history.pushState方法，触发自定义事件</p>
      <ul>
        <li>
          <button onClick={() => changeHistory("/a")}>/a</button>
        </li>
        <li>
          <button onClick={() => changeHistory("/b")}>/b</button>
        </li>
        <h3>{pathName}</h3>
      </ul>
      <button onClick={() => historyStack()}>stack</button>
    </div>
  );
}

export default HistoryPro;
