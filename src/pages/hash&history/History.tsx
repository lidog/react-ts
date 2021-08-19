import React, { useState, useEffect } from "react";

function History() {
  const [pathName, setPathName] = useState("/a");
  const changeHistory = (path: string) => {
    // 调用 pushState 不会触发任何事件；
    // 通常就是利用无刷新改url的特性，配合装饰者模式，做router
    window.history.pushState({ page: 1 }, "", path);
  };
  useEffect(() => {
    // 如果当前的历史栈指针发生变化就会触发 popstate 事件，执行对应的回调函数
    window.addEventListener("popstate", () => {
      setPathName(window.location.pathname);
    });
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul>
        <li>
          <button onClick={() => changeHistory("/a")}>/a</button>
        </li>
        <li>
          <button onClick={() => changeHistory("/b")}>/b</button>
        </li>
        <h3>{pathName}</h3>
      </ul>
    </div>
  );
}

export default History;
