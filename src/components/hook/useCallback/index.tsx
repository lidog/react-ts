import React, { useState, memo, useCallback } from "react";

function Child(props: any) {
  console.warn(props.str);
  return (
    <p>
      {props.number} {props.text} <button onClick={props.handleClick}>改变num</button>
    </p>
  );
}

const MemoChild = memo(Child);

function HookUseCallback() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("输入改变name");
  const handleClick = () => setNum(num + 1);
  const cacheHandleClick = useCallback(handleClick, [num]);
  return (
    <div>
      <h3>useCallback</h3>
      <input value={name} onChange={event => setName(event.target.value)}></input>
      <button onClick={handleClick}>改变num</button>
      <Child
        number={num}
        handleClick={handleClick}
        str={"子组件props 没有改变，但是却重新渲染了，不合理"}
        text={"普通组件"}
      />
      <MemoChild
        number={num}
        handleClick={handleClick}
        str={"因为传入了回调函数，即使用了memo缓存组件，还是会触发渲染，不合理"}
        text={"缓存组件"}
      />
      <MemoChild
        number={num}
        handleClick={cacheHandleClick}
        str={"利用useCallback 缓存props带入的函数，函数依赖值不改变就不会渲染，合理"}
        text={"处理回调函数参数的缓存组件"}
      />
    </div>
  );
}

export default HookUseCallback;
